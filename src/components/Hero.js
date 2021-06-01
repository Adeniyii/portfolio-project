import React from "react"
import "../css/hmm.css"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <section className="hero-main">
      <div className="hero-container">
        <div className="hero-container-text">
          <h1 className="hero-title">
            Hi, I’m Dáyo.
            <span className="hero-span"> A Developer.</span>
          </h1>
          <p className="hero-sub">
            I’m also a UI/UX designer and general doodler with a keen eye for
            creating engaging UI, bringing products to life.
          </p>
        </div>
        <div className="hero-container-logo">
          <StaticImage
            src="../assets/images/hennie-stander-8E5HawfqCMM-unsplash.jpg"
            alt="Jelly Fish"
            placeholder="blurred"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
