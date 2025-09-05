import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="stack" style={{ ["--stack-gap" as any]: "1rem" }}>
      {/* Honeypot anti-spam */}
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <input className="input" name="user_name" placeholder="your name" required />
        <input className="input" type="email" name="user_email" placeholder="email" required />
      </div>

      <input className="input" name="company" placeholder="company / project (optional)" />
      <textarea className="textarea" name="message" placeholder="tell me about your project…" required />

      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "idle" && "send inquiry"}
        {status === "sending" && "sending…"}
        {status === "sent" && "thanks — I’ll reply shortly"}
        {status === "error" && "something went wrong — try again"}
      </button>
    </form>
  );
}