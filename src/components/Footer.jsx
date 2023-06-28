import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer__container">
          <article>
            <Link to="/" className="logo">
              <img src={Logo} alt="Footer Logo" />
            </Link>
            <p>
              Lorem Ipsum is the one of the best platform for gaining, copying
              and pasting the necessary codes content and many other things in
              the developers.
            </p>
            <div className="footer_socials">
              <a
                href="https://linkedin.com"
                target="# "
                rel="noreferrer noopener"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://linkedin.com"
                target="# "
                rel="noreferrer noopener"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com"
                target="# "
                rel="noreferrer noopener"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="# "
                rel="noreferrer noopener"
              >
                <AiFillInstagram />
              </a>
            </div>
          </article>
          <article>
            <h4>PermaLinks </h4>
            <Link to="/about">About</Link>
            <Link to="/plans">Plans</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </article>
          <article>
            <h4>Insights </h4>
            <Link to="/s">Blogs</Link>
            <Link to="/s">Case Studies</Link>
            <Link to="/s">Events</Link>
            <Link to="/s">Communities</Link>
            <Link to="/s">FAQ's</Link>
          </article>
          <article>
            <h4>Get In Touch</h4>
            <Link to="/contact">Contact us</Link>
            <Link to="/s">Support </Link>
          </article>
        </div>
      </footer>
    </>
  );
};

export default Footer;
