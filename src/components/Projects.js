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
      <h1 className="section-title" id="p-section">
        ˈprɒdʒ.ektz
      </h1>
      {nodes.map(project => {
        return (
          <Project
            key={project.id}
            title={project.title}
            live={project.liveLink}
            git={project.gitHubLink}
            img={getImage(project.preview)}
            deTools={project.devopsTools}
            beTools={project.backendTools}
            feTools={project.frontendTools}
            miscTools={project.miscellaneousTools}
            desc={project.description.desc}
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
        miscellaneousTools
        gitHubLink
        liveLink
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
