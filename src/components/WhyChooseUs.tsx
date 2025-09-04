const ITEMS = [
  { t: "priced sanely", d: "Way cheaper than agency alternatives—transparent, no surprise add-ons." },
  { t: "you own it", d: "Full codebase, repo access, and assets. No lock-in, ever." },
  { t: "flexible scope", d: "From tiny tweaks to multi-page builds—iterate at your pace." },
  { t: "fast & thoughtful", d: "Near-instant replies and creative, modern designs with intent." }
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container stack" style={{ ['--stack-gap' as any]: '1rem' }}>
        <h2>why choose diwen</h2>
        <p style={{ color: "var(--fg-muted)", maxWidth: "70ch" }}>
          fair pricing. ownership. flexibility. creative polish.
        </p>

        <div className="features">
          {ITEMS.map(i => (
            <article key={i.t} className="feature">
              <h3 style={{ marginBottom: ".35rem", textTransform: "lowercase" }}>{i.t}</h3>
              <p style={{ color: "var(--fg-dim)" }}>{i.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}