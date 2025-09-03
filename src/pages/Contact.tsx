import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="section">
      <div className="container stack" style={{ ['--stack-gap' as any]: '1rem' }}>
        <h2>let’s build something excellent</h2>
        <p style={{ color: "var(--fg-muted)", maxWidth: "70ch" }}>
          Share a bit about your goals, timeline, and budget. I’ll respond with next steps.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}