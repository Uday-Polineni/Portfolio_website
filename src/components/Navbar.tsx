import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/content";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="#top" className="navbar__brand" onClick={() => handleNav("#top")}>
        <span className="navbar__brand-mark">U</span>
        <span>{profile.shortName}</span>
      </a>

      <button
        type="button"
        className="navbar__toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
      </button>

      <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNav(link.href);
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="navbar__cta"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
