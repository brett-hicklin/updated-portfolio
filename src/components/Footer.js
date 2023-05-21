import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import "../Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a
          href="https://github.com/brett-hicklin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/brett-hicklin-011042154/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://stackoverflow.com/users/21936898/brett18"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaStackOverflow className="icon" />
        </a>
      </div>
    </footer>
  );
}
