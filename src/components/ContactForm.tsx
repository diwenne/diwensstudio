import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="stack" style={{ ['--stack-gap' as any]: '1rem' }}>
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <input className="input" placeholder="your name" required />
        <input className="input" placeholder="email" type="email" required />
      </div>
      <input className="input" placeholder="company / project (optional)" />
      <textarea className="textarea" placeholder="tell me about your project…" />
      <button className="btn btn-primary" type="submit">
        {status === "sent" ? "thanks — I’ll reply shortly" : "send inquiry"}
      </button>
    </form>
  );
}