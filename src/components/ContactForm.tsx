"use client";

import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { useRef, useState } from "react";
import { contactDetails, inquiryTypes } from "@/data/contact";

interface FormData {
  name: string;
  email: string;
  organisation: string;
  phone: string;
  inquiryType: string;
  message: string;
  consent: boolean;
  website: string;
}

type Errors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  email: "",
  organisation: "",
  phone: "",
  inquiryType: inquiryTypes[0],
  message: "",
  consent: false,
  website: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const firstInvalidRef = useRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>(null);

  const validate = () => {
    const nextErrors: Errors = {};

    if (!formData.name.trim()) nextErrors.name = "Enter your name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.inquiryType.trim()) nextErrors.inquiryType = "Choose an inquiry type.";
    if (!formData.message.trim()) {
      nextErrors.message = "Enter a short message.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = "Please provide at least 20 characters.";
    }
    if (!formData.consent) {
      nextErrors.consent = "Confirm that you agree to be contacted about this inquiry.";
    }
    if (formData.website) {
      nextErrors.website = "Unable to submit this inquiry.";
    }

    return nextErrors;
  };

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const assignInvalidRef = (
    field: keyof FormData,
    node: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null
  ) => {
    if (node && errors[field] && !firstInvalidRef.current) {
      firstInvalidRef.current = node;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    firstInvalidRef.current = null;
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      requestAnimationFrame(() => firstInvalidRef.current?.focus());
      return;
    }

    setStatus("submitting");
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.organisation ? `Organisation: ${formData.organisation}` : "",
      formData.phone ? `Phone: ${formData.phone}` : "",
      `Inquiry type: ${formData.inquiryType}`,
      "",
      formData.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
      `Website inquiry - ${formData.inquiryType}`
    )}&body=${encodeURIComponent(body)}`;

    setStatus("success");
    setFormData(initialFormData);
  };

  const inputClasses =
    "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-950 shadow-sm transition focus:border-gold-500 focus:outline-none focus:ring-4 focus:ring-gold-500/10";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-premium sm:p-8">
      <div className="mb-6 rounded-2xl border border-gold-500/20 bg-gold-50 p-4 text-sm leading-6 text-navy-900">
        This form opens your email app with a prepared message. A production email service
        is not configured in this repository yet.
      </div>

      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />
          Your email app should now be open with the prepared inquiry.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name} required htmlFor="name">
          <input
            id="name"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            ref={(node) => assignInvalidRef("name", node)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClasses}
            autoComplete="name"
          />
        </Field>

        <Field label="Email address" error={errors.email} required htmlFor="email">
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            ref={(node) => assignInvalidRef("email", node)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClasses}
            autoComplete="email"
          />
        </Field>

        <Field label="Organisation" htmlFor="organisation">
          <input
            id="organisation"
            value={formData.organisation}
            onChange={(event) => updateField("organisation", event.target.value)}
            className={inputClasses}
            autoComplete="organization"
          />
        </Field>

        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={inputClasses}
            autoComplete="tel"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Inquiry type" error={errors.inquiryType} required htmlFor="inquiryType">
          <select
            id="inquiryType"
            value={formData.inquiryType}
            onChange={(event) => updateField("inquiryType", event.target.value)}
            ref={(node) => assignInvalidRef("inquiryType", node)}
            aria-invalid={!!errors.inquiryType}
            aria-describedby={errors.inquiryType ? "inquiryType-error" : undefined}
            className={inputClasses}
          >
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Message" error={errors.message} required htmlFor="message">
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(event) => updateField("message", event.target.value)}
            ref={(node) => assignInvalidRef("message", node)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClasses} resize-y`}
            placeholder="Briefly describe the opportunity or enquiry."
          />
        </Field>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(event) => updateField("consent", event.target.checked)}
            ref={(node) => assignInvalidRef("consent", node)}
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-gold-600 focus:ring-gold-500"
          />
          <span>I agree to be contacted about this inquiry.</span>
        </label>
        {errors.consent && (
          <p id="consent-error" role="alert" className="mt-2 flex gap-2 text-sm text-red-600">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.consent}
          </p>
        )}
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-dark mt-8 w-full sm:w-auto">
        <Send className="mr-2 h-4 w-4" aria-hidden="true" />
        {status === "submitting" ? "Preparing..." : "Send Inquiry"}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
}

function Field({ label, htmlFor, children, error, required = false }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-navy-950">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-2 flex gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
