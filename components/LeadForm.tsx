"use client";

import { useRef, useState } from "react";
import { Button } from "./Button";

type Field = "name" | "email" | "company" | "role" | "message";
type Errors = Partial<Record<Field, string>>;

const ROLE_OPTIONS = [
  "Restoration / roofing contractor",
  "Insurance carrier",
  "TPA / claims operation",
  "Policyholder",
  "Other",
];

const inputBase =
  "w-full rounded-sm border bg-cream px-4 py-3 text-body text-ink_text-primary placeholder:text-ink_text-muted transition-colors duration-instant focus-visible:shadow-focus focus:outline-none";

function emailValid(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export function LeadForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const company = (data.get("company") as string)?.trim();
    if (!name) next.name = "Enter your name";
    if (!email) next.email = "Enter your work email";
    else if (!emailValid(email)) next.email = "Enter a valid work email";
    if (!company) next.company = "Enter your company";
    return next;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next = validate(data);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0] as Field;
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setLoading(true);
    // CEO connects backend later. No network call, simulate then succeed.
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      requestAnimationFrame(() => successRef.current?.focus());
    }, 600);
  }

  function clearError(field: Field) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  if (done) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-md border border-success/40 bg-paper p-8 outline-none"
        role="status"
        aria-live="polite"
      >
        <h3 className="text-h3 text-success">Thanks, we&apos;ll be in touch.</h3>
        <p className="mt-3 text-body text-ink_text-body">
          Your details are with our team. Prefer to talk now? Book a time or call
          us using the buttons above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5" aria-label="Contact Cozmo AI">
      <Text name="name" label="Name" required error={errors.name} onInput={() => clearError("name")} />
      <Text name="email" label="Work email" type="email" required error={errors.email} onInput={() => clearError("email")} />
      <Text name="company" label="Company" required error={errors.company} onInput={() => clearError("company")} />

      <div>
        <label htmlFor="role" className="mb-2 block text-sm text-ink_text-body">
          Role / segment
        </label>
        <select id="role" name="role" defaultValue="" className={`${inputBase} border-line-ink`}>
          <option value="" disabled>
            Select one
          </option>
          {ROLE_OPTIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink_text-body">
          Message <span className="text-ink_text-muted">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={`${inputBase} resize-y border-line-ink`} />
      </div>

      <Button type="submit" loading={loading} className="mt-1 w-full sm:w-auto">
        {loading ? "Sending" : "Request a demo"}
      </Button>
    </form>
  );
}

function Text({
  name,
  label,
  type = "text",
  required,
  error,
  onInput,
}: {
  name: Field;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  onInput?: () => void;
}) {
  const errId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-ink_text-body">
        {label}
        {required && <span className="text-ink_text-muted"> (required)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errId : undefined}
        onInput={onInput}
        className={`${inputBase} ${error ? "border-error" : "border-line-ink"}`}
      />
      <span id={errId} aria-live="polite" className="block">
        {error && <span className="mt-2 block text-sm text-error">{error}</span>}
      </span>
    </div>
  );
}
