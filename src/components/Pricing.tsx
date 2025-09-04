function Tier(props: { name: string; price: string; desc: string; bullets: string[]; cta?: string }) {
  const { name, price, desc, bullets, cta = "get started" } = props;
  return (
    <div className="tier card">
      <h4 className="tier-title">{name.toLowerCase()}</h4>
      <p className="price">{price}</p>
      <p className="tier-desc">{desc}</p>
      <ul className="tier-list">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="cta">
        <a className="btn btn-primary pill" href="/contact">{cta}</a>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="section">
      <div className="container stack" style={{ ['--stack-gap' as any]: '1rem' }}>
        <h2>pricing</h2>
        <p style={{ color: "var(--fg-muted)", maxWidth: "70ch" }}>
          Simple tiers. Every project includes analytics, on-page SEO, and responsive design.
        </p>

        <div className="pricing">
          <Tier
            name="portfolio"
            price="from $200"
            desc="Showcase your work online."
            bullets={[
              "1–3 sections",
              "project / gallery showcase",
              "front-end polish & design",
              "domain + hosting setup",
              "responsive layout",
            ]}
          />
          <Tier
            name="business"
            price="from $600"
            desc="Multi-page site for growth."
            bullets={[
              "up to 6 pages",
              "booking / forms",
              "CMS-ready structure",
              "domain + hosting setup",
              "SEO & performance tuned",
            ]}
          />
          <Tier
            name="other / custom"
            price="varies"
            desc="Tailored to unique ideas."
            bullets={[
              "event microsites",
              "landing pages",
              "creative builds",
              "domain + hosting setup",
            ]}
            cta="let’s talk"
          />
        </div>
      </div>
    </section>
  );
}