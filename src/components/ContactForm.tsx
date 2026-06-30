"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      const mailtoLink = `mailto:hello@acemenventures.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;

      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.location.href = mailtoLink;

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-gold-500/50 focus:ring-4 focus:ring-gold-500/10 hover:border-gray-300 text-sm";

  return (
    <div className="relative">
      {/* Decorative gradient */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/10 via-navy-600/5 to-gold-500/10 rounded-[20px] blur-sm" aria-hidden="true" />

      <div className="relative bg-white rounded-2xl shadow-premium-lg border border-gray-100/80 p-7 sm:p-10">
        {status === "success" ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-navy-800 mb-3">Message Sent!</h3>
            <p className="text-gray-500 mb-8 max-w-sm mx-auto">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="btn-primary"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 text-sm">
                <AlertCircle className="w-5 h-5 shrink-0" />
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-gold-500">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputClasses} ${
                    errors.name ? "border-red-300 focus:border-red-400 focus:ring-red-500/10" : ""
                  }`}
                  placeholder="John Smith"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-gold-500">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClasses} ${
                    errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-500/10" : ""
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject <span className="text-gold-500">*</span>
              </label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`${inputClasses} ${
                  errors.subject ? "border-red-300 focus:border-red-400 focus:ring-red-500/10" : ""
                }`}
                placeholder="How can we help?"
              />
              {errors.subject && (
                <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>
              )}
            </div>

            <div className="mb-8">
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                Message <span className="text-gold-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClasses} resize-none ${
                  errors.message ? "border-red-300 focus:border-red-400 focus:ring-red-500/10" : ""
                }`}
                placeholder="Tell us about your project or inquiry..."
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn-gold w-full sm:w-auto gap-2 disabled:opacity-60 disabled:cursor-not-allowed group"
            >
              {status === "submitting" ? (
                <>
                  <span className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
