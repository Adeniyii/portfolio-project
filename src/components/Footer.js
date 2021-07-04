import React from "react"
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
  return (
    <section id="footer">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/11thStrawhat" className="icon">
            <FaTwitter />
          </a>
        </li>

        <li>
          <a href="#" className="icon">
            <FaInstagram />
          </a>
        </li>

        <li>
          <a href="https://github.com/Adeniyii" className="icon">
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/ifedayo-ijabadeniyi-904635178/"
            className="icon"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          &copy; 2021 by <a href="#">ifedeniyi</a>. All rights reserved.
        </li>
      </ul>
    </section>
  )
}

export default Footer
