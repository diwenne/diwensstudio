// src/components/CompareTable.tsx
const ROWS = [
  { k: "typical price", me: "$200–$600+ (transparent)", webflow: "$29–$49/mo + templates/apps", wix: "$16–$45/mo + apps", agency: "$5k–$30k+" },
  { k: "2-year cost", me: "$200–$600 (one-off)", webflow: "$700–$1200+", wix: "$400–$1000+", agency: "$5k–$30k+ plus retainers" },
  { k: "own the code", me: "yes (repo handed off)", webflow: "no (platform-locked)", wix: "no (platform-locked)", agency: "usually yes (by contract)" },
  { k: "flexibility / custom", me: "full custom", webflow: "medium", wix: "low–medium", agency: "high" },
  { k: "reply time", me: "near-instant", webflow: "support queue", wix: "support queue", agency: "business hours" },
  { k: "design quality", me: "modern & thoughtful", webflow: "template-first", wix: "template-first", agency: "outdated / rigid" },
  { k: "performance / SEO", me: "best-practice tuned", webflow: "good with effort", wix: "okay", agency: "varies" },
  { k: "vendor lock-in", me: "none", webflow: "high", wix: "high", agency: "low" },
  { k: "timeline", me: "days → weeks", webflow: "hours → days", wix: "hours", agency: "weeks → months" },
];

export default function CompareTable() {
  return (
    <section className="section">
      <div className="container stack" style={{ ['--stack-gap' as any]: '1rem' }}>
        <h2>how it stacks up</h2>
        <p style={{ color: "var(--fg-muted)", maxWidth: "70ch" }}>
          quick glance vs. popular options — typical ranges; your mileage may vary.
        </p>

        <div className="compare card">
          <div className="table-wrap">
            <table className="cmp-table" role="table" aria-label="Website options comparison">
              <thead>
                <tr>
                  <th scope="col" className="criteria-col">criteria</th>
                  <th scope="col">diwen</th>
                  <th scope="col">webflow</th>
                  <th scope="col">wix</th>
                  <th scope="col">agency</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.k}>
                    <th scope="row" className="criteria-col">{r.k}</th>
                    <td>{r.me}</td>
                    <td>{r.webflow}</td>
                    <td>{r.wix}</td>
                    <td>{r.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cmp-note">
            * ballpark numbers — you keep the repo/code with me, no lock-in.
          </p>
        </div>
      </div>
    </section>
  );
}