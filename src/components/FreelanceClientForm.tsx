"use client";
import { useState } from "react";

export default function FreelanceClientForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("formType", "freelance");

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
    <form onSubmit={onSubmit} className="mt-8 max-w-lg mx-auto grid gap-4">
      <h2 className="text-2xl font-semibold mb-4">For Freelance Clients</h2>

      {/* Name */}
      <input
        name="name"
        type="text"
        required
        placeholder="Your full name"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent focus:border-blue-500 focus:ring focus:ring-blue-200"
      />

      {/* Email */}
      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent focus:border-blue-500 focus:ring focus:ring-blue-200"
      />

      {/* Project Type */}
      <input
        name="projectType"
        type="text"
        placeholder="Project type"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent focus:border-blue-500 focus:ring focus:ring-blue-200"
      />

      {/* Budget - currency friendly */}
      <input
        name="budget"
        type="text"
        placeholder="Budget (e.g., 500 USD, €450, ₹30000)"
        pattern="^[0-9,.]+\s?[A-Za-z]{0,3}$"
        title="Enter a number followed by optional currency code (USD, EUR, INR, etc.)"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent focus:border-blue-500 focus:ring focus:ring-blue-200"
      />

      {/* Deadline */}
      <input
        name="deadline"
        type="date"
        placeholder="Deadline (optional)"
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent focus:border-blue-500 focus:ring focus:ring-blue-200"
      />

      {/* Requirements */}
      <textarea
        name="requirements"
        placeholder="Project requirements (optional)"
        rows={3}
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent focus:border-blue-500 focus:ring focus:ring-blue-200"
      />

      {/* Additional Message */}
      <textarea
        name="message"
        required
        placeholder="Additional details"
        rows={3}
        className="px-3 py-2 rounded border border-black/10 dark:border-white/20 bg-transparent focus:border-blue-500 focus:ring focus:ring-blue-200"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 rounded-md bg-white text-black text-sm  disabled:opacity-60 w-full hover:bg-blue-700 transition"
      >
        {loading ? "Sending..." : "Send"}
      </button>

      {/* Status */}
      {status && (
        <p className="text-sm text-black/70 dark:text-white/70">{status}</p>
      )}
    </form>
  );
}
