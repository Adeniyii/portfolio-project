import React from "react"
import { graphql } from "gatsby"

const E404 = ({ data }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = data

  return (
    <div>
      <title>{`Error - ${title}`}</title>
      <h1>Page not found!!!!</h1>
    </div>
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

export default E404
