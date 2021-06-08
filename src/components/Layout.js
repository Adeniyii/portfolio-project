import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../assets/scss/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content-container">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
