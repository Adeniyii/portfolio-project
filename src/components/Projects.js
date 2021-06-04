import React from "react"
import Project from "../components/Project"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Projects = () => {
  const {
    allContentfulProjects: { nodes },
  } = useStaticQuery(query)

  const img = getImage(nodes[0].preview)
  console.log(nodes[0].description.desc)

  return (
    <section className="projects-section-flex">
      {nodes.map(project => {
        return (
          <Project
            img={getImage(project.preview)}
            title={project.title}
            desc={project.description.desc.substr(0, 255)}
          ></Project>
        )
      })}
    </section>
  )
}

// GraphQl query from contentful CMS
const query = graphql`
  query allProjects {
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
        description {
          desc: description
        }
        preview {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Projects
