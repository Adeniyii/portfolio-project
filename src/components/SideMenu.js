import React from "react"
import { Link } from "gatsby"

const SideMenu = () => {
  function closeSideMenu() {
    document.getElementById("smc").style.transform = "scaleX(0)"
  }

  return (
    <>
      <section id="smc" className="side-menu-container">
        <span id="close-smc" onClick={() => closeSideMenu()}>
          close
        </span>
        <Link className="home-sm sml" to="/" activeClassName="highlight-2">
          <span>Home</span>
        </Link>
        <Link
          className="about-sm sml"
          to="/about/"
          activeClassName="highlight-2"
        >
          <span>About</span>
        </Link>
        <Link className="wip-sm sml" to="/wip/" activeClassName="highlight-2">
          <span>wip</span>
        </Link>
        <Link
          className="contact-sm sml"
          to="#contact"
          activeClassName="highlight-2"
        >
          <span>contact</span>
        </Link>
      </section>
    </>
  )
}

export default SideMenu
