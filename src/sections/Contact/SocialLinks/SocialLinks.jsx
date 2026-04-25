import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import "./SocialLinks.scss";

const socials = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "abelsintayehu",
    href: "https://www.linkedin.com/in/abelsintayehu",
    icon: <FaLinkedin />,
    isExternal: true,
  },
  {
    id: "telegram",
    label: "Telegram",
    handle: "@itsmeabe1a",
    href: "https://t.me/itsmeabe1a",
    icon: <FaTelegram />,
    isExternal: true,
  },
  {
    id: "github",
    label: "GitHub",
    handle: "a3ela",
    href: "https://github.com/a3ela",
    icon: <FaGithub />,
    isExternal: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@abel.s1n",
    href: "https://www.instagram.com/abel.sint/",
    icon: <FaInstagram />,
    isExternal: true,
  },
  {
    id: "email",
    label: "Email",
    handle: "webwizabel@gmail.com",
    href: "mailto:webwizabel@gmail.com",
    icon: <FiMail />,
    isExternal: false,
  },
  {
    id: "phone",
    label: "Phone",
    handle: "+251936691696",
    href: "tel:+251936691696",
    icon: <FiPhone />,
    isExternal: false,
  },
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target={social.isExternal ? "_blank" : "_self"}
          rel={social.isExternal ? "noopener noreferrer" : undefined}
          className="social-links__card"
          aria-label={`${social.label} ${social.handle}`}
        >
          <div className="social-links__icon" aria-hidden="true">
            {social.icon}
          </div>

          <div className="social-links__info">
            <span className="social-links__name">{social.label}</span>
            <span className="social-links__handle">{social.handle}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
