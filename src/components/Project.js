import React from "react"
import { FaGithub } from "react-icons/fa"
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
          <div className="project-links">
            <a href="#" className="live-button">
              View live
            </a>
            <a href="#" className="github-button">
              Source code
              <span className="git-icon">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="project-tools-container">
        <div className="fe-tools project-tools">
          <h3>Frontend Tools</h3>
          <ul className="tool-list">
            <li>gatsby</li>
            <li>css</li>
            <li>html</li>
          </ul>
        </div>

        <div className="be-tools project-tools">
          <h3>Backend Tools</h3>
          <ul className="tool-list">
            <li>Node</li>
            <li>firebase</li>
            <li>mongoDB</li>
          </ul>
        </div>

        <div className="do-tools project-tools">
          <h3>Deployment</h3>
          <ul className="tool-list">
            <li>Netlify</li>
            <li>Heroku</li>
          </ul>
        </div>

        <div className="misc-tools project-tools">
          <h3>Miscellaneous Tools</h3>
          <ul className="tool-list">
            <li>Wine 🍷</li>
            <li>Choclate 🍫</li>
            <li>Music 🎧</li>
          </ul>
        </div>
      </div>
    </article>
  )
}

export default Project
