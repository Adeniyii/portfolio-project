import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Project = prop => {
  return (
    <article className="project-article">
      <div className="project-image">
        <GatsbyImage image={prop.img} alt="some message"></GatsbyImage>
      </div>
      <div className="project-description">
        <h2 className="project-desc-title">{prop.title}</h2>
        <p className="project-desc-para">{prop.desc}</p>
      </div>
    </article>
  )
}

export default Project
