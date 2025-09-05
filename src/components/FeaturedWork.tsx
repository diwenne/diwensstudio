// ✅ Imports
import diwenPortfolio from "../assets/diwen-portfolio.mp4";
import wilsonPortfolio from "../assets/wilson-portfolio.png";
import enhancedBadminton from "../assets/enhanced-badminton.png";

type Item = {
  title: string;
  subtitle: string;
  img?: string;
  video?: string;
  link?: string;
};

const WORK: Item[] = [
  {
    title: "Diwen’s Portfolio",
    subtitle: "portfolio • design & development",
    video: diwenPortfolio, // mp4
    link: "https://diwenhuang.ca",
  },
  {
    title: "Wilson’s Portfolio",
    subtitle: "portfolio • design & development",
    img: wilsonPortfolio,
    link: "https://wilsonhuang.ca",
  },
  {
    title: "Enhanced Badminton",
    subtitle: "club website • programs & coaching",
    img: enhancedBadminton,
    link: "https://enhancedbadminton.vercel.app",
  },
];

export default function FeaturedWork() {
  return (
    <section id="featured" className="section">
      <div
        className="container stack"
        style={{ ["--stack-gap" as any]: "1rem" }}
      >
        <h2>featured works</h2>
        <p style={{ color: "var(--fg-muted)", maxWidth: "70ch" }}>
          A small sampling of recent builds. Clean structure, fast loads, and
          hands-on polish.
        </p>

        <div className="project-grid">
          {WORK.map((w) => (
            <a
              key={w.title}
              href={w.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card project"
            >
              <div className="project-thumb">
                {w.video ? (
                  <video
                    className="project-video"
                    src={w.video}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    // Show first frame by default
                    onLoadedData={(e) => {
                      const v = e.currentTarget;
                      // ensure metadata is ready, then lock to frame 0
                      try {
                        v.currentTime = 0;
                      } catch {}
                      v.pause();
                    }}
                    // Hover behavior (desktop)
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                ) : (
                  <div
                    style={{
                      backgroundImage: w.img ? `url(${w.img})` : undefined,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
              </div>

              <div className="project-body">
                <div className="project-title">{w.title}</div>
                <div className="project-sub">{w.subtitle}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}