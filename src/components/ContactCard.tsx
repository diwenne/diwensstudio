export default function ContactCard() {
  return (
    <aside className="card contact-card">
      <h3>get in touch</h3>

      <p className="contact-blurb">
        Prefer DMs? Email or Instagram works great. I reply fast.
      </p>

      <div className="contact-rows">
        <a className="contact-row" href="mailto:diwennee@gmail.com">
          <span className="contact-ico" aria-hidden>📧</span>
          <div className="contact-text">
            <div className="contact-label">email</div>
            <div className="contact-value">diwennee@gmail.com</div>
          </div>
        </a>

        <a
          className="contact-row"
          href="https://instagram.com/devdiwen"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-ico" aria-hidden>📷</span>
          <div className="contact-text">
            <div className="contact-label">instagram</div>
            <div className="contact-value">@devdiwen</div>
          </div>
        </a>
      </div>

    </aside>
  );
}