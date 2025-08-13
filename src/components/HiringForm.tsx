"use client";
import { useState } from "react";

export default function HiringForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("formType", "hiring");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setStatus("Thanks! I’ll get back to you soon.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">For Hiring</h2>
      <input
        name="name"
        required
        placeholder="Your full name"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent"
      />
      <input
        name="company"
        placeholder="Company name"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent"
      />
      <input
        name="position"
        placeholder="Your position"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent"
      />
      <input
        name="budget"
        placeholder="Budget (optional)"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent"
      />
      <input
        name="timeline"
        placeholder="Timeline (optional)"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent"
      />
      <textarea
        name="message"
        required
        placeholder="Additional details"
        rows={4}
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent"
      />
      <button
        disabled={loading}
        className="px-4 py-2 rounded-md bg-foreground text-background text-sm w-fit disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send"}
      </button>
      {status && <p className="text-sm text-black/70 dark:text-white/70">{status}</p>}
    </form>
  );
}
