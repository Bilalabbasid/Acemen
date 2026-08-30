"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Bespoke Leather Commission",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please detail the nature of your inquiry";
    } else if (formData.message.trim().length < 8) {
      newErrors.message = "Please provide at least 8 characters";
    }
    return newErrors;
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      const mailtoLink = `mailto:info@acemen.co.uk?subject=${encodeURIComponent(
        `[ACEMEN Concierge] ${formData.subject} - ${formData.name}`
      )}&body=${encodeURIComponent(
        `Client Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInquiry Type: ${formData.subject}\n\nMessage:\n${formData.message}`
      )}`;

      await new Promise((resolve) => setTimeout(resolve, 800));
      window.location.href = mailtoLink;

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "Bespoke Leather Commission", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white border border-neutral-200 p-8 sm:p-12 shadow-sm">
      {status === "success" ? (
        <div className="text-center py-16 space-y-4">
          <div className="w-16 h-16 rounded-full bg-ivory-100 flex items-center justify-center mx-auto text-leather-cognac">
            <CheckCircle2 className="w-8 h-8 stroke-[1.2]" />
          </div>
          <h3 className="font-display text-3xl text-noir-950 font-medium">Inquiry Transmitted</h3>
          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
            Thank you for contacting ACEMEN. Your brief has been dispatched to our London Private Client Desk. Our leather specialist will reply in confidence within one business day.
          </p>
          <div className="pt-4">
            <button onClick={() => setStatus("idle")} className="btn-luxury-outline">
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="space-y-1 pb-2 border-b border-neutral-100">
            <span className="text-[10px] font-heading font-bold tracking-[0.25em] uppercase text-leather-cognac block">
              SECURE CLIENT INTAKE
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-noir-950">
              Brief Our Concierge Desk
            </h3>
          </div>

          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>An error occurred. Please contact us directly at info@acemen.co.uk.</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Full Name <span className="text-leather-cognac">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Lord Alexander Wright"
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 placeholder-neutral-400 focus:outline-none focus:border-noir-950 transition-colors"
              />
              {errors.name && <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Email Address <span className="text-leather-cognac">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 placeholder-neutral-400 focus:outline-none focus:border-noir-950 transition-colors"
              />
              {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Telephone / WhatsApp
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+44 7587 386522"
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 placeholder-neutral-400 focus:outline-none focus:border-noir-950 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Inquiry Nature
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950 transition-colors"
              >
                <option value="Bespoke Leather Commission">Bespoke Leather Commission</option>
                <option value="Product Availability & Ordering">Product Availability & Ordering</option>
                <option value="Personal Monogramming Inquiry">Personal Monogramming Inquiry</option>
                <option value="Private London Atelier Appointment">Private London Atelier Appointment</option>
                <option value="Corporate & VIP Gifting">Corporate & VIP Gifting</option>
                <option value="Lifetime Restoration & Service">Lifetime Restoration & Service</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
              Inquiry Details <span className="text-leather-cognac">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your requirements, specifications, or preferred appointment dates."
              className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 placeholder-neutral-400 resize-none focus:outline-none focus:border-noir-950 transition-colors"
            />
            {errors.message && <p className="mt-1 text-[11px] text-red-600">{errors.message}</p>}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto btn-luxury-primary py-4 px-8 tracking-[0.25em] flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <span>Transmitting Brief...</span>
              ) : (
                <>
                  <span>Transmit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <span className="text-[10px] text-neutral-400 font-heading tracking-wider uppercase">
              Confidentiality Guaranteed
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
