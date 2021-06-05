import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"

const ComponentName = ({ data }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = data

  const {
    allContentfulProjects: { nodes: projects },
  } = data

  console.log(projects)

  return (
    <Layout>
      <title>{`Work - ${title}`}</title>
      <section className="workpage-section">
        {projects.map(project => {
          // return <h1>{project.frontendTools[1]}</h1>

          return project.frontendTools.map(feTools => {
            return <h1>{feTools} </h1>
          })
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProjects {
      nodes {
        createdAt
        backendTools
        devopsTools
        frontendTools
        gitHubLink
        id
        slug
        title
        preview {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ComponentName
