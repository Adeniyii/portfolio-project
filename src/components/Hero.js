import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <section className="hero-main-section">
      <div className="hero-container">
        <div className="hero-container-text">
          <h1 className="hero-title">
            Hi, I’m <span id="my-name">Dáyo</span>.
            <span className="hero-span"> A Developer.</span>
          </h1>
          <p className="hero-sub">
            I’m also a UI/UX designer and general doodler with a keen eye for
            creating engaging UI, bringing products to life.
          </p>
        </div>
        <div className="hero-container-logo">
          <div className="deco-block deco-block-tl"></div>
          <div className="deco-block deco-block-tr"></div>
          <div className="deco-block deco-block-bl"></div>
          <div className="deco-block deco-block-br"></div>
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
