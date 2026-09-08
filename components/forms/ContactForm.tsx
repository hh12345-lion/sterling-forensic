"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE_EMAIL } from "@/lib/site-config";
import { submitNetlifyForm } from "@/lib/submitNetlifyForm";

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
          phone: "",
          formType: "contact",
          message,
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        success?: boolean;
      };

      if (response.ok && (result.ok || result.success || response.status === 200)) {
        try {
          await submitNetlifyForm("contact", {
            name: fullName,
            email,
            message,
          });
        } catch {
          // Sheets/webhook already stored the enquiry; don't block the visitor.
        }
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
    <form
      name="contact"
      method="POST"
      action="/__forms.html"
      onSubmit={handleSubmit}
      className="max-w-lg space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
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
