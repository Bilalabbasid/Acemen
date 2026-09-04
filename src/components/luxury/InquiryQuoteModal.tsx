"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductItem } from "@/data/products";
import { B2B_CONFIG } from "@/config/b2b";
import { brandData } from "@/data/brand";

interface InquiryQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: ProductItem | null;
  defaultSubject?: string;
}

export default function InquiryQuoteModal({
  isOpen,
  onClose,
  product,
  defaultSubject,
}: InquiryQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "Individual Pre-Order (1–5 Pairs)",
    productInterest: "",
    desiredQuantity: "1 Pair / Single Piece",
    size: "EU 42",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (product) {
        setFormData((prev) => ({
          ...prev,
          productInterest: `${product.name} (${product.modelNumber || "ACE-ATELIER"})`,
        }));
      } else if (defaultSubject) {
        setFormData((prev) => ({
          ...prev,
          productInterest: defaultSubject,
        }));
      }
    } else {
      document.body.style.overflow = "";
      setStatus("idle");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, product, defaultSubject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      const subjectLine = `[ACEMEN Pre-Order / Waitlist] ${formData.name} - ${formData.productInterest || "Atelier Reservation"}`;
      const emailBody = [
        `ACEMEN PRE-ORDER & ATELIER WAITLIST RESERVATION`,
        `----------------------------------------`,
        `Client Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone / WhatsApp: ${formData.phone || "Not provided"}`,
        `Inquiry / Reservation Type: ${formData.orderType}`,
        `Product Selection: ${formData.productInterest || "General Atelier Collection"}`,
        `Selected Sizing / Volume: ${formData.size} (${formData.desiredQuantity})`,
        `----------------------------------------`,
        `Special Requests / Fitting Notes:`,
        formData.message || "Standard atelier craftsmanship requested.",
      ].join("\n");

      const mailtoLink = `mailto:${brandData.contact.email}?subject=${encodeURIComponent(
        subjectLine
      )}&body=${encodeURIComponent(emailBody)}`;

      await new Promise((resolve) => setTimeout(resolve, 600));

      // Direct client email link trigger
      window.location.href = mailtoLink;

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[280] overflow-y-auto flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-xl bg-white text-noir-950 overflow-hidden shadow-2xl z-10 my-6 border border-neutral-200 max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-noir-950 text-white p-6 sm:p-7 relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors p-2"
                aria-label="Close pre-order modal"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>

              <div className="flex items-center gap-2 text-champagne-400 text-[10px] font-heading font-bold tracking-[0.3em] uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ACEMEN ATELIER • LONDON</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Pre-Order & Private Waitlist
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1">
                Reserve your handcrafted piece from our upcoming atelier run, or join the private allocation waitlist for priority delivery.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 overflow-y-auto flex-1">
              {status === "success" ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-ivory-100 flex items-center justify-center mx-auto text-leather-cognac">
                    <CheckCircle2 className="w-8 h-8 stroke-[1.2]" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-noir-950 font-medium">
                    Reservation Transmitted
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your pre-order / waitlist reservation has been dispatched to our London atelier concierge. We will confirm your allocation and completion timeline shortly.
                  </p>
                  <div className="pt-4 flex justify-center gap-4">
                    <button onClick={onClose} className="btn-luxury-primary">
                      Return to Collection
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Full Name <span className="text-leather-cognac">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Lord Harrington"
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      />
                      {errors.name && <p className="mt-1 text-[10px] text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Email Address <span className="text-leather-cognac">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="client@luxury.com"
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      />
                      {errors.email && <p className="mt-1 text-[10px] text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Row 2: Phone & Order Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7000 000000"
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Request Type
                      </label>
                      <select
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      >
                        {B2B_CONFIG.orderTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Product Interest & Size/Quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Selected Piece
                      </label>
                      <input
                        type="text"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        placeholder="e.g. The Regent Classic Oxford"
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Size / Quantity
                      </label>
                      <select
                        name="desiredQuantity"
                        value={formData.desiredQuantity}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      >
                        {B2B_CONFIG.estimatedVolumes.map((vol) => (
                          <option key={vol} value={vol}>
                            {vol}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Notes / Sizing */}
                  <div>
                    <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                      Fitting Notes, Custom Monogram & Special Instructions
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please note your preferred EU/UK shoe size, custom color requests, personalized initial debossing, or any bespoke fitting details."
                      className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 placeholder-neutral-400 resize-none focus:outline-none focus:border-noir-950"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto btn-luxury-primary py-3 px-7 text-xs tracking-[0.2em] flex items-center justify-center gap-2 font-bold"
                    >
                      {status === "submitting" ? (
                        <span>Reserving Piece...</span>
                      ) : (
                        <>
                          <Clock className="w-3.5 h-3.5" />
                          <span>CONFIRM PRE-ORDER / WAITLIST</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center gap-1 text-[10px] text-neutral-400 font-heading tracking-wider uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-leather-cognac" />
                      <span>Atelier Guaranteed Allocation</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
