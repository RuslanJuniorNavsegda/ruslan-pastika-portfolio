import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a href="https://t.me/yourusername" target="_blank" rel="noreferrer">
        <FaTelegram />
      </a>
    </div>
  );
}
