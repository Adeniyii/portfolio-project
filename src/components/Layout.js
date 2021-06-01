import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../css/hmm.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <p>{children}</p>
      <Footer />
    </>
  )
}

export default Layout
