"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE_EMAIL } from "@/lib/site-config";

const instructionTypes = [
  "Expert Witness Report",
  "Fraud Investigation",
  "Business Valuation",
  "Construction Quantum",
  "Loss & Damages Quantification",
  "Asset Tracing",
  "Family Proceedings",
  "Other",
];

const phonePrefixes = [
  { value: "+44", label: "UK (+44)" },
  { value: "+353", label: "Ireland (+353)" },
  { value: "+1", label: "US/Canada (+1)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+", label: "Other" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [phonePrefix, setPhonePrefix] = useState("+44");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const fullName = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const nationalNumber = String(formData.get("phone_national") || "").trim();
    const phone = nationalNumber
      ? `${phonePrefix}${nationalNumber.replace(/\s+/g, "")}`
      : "";
    const organisation = String(formData.get("organisation") || "").trim();
    const instructionType = String(formData.get("instruction_type") || "").trim();
    const message = String(formData.get("message") || "").trim();

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          organisation,
          instructionType,
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
    "w-full rounded-md border border-border bg-white px-4 py-3 text-body transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
            Full Name <span className="text-highlight">*</span>
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
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
            Email Address <span className="text-highlight">*</span>
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
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="organisation" className="mb-2 block text-sm font-medium text-primary">
            Organisation
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            className={inputClass}
            autoComplete="organization"
          />
        </div>
        <div>
          <label htmlFor="phone_national" className="mb-2 block text-sm font-medium text-primary">
            Telephone
          </label>
          <div className="flex flex-col gap-2 sm:flex-row">
            <select
              id="phone_prefix"
              name="phone_prefix"
              value={phonePrefix}
              onChange={(e) => setPhonePrefix(e.target.value)}
              className={`${inputClass} w-full shrink-0 sm:w-36`}
              aria-label="Country phone prefix"
            >
              {phonePrefixes.map((prefix) => (
                <option key={prefix.value} value={prefix.value}>
                  {prefix.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              id="phone_national"
              name="phone_national"
              className={inputClass}
              autoComplete="tel-national"
              placeholder="Phone number"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="instruction-type" className="mb-2 block text-sm font-medium text-primary">
          Nature of Instruction <span className="text-highlight">*</span>
        </label>
        <select
          id="instruction-type"
          name="instruction_type"
          required
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {instructionTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-primary">
          Message <span className="text-highlight">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputClass}
          placeholder="Please provide a brief description of the matter, including any relevant deadlines."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-highlight" role="alert">
          There was a problem submitting your enquiry. Please email us directly
          at {SITE_EMAIL}
        </p>
      )}

      <Button type="submit" className="w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Submit Enquiry"}
      </Button>
    </form>
  );
}
