import { useState } from "react";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "../data/content";
import "./Footer.css";

const reachOutLinks = [
  { href: profile.github, label: "GitHub", icon: FaGithub },
  { href: profile.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: `mailto:${profile.email}`, label: "Email", icon: HiOutlineEnvelope },
];

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer__glow" aria-hidden />

      <div className="footer__grid">
        <div className="footer__brand">
          <h3>{profile.name}</h3>
          <p>{profile.footerTagline}</p>
        </div>

        <div className="footer__col footer__reach">
          <h4>Reach out</h4>
          <button type="button" className="footer__email" onClick={copyEmail}>
            <span>{profile.email}</span>
            <em>{copied ? "Copied!" : "copy"}</em>
          </button>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="footer__phone"
          >
            {profile.phone}
          </a>
          <div className="footer__pills">
            {reachOutLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noreferrer"}
                className="footer__pill"
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__strip">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
