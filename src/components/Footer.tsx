export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="brand">diwen’s studio<span className="dot">.</span></div>
          <small style={{color:"var(--fg-muted)"}}>
            bespoke websites for individuals, small businesses, and startups.
          </small>
        </div>
        <div style={{justifySelf:"end", alignSelf:"center"}}>
          <small style={{color:"var(--fg-muted)"}}>
            © {new Date().getFullYear()} diwen huang — all rights reserved
          </small>
        </div>
      </div>
    </footer>
  );
}