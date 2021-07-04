import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Contact from "./Contact"
import SideMenu from "../components/SideMenu"
import "../assets/scss/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <SideMenu />
      <Navbar />
      <div className="content-container">{children}</div>
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
