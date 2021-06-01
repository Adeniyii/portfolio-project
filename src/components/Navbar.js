import React from "react"
import { Link } from "gatsby"
import twitter from "../assets/images/twitter-svgrepo-com.svg"
import linkedin from "../assets/images/linkedin-svgrepo-com.svg"
import mail from "../assets/images/mail-svgrepo-com.svg"
const Navbar = () => {
  return (
    <nav className="nav-flex">
      <ul className="l-nav-list">
        <li className="list-item">
          <Link className="work-item" to="#">
            <span>Work</span>
          </Link>
        </li>
        <li className="list-item">
          <Link className="about-item" to="#">
            <span>About</span>
          </Link>
        </li>
        <li className="list-item">
          <Link className="wip-item" to="#">
            <span>Wip</span>
          </Link>
        </li>
      </ul>

      <ul className="r-nav-list">
        <li className="nav-list-icon">
          <a href="#">
            <img src={twitter} alt="Twitter Link" />
          </a>
        </li>
        <li className="nav-list-icon">
          <a href="#">
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
