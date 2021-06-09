import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Contact from "./Contact"
import "../assets/scss/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content-container">{children}</div>
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
