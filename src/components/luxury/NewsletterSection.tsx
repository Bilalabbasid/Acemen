"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-ivory-100/70 border-b border-neutral-200 py-16 sm:py-24 text-center">
      <div className="container-page max-w-2xl mx-auto space-y-6">
        <span className="text-[10px] font-heading font-bold tracking-[0.35em] uppercase text-leather-cognac block">
          THE MANUFACTURING DISPATCH
        </span>

        <h3 className="font-display text-3xl sm:text-4xl text-noir-950 font-medium tracking-tight">
          SUBSCRIBE TO THE ACEMEN DISPATCH
        </h3>

        <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed max-w-lg mx-auto">
          Receive confidential updates on seasonal leather arrivals, production scheduling windows, Last innovation blueprints, and private London showroom showcases.
        </p>

        {submitted ? (
          <div className="p-4 bg-white border border-neutral-200 max-w-md mx-auto flex items-center justify-center gap-2 text-sm text-noir-950">
            <Check className="w-4 h-4 text-leather-cognac shrink-0" />
            <span className="font-heading text-xs tracking-wider uppercase font-semibold">
              Thank you. Your request for dispatch has been recorded.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your business email"
              className="flex-1 px-4 py-3.5 bg-white border border-neutral-300 text-noir-950 placeholder-neutral-400 text-xs font-heading tracking-wider focus:outline-none focus:border-noir-950 transition-colors"
            />
            <button
              type="submit"
              className="btn-luxury-primary py-3.5 px-6 tracking-[0.2em] shrink-0 flex items-center justify-center gap-2"
            >
              <span>Join Dispatch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[10px] text-neutral-400 font-heading tracking-widest uppercase">
          Confidentiality assured. Strictly for industry partners, buyers, and brands.
        </p>
      </div>
    </section>
  );
}
