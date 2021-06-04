import React from "react"
import Project from "../components/Project"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {
  const {
    allContentfulProjects: { nodes },
  } = useStaticQuery(query)

  return (
    <section className="projects-section">
      {nodes.map((project, index) => {
        // Hack to assign alternating css order values
        let order = [((index + 1) % 2) + 1, ((index + 2) % 2) + 1]
        return (
          <Project
            order={order}
            key={project.id}
            title={project.title}
            img={getImage(project.preview)}
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