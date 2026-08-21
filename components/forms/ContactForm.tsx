"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE_EMAIL } from "@/lib/site-config";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          message,
        }),
      });

      if (response.ok) {
        window.location.href = "/thank-you";
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-border bg-white px-4 py-3 text-body transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm text-primary">
          Name <span className="text-highlight">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClass}
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm text-primary">
          Email <span className="text-highlight">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClass}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-primary">
          Message <span className="text-highlight">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClass}
          placeholder="Brief outline of the matter and any deadlines."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-highlight" role="alert">
          Something went wrong. Please email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <Button type="submit">
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}
