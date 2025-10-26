// ✅ Imports
import diwenPortfolioVideo from "../assets/diwen-portfolio.mp4";
import diwenPortfolio from "../assets/diwen-portfolio.png";
import wilsonPortfolio from "../assets/wilson-portfolio.png";
import enhancedBadminton from "../assets/enhanced-badminton.png";
import stemsf from "../assets/stemsf.png";
import smashspeed from "../assets/smashspeed.png";
import haoPortfolio from "../assets/hao-portfolio.png";
import freakysaur from "../assets/freakysaur.png";
import { useEffect, useState } from "react";

type Item = {
  title: string;
  subtitle: string;
  img?: string;    // default preview
  video?: string;  // optional desktop video
  link?: string;
};

const WORK: Item[] = [
  {
    title: "Diwen's Portfolio",
    subtitle: "portfolio • design & development",
    img: diwenPortfolio,           // ✅ static preview
    video: diwenPortfolioVideo,    // ✅ desktop enhancement
    link: "https://diwenhuang.ca",
  },
  {
    title: "SmashSpeed AI",
    subtitle: "landing page • app showcase",
    img: smashspeed,
    link: "https://smashspeed.ca",
  },
  {
    title: "Hao's Portfolio",
    subtitle: "portfolio • swe & aesthetic design",
    img: haoPortfolio,
    link: "https://haocui.dev",
  },
  {
    title: "Freakysaur",
    subtitle: "landing page • hackathon game",
    img: freakysaur,
    link: "https://freakysaur.vercel.app",
  },
  {
    title: "Wilson's Portfolio",
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
  {
    title: "STEMsf",
    subtitle: "non-profit • stem education platform",
    img: stemsf,                            // ✅ preview image
    link: "https://stemsf.org",             // ✅ link
  },
];

export default function FeaturedWork() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsMobile(mq.matches);
  }, []);

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
                {w.video && !isMobile ? (
                  <video
                    className="project-video"
                    src={w.video}
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={(e) => {
                      const v = e.currentTarget;
                      try {
                        v.currentTime = 0;
                      } catch {}
                      v.pause();
                    }}
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                ) : (
                  <img
                    src={w.img}
                    alt={w.title}
                    className="project-image"
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