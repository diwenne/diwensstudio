const ITEMS = [
  { t: "senior craft", d: "Design-first approach with code that sings: semantic, accessible, maintainable." },
  { t: "speed & SEO", d: "Lighthouse-friendly builds with best-practice metadata, image pipelines, and caching." },
  { t: "conversion", d: "Clear narratives and calls-to-action that turn visitors into clients or fans." },
  { t: "handoff", d: "You get docs, source, and a tidy repo so iteration is painless." }
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container stack" style={{ ['--stack-gap' as any]: '1rem' }}>
        <h2>why choose diwen</h2>
        <p style={{ color: "var(--fg-muted)", maxWidth: "70ch" }}>
          Harvard-professor energy. Modern taste. Straight-to-the-point execution.
        </p>

        <div className="features">
          {ITEMS.map(i => (
            <article key={i.t} className="feature">
              <h3 style={{ marginBottom: ".35rem" }}>{i.t}</h3>
              <p style={{ color: "var(--fg-dim)" }}>{i.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}