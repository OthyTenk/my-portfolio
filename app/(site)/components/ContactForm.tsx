"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-black/5 animate-slide-up">
      <div className="max-w-xl mx-auto">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Have a project in mind? Let's build something amazing together.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white rounded-2xl px-6 py-4 outline-none border border-slate-200 dark:border-white/10 focus:ring-4 focus:ring-primary-500/10 transition-all focus:border-primary-500"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                required
                className="w-full bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white rounded-2xl px-6 py-4 outline-none border border-slate-200 dark:border-white/10 focus:ring-4 focus:ring-primary-500/10 transition-all focus:border-primary-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="What is this about?"
              required
              className="w-full bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white rounded-2xl px-6 py-4 outline-none border border-slate-200 dark:border-white/10 focus:ring-4 focus:ring-primary-500/10 transition-all focus:border-primary-500"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Message
            </label>
            <textarea
              placeholder="Tell me more about your project..."
              required
              rows={5}
              className="w-full bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white rounded-2xl px-6 py-4 outline-none border border-slate-200 dark:border-white/10 focus:ring-4 focus:ring-primary-500/10 transition-all focus:border-primary-500 resize-none"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary-500 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-primary-600 transition-all mt-8 transform active:scale-[0.98] shadow-xl shadow-primary-500/25 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              <>
                Send Message
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
