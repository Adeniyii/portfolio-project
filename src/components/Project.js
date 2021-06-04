import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Project = prop => {
  return (
    <article className="project-article-grid">
      <div className="project-article-top">
        {/* <div className="article-image"> */}
        <GatsbyImage
          image={prop.img}
          alt="some message"
          className="article-image"
          style={{ order: prop.order[0] }}
        ></GatsbyImage>
        {/* </div> */}

        <div className="project-description" style={{ order: prop.order[1] }}>
          <h2 className="project-desc-title">{prop.title}</h2>
          <p className="project-desc-para">{prop.desc}</p>
        </div>
      </div>
      <div className="project-tools-container">
        <div className="fe-tools project-tools">
          <h3>Frontend Tools</h3>
          <p>gatsby</p>
          <p>css</p>
          <p>html</p>
        </div>

        <div className="be-tools project-tools">
          <h3>Backend Tools</h3>
          <p>Node</p>
          <p>firebase</p>
          <p>mongoDB</p>
        </div>

        <div className="do-tools project-tools">
          <h3>Deployment</h3>
          <p>Netlify</p>
          <p>Heroku</p>
        </div>

        <div className="misc-tools project-tools">
          <h3>Miscellaneous Tools</h3>
          <p>Wine 🍷</p>
          <p>Choclate 🍫</p>
          <p>Music 🎧</p>
        </div>
      </div>
    </article>
  )
}

export default Project
