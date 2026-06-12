import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "../data/content";
import "./SocialSidebar.css";

const socialLinks = [
  { href: profile.github, label: "GitHub", icon: FaGithub, external: true },
  { href: profile.linkedin, label: "LinkedIn", icon: FaLinkedinIn, external: true },
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    icon: HiOutlineEnvelope,
    external: false,
  },
];

const SocialSidebar = () => (
  <aside className="social-sidebar" aria-label="Social links">
    {socialLinks.map(({ href, label, icon: Icon, external }) => (
      <a
        key={label}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="social-sidebar__link"
        aria-label={label}
        title={label}
      >
        <Icon />
      </a>
    ))}
  </aside>
);

export default SocialSidebar;
