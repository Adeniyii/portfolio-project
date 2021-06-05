import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const wip = ({ data }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = data

  return (
    <Layout>
      <title>{`Work in Progress - ${title}`}</title>
      <title>Work in Progress</title>
      <h1>Non'ya beeznuzz</h1>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default wip
