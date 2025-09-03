import ContactForm from "../components/ContactForm";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  return (
    <section className="section">
      <div className="container stack" style={{ ['--stack-gap' as any]: '1rem' }}>
        <h2>let’s build something excellent</h2>
        <p style={{ color: "var(--fg-muted)", maxWidth: "70ch" }}>
          Share a bit about your goals, timeline, and budget. I’ll respond with next steps.
        </p>

        <div className="contact-layout">
          <ContactCard />
          <div className="contact-form-wrap card">
            <div className="contact-form-head">
              <h3 style={{ margin: 0 }}>send an inquiry</h3>
              <p className="contact-mini">
                Tell me about your project—scope, vibe, deadline, and any references.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}