"use client";
import { useState } from "react";
import { Briefcase } from "lucide-react";

export default function HireMeSection() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          type: "hire",
          ...Object.fromEntries(formData.entries()),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("Thank you! I'll review your opportunity and get back within 24 hours.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again or email directly.");
      }
    } catch {
      setStatus("Network error. Please email directly at your.email@domain.com");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
          <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Hire Me Full-Time</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Looking for a permanent role? Let's discuss opportunities.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              name="fullName"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company Email *
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="company@email.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company Name *
            </label>
            <input
              name="companyName"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Job Position *
            </label>
            <input
              name="position"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. Senior Full Stack Developer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Employment Type
            </label>
            <select
              name="employmentType"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Remote</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Salary Range
            </label>
            <input
              name="salaryRange"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g. $80k - $100k"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Start Date
            </label>
            <input
              name="startDate"
              type="date"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Additional Information
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe the role, expectations, and any relevant details..."
          />
        </div>

        {status && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{status}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
