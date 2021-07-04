import React from "react"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"
import About from "../components/About"
import CurrReading from "../components/CurrentlyReading"
const about = ({ data }) => {
  return (
    <Layout>
      <About />
      <CurrReading />
    </Layout>
  )
}
export default about
