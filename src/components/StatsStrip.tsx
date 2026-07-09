import { CheckCircle2 } from "lucide-react";

const proofItems = [
  "Private enquiry pathway",
  "Multi-sector venture focus",
  "UK-based contact details",
  "Owner-verified claims only",
];

export default function StatsStrip() {
  return (
    <div className="border-y border-white/10 bg-navy-950">
      <div className="container-page grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {proofItems.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-300" aria-hidden="true" />
            <p className="text-sm font-semibold text-slate-200">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
