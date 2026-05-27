import { useState, FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

interface ServiceFormProps {
  serviceName: string;
}

export default function ServiceForm({ serviceName }: ServiceFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/5 p-10 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-green-400" />
        <h3 className="font-display text-xl font-bold">Request Received!</h3>
        <p className="mt-2 text-sm text-white/60">
          We&apos;ll contact you within 24 hours about {serviceName}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="mb-1 font-display text-xl font-bold">Get a Free Consultation</h3>
      <p className="mb-6 text-sm text-white/50">Interested in {serviceName}? Fill out the form below.</p>
      <div className="space-y-4">
        <input
          required
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-electric/50"
        />
        <input
          required
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-electric/50"
        />
        <input
          required
          type="email"
          placeholder="Email Address"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-electric/50"
        />
        <textarea
          required
          rows={3}
          placeholder="Tell us about your project..."
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-electric/50"
        />
        <button type="submit" className="btn-primary w-full gap-2">
          Request Consultation <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
