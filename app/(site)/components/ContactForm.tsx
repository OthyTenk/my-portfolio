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
    <div className="bg-slate-300/20 dark:bg-[#1a1a1a] p-8 rounded-[2rem] shadow-none border border-neutral-200 dark:border-zinc-600">
      <h2 className="text-3xl font-serif text-gray-900 dark:text-white mb-8">
        Send Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-500 dark:text-gray-400 ml-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full bg-white dark:bg-[#1f1f1f] text-gray-900 dark:text-white rounded-2xl px-6 py-4 outline-none border border-neutral-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500/50 transition-all focus:border-orange-500"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-500 dark:text-gray-400 ml-1">
              Email
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              required
              className="w-full bg-white dark:bg-[#1f1f1f] text-gray-900 dark:text-white rounded-2xl px-6 py-4 outline-none border border-neutral-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500/50 transition-all focus:border-orange-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-500 dark:text-gray-400 ml-1">
            Subject
          </label>
          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full bg-white dark:bg-[#1f1f1f] text-gray-900 dark:text-white rounded-2xl px-6 py-4 outline-none border border-neutral-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500/50 transition-all focus:border-orange-500"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-500 dark:text-gray-400 ml-1">
            Message
          </label>
          <textarea
            placeholder="Your message..."
            required
            rows={5}
            className="w-full bg-white dark:bg-[#1f1f1f] text-gray-900 dark:text-white rounded-2xl px-6 py-4 outline-none border border-neutral-200 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500/50 transition-all focus:border-orange-500 resize-none"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-orange-500 text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-orange-600 transition-all mt-8 transform active:scale-[0.98] shadow-lg shadow-orange-500/20 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send"}
          {!loading && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          )}
        </button>
      </form>
    </div>
  );
};
