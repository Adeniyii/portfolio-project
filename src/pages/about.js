import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const about = ({ data }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = data
  return (
    <Layout>
      <title>{`About - ${title}`}</title>
      <h1>Sho fe mo mi nii?</h1>
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

export default about
