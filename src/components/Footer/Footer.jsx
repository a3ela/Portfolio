import "./Footer.scss";
import { FaGithub, FaTelegram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-bar">
      <div className="footer-bar__inner">
        {/* Social Links */}
        <div className="footer-bar__socials" aria-label="Social links">
          <a
            href="https://www.linkedin.com/in/abelsintayehu/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/a3ela"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://t.me/itsmeabe1a"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-bar__copy">
          © {new Date().getFullYear()} Abel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
