import React from "react"
import { Link } from "gatsby"
import { CgMenuGridO } from "react-icons/cg"
const Navbar = () => {
  return (
    <nav className="nav-flex">
      <ul className="nav-container">
        <li>
          <Link
            className="home-item nav-link"
            to="/"
            activeClassName="highlight"
          >
            <span>Home</span>
          </Link>
        </li>

        <ul className="r-nav-list">
          <li>
            <Link
              className="about-item nav-link"
              to="/about/"
              activeClassName="highlight"
            >
              <span>About</span>
            </Link>
          </li>

          <li>
            <Link
              className="wip-item nav-link"
              to="/wip/"
              activeClassName="highlight"
            >
              <span>Wip</span>
            </Link>
          </li>

          <a id="stress" className="nav-menu">
            <CgMenuGridO />
          </a>
        </ul>
      </ul>
    </nav>
  )
}

export default Navbar
