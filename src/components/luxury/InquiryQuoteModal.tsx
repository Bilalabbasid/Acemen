"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, Building2, Globe, Sparkles } from "lucide-react";
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
    company: "",
    email: "",
    phone: "",
    country: "",
    companyType: "Brand",
    productInterest: "",
    estimatedVolume: "200 – 500 Pairs",
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
          productInterest: `${product.name} (Model: ${product.modelNumber || "ACE-ATELIER"})`,
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
    if (!formData.company.trim()) nextErrors.company = "Company / Brand name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Please describe your project, specifications, or inquiry";
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
      const subjectLine = `[ACEMEN B2B Inquiry] ${formData.company} - ${formData.productInterest || "Wholesale & OEM Inquiry"}`;
      const emailBody = [
        `ACEMEN WHOLESALE & MANUFACTURING INQUIRY`,
        `----------------------------------------`,
        `Contact Name: ${formData.name}`,
        `Company / Brand: ${formData.company}`,
        `Business Email: ${formData.email}`,
        `Phone / WhatsApp: ${formData.phone || "Not provided"}`,
        `Country / Region: ${formData.country || "Not specified"}`,
        `Company Type: ${formData.companyType}`,
        `Product Interest: ${formData.productInterest || "General Catalog"}`,
        `Estimated Order Volume: ${formData.estimatedVolume}`,
        `----------------------------------------`,
        `Project Brief & Specifications:`,
        formData.message,
      ].join("\n");

      const mailtoLink = `mailto:${brandData.contact.email}?subject=${encodeURIComponent(
        subjectLine
      )}&body=${encodeURIComponent(emailBody)}`;

      await new Promise((resolve) => setTimeout(resolve, 600));

      // Trigger user's mail client as primary fail-safe transmission
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
            className="relative w-full max-w-2xl bg-white text-noir-950 overflow-hidden shadow-2xl z-10 my-6 border border-neutral-200 max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-noir-950 text-white p-6 sm:p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors p-2"
                aria-label="Close inquiry modal"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>

              <div className="flex items-center gap-2 text-champagne-400 text-[10px] font-heading font-bold tracking-[0.3em] uppercase mb-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>B2B & WHOLESALE PARTNERSHIP DESK</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Request Specifications & Quote
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1">
                Connect with our London manufacturing specialists to discuss wholesale pricing, custom sampling, OEM development, or private-label production.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              {status === "success" ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-ivory-100 flex items-center justify-center mx-auto text-leather-cognac">
                    <CheckCircle2 className="w-8 h-8 stroke-[1.2]" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-noir-950 font-medium">
                    Inquiry Dispatched to London Desk
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your wholesale and production brief for <strong>{formData.company}</strong> has been transmitted to our London team. A senior footwear development director will review your requirements and reply within one business day.
                  </p>
                  <div className="pt-4 flex justify-center gap-4">
                    <button onClick={onClose} className="btn-luxury-primary">
                      Return to Catalog
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Row 1: Name & Company */}
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
                        placeholder="e.g. Johnathan Vance"
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      />
                      {errors.name && <p className="mt-1 text-[10px] text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Company / Brand Name <span className="text-leather-cognac">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Vance & Co. Footwear"
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      />
                      {errors.company && <p className="mt-1 text-[10px] text-red-600">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Work Email <span className="text-leather-cognac">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      />
                      {errors.email && <p className="mt-1 text-[10px] text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Phone / WhatsApp Direct
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 / +1 / International"
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      />
                    </div>
                  </div>

                  {/* Row 3: Country & Company Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Country / Market
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. United Kingdom, USA, UAE..."
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Company Type
                      </label>
                      <select
                        name="companyType"
                        value={formData.companyType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      >
                        {B2B_CONFIG.companyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Product Reference & Estimated Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Product / Model Reference
                      </label>
                      <input
                        type="text"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        placeholder="e.g. The Regent Oxford (ACE-OXF-01)"
                        className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                        Estimated Order Volume
                      </label>
                      <select
                        name="estimatedVolume"
                        value={formData.estimatedVolume}
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

                  {/* Message / Specifications */}
                  <div>
                    <label className="block text-[11px] font-heading tracking-wider uppercase font-semibold text-noir-950 mb-1">
                      Project Brief, Leather & Branding Specifications <span className="text-leather-cognac">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your required specifications (e.g. leather preference, sole type, custom branding, target delivery window, prototype requirements)."
                      className="w-full px-3.5 py-2.5 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 placeholder-neutral-400 resize-none focus:outline-none focus:border-noir-950"
                    />
                    {errors.message && <p className="mt-1 text-[10px] text-red-600">{errors.message}</p>}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto btn-luxury-primary py-3 px-7 text-xs tracking-[0.2em] flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <span>Transmitting Brief...</span>
                      ) : (
                        <>
                          <span>SEND INQUIRY</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <span className="text-[10px] text-neutral-400 font-heading tracking-wider uppercase">
                      NDA & Confidentiality Respected
                    </span>
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
