function Tier(props: { name: string; price: string; desc: string; bullets: string[]; cta?: string }) {
  const { name, price, desc, bullets, cta = "get started" } = props;
  return (
    <div className="tier card">
      <h3>{name}</h3>
      <p className="price" style={{ marginTop: ".35rem" }}>{price}</p>
      <p style={{ color: "var(--fg-dim)", marginTop: "0.5rem" }}>{desc}</p>
      <ul style={{ marginTop: "1rem", paddingLeft: "1.1rem", color: "var(--fg-muted)" }}>
        {bullets.map(b => <li key={b} style={{ marginBottom: ".4rem" }}>• {b}</li>)}
      </ul>
      <div className="cta">
        <a className="btn btn-primary" href="/contact">{cta}</a>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="section">
      <div className="container stack" style={{ ['--stack-gap' as any]:'1rem' }}>
        <h2>pricing</h2>
        <p style={{ color: "var(--fg-muted)", maxWidth: "70ch" }}>
          Simple tiers. Every project includes analytics, on-page SEO, and responsive design.
        </p>

        <div className="pricing">
          <Tier
            name="starter"
            price="$899"
            desc="Clean one-pager to launch fast."
            bullets={["1–2 sections hero site", "copy polish", "deploy + domain hookup"]}
          />
          <Tier
            name="standard"
            price="$1,999"
            desc="Multi-section site for small businesses."
            bullets={["up to 6 sections", "booking / forms", "CMS-ready structure", "performance pass"]}
          />
          <Tier
            name="studio"
            price="from $3,500"
            desc="Custom design system, animations, case studies."
            bullets={["bespoke visuals", "CMS + blog or case studies", "component library", "1 month post-launch care"]}
            cta="inquire"
          />
        </div>
      </div>
    </section>
  );
}