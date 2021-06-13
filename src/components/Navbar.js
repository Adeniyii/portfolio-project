import React from "react"
import { Link } from "gatsby"
import twitter from "../assets/images/twitter-svgrepo-com.svg"
import linkedin from "../assets/images/linkedin-svgrepo-com.svg"
import mail from "../assets/images/mail-svgrepo-com.svg"
const Navbar = () => {
  return (
    <nav className="nav-flex">
      <ul className="l-nav-list">
        <li className="home-icon">
          <Link className="home-item" to="/">
            <span className="home-item-l">IFE</span>
            <span className="home-item-r">DENIYI</span>
          </Link>
        </li>
        <li className="list-item">
          <Link className="about-item" to="/about/" activeClassName="highlight">
            <span>About</span>
          </Link>
        </li>
        <li className="list-item">
          <Link className="wip-item" to="/wip/" activeClassName="highlight">
            <span>Wip</span>
          </Link>
        </li>
      </ul>

      <ul className="r-nav-list">
        <li className="nav-list-icon">
          <a href="https://twitter.com/11thStrawhat">
            <img src={twitter} alt="Twitter Link" />
          </a>
        </li>
        <li className="nav-list-icon">
          <a href="https://www.linkedin.com/in/ifedayo-ijabadeniyi-904635178/">
            <img src={linkedin} alt="LinkedIn Link" />
          </a>
        </li>
        <li className="nav-list-icon">
          <a href="#">
            <img src={mail} alt="Mail Link" />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
