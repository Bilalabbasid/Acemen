"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Building2, Globe } from "lucide-react";
import { B2B_CONFIG } from "@/config/b2b";
import { brandData } from "@/data/brand";

interface ContactFormProps {
  defaultSubject?: string;
  defaultProduct?: string;
}

function ContactFormInner({ defaultSubject, defaultProduct }: ContactFormProps) {
  const searchParams = useSearchParams();
  const paramSubject = searchParams.get("subject") || defaultSubject || "";
  const paramDetails = searchParams.get("details") || "";
  const paramProduct = searchParams.get("product") || defaultProduct || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    companyType: "Brand",
    productInterest: paramProduct || paramSubject || "Footwear (Oxfords, Monks, Boots, Derbies)",
    estimatedVolume: "200 – 500 Pairs",
    message: paramDetails
      ? `Inquiring about specifications for ${paramSubject || "our collection"}: ${paramDetails}. Please provide technical parameters, customization options, sampling turnaround, and tiered wholesale pricing.`
      : "",
  });

  useEffect(() => {
    if (paramSubject || paramDetails || paramProduct) {
      setFormData((prev) => ({
        ...prev,
        productInterest: paramProduct || paramSubject || prev.productInterest,
        message: paramDetails
          ? `Inquiring about specifications for ${paramSubject || "our collection"}: ${paramDetails}. Please provide technical parameters, customization options, sampling turnaround, and tiered wholesale pricing.`
          : prev.message,
      }));
    }
  }, [paramSubject, paramDetails, paramProduct]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.company.trim()) newErrors.company = "Company / Brand name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Business email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project, volume requirement, or tech pack inquiry";
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
      const subjectLine = `[ACEMEN B2B Inquiry] ${formData.company} - ${formData.productInterest}`;
      const emailBody = [
        `ACEMEN B2B MANUFACTURING & WHOLESALE INQUIRY`,
        `============================================`,
        `Contact Name: ${formData.name}`,
        `Company / Brand: ${formData.company}`,
        `Work Email: ${formData.email}`,
        `Phone / WhatsApp: ${formData.phone || "Not specified"}`,
        `Country / Region: ${formData.country || "Not specified"}`,
        `Company Type: ${formData.companyType}`,
        `Product / Specification Interest: ${formData.productInterest}`,
        `Estimated Order Volume: ${formData.estimatedVolume}`,
        `============================================`,
        `Project Brief & Specifications:`,
        formData.message,
      ].join("\n");

      const mailtoLink = `mailto:${brandData.contact.email}?subject=${encodeURIComponent(
        subjectLine
      )}&body=${encodeURIComponent(emailBody)}`;

      await new Promise((resolve) => setTimeout(resolve, 800));
      window.location.href = mailtoLink;

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="form" className="bg-white border border-neutral-200 p-8 sm:p-12 shadow-sm">
      {status === "success" ? (
        <div className="text-center py-16 space-y-4">
          <div className="w-16 h-16 rounded-full bg-ivory-100 flex items-center justify-center mx-auto text-leather-cognac">
            <CheckCircle2 className="w-8 h-8 stroke-[1.2]" />
          </div>
          <h3 className="font-display text-3xl text-noir-950 font-medium">Inquiry Dispatched to London Desk</h3>
          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Your project brief for <strong>{formData.company}</strong> has been received by our London Footwear Development Desk. A technical director will review your specifications and reply within one business day.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  country: "",
                  companyType: "Brand",
                  productInterest: "Footwear (Oxfords, Monks, Boots, Derbies)",
                  estimatedVolume: "200 – 500 Pairs",
                  message: "",
                });
              }}
              className="btn-luxury-outline"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="space-y-1 pb-2 border-b border-neutral-100">
            <span className="text-[10px] font-heading font-bold tracking-[0.25em] uppercase text-leather-cognac block">
              B2B PARTNERSHIP & MANUFACTURING DESK
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-noir-950">
              Initiate a Wholesale or OEM Brief
            </h3>
            {paramSubject && (
              <p className="text-xs text-leather-cognac font-medium pt-1">
                Referencing specification: <strong>{paramSubject}</strong>
              </p>
            )}
          </div>

          {status === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>An error occurred. Please contact us directly at {brandData.contact.email}.</span>
            </div>
          )}

          {/* Row 1: Name & Company */}
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
                placeholder="e.g. David Sterling"
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 placeholder-neutral-400 focus:outline-none focus:border-noir-950 transition-colors"
              />
              {errors.name && <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="contact-company" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Company / Brand Name <span className="text-leather-cognac">*</span>
              </label>
              <input
                type="text"
                id="contact-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Sterling Sartorial Ltd"
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 placeholder-neutral-400 focus:outline-none focus:border-noir-950 transition-colors"
              />
              {errors.company && <p className="mt-1 text-[11px] text-red-600">{errors.company}</p>}
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-email" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Work Email <span className="text-leather-cognac">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="david@sterling.co.uk"
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 placeholder-neutral-400 focus:outline-none focus:border-noir-950 transition-colors"
              />
              {errors.email && <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Telephone / WhatsApp Direct
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
          </div>

          {/* Row 3: Country & Company Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-country" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Country / Region
              </label>
              <input
                type="text"
                id="contact-country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="e.g. United Kingdom, USA, UAE..."
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 placeholder-neutral-400 focus:outline-none focus:border-noir-950 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-type" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Company Type
              </label>
              <select
                id="contact-type"
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950 transition-colors"
              >
                {B2B_CONFIG.companyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Product / Specification Interest & Estimated Volume */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contact-product" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Product / Specification Interest
              </label>
              <input
                type="text"
                id="contact-product"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                placeholder="e.g. Custom Sole Engineering, Regent Oxford..."
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-volume" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
                Estimated Order Volume
              </label>
              <select
                id="contact-volume"
                name="estimatedVolume"
                value={formData.estimatedVolume}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-ivory-50 border border-neutral-300 text-xs font-body text-noir-950 focus:outline-none focus:border-noir-950 transition-colors"
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
            <label htmlFor="contact-message" className="block text-xs font-heading tracking-wider uppercase font-semibold text-noir-950 mb-2">
              Project Brief, Leather Specs & Requirements <span className="text-leather-cognac">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your requirements (e.g. Last geometry, leather preference, sole specifications, private-label branding, prototype deadlines)."
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
                  <span>SEND INQUIRY</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <span className="text-[10px] text-neutral-400 font-heading tracking-wider uppercase">
              Confidentiality & NDA Respected
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactForm(props: ContactFormProps) {
  return (
    <Suspense fallback={<div className="p-8 bg-white border border-neutral-200 animate-pulse text-xs text-neutral-400">Loading form...</div>}>
      <ContactFormInner {...props} />
    </Suspense>
  );
}
