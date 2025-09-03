type Item = { title: string; subtitle: string; img?: string };

const WORK: Item[] = [
  { title: "QuantumLeap", subtitle: "SaaS landing • brand + build", img: "/src/assets/sample-1.jpg" },
  { title: "Northwood Bakery", subtitle: "local business site • online orders", img: "/src/assets/sample-2.jpg" },
  { title: "Arclight Studio", subtitle: "portfolio • motion & case studies", img: "/src/assets/sample-3.jpg" },
];

export default function FeaturedWork() {
  return (
    <section id="featured" className="section">
      <div className="container stack" style={{ ['--stack-gap' as any]: '1rem' }}>
        <h2>featured works</h2>
        <p style={{ color: "var(--fg-muted)", maxWidth: "70ch" }}>
          A small sampling of recent builds. Clean structure, fast loads, and hands-on polish.
        </p>

        <div className="project-grid">
          {WORK.map((w) => (
            <article key={w.title} className="card project">
              <div className="project-thumb" style={{
                backgroundImage: w.img ? `url(${w.img})` : undefined,
                backgroundSize: "cover", backgroundPosition: "center"
              }} />
              <div className="project-body">
                <div className="project-title">{w.title}</div>
                <div className="project-sub">{w.subtitle}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}