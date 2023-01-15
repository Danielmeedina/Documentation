import React from "react";
import "./footer.css";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="links-container">
          <a
            className="border-links linkedin"
            href="https://www.linkedin.com/in/daniel-medina-828261242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            className="border-links github "
            href="https://github.com/Danielmeedina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            className="border-links mail"
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=danielmedina7778@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdMarkEmailUnread />
          </a>
          <a
            className="border-links twitter"
            href="https://twitter.com/MedinaDaniek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
          </a>
        </div>
        <p>
          All the information on this page has been collected from different
          sites / people, all credit to them
        </p>
        <span>Copyright © 2022 Daniel Medina </span>
      </div>
      <div className="shape-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
