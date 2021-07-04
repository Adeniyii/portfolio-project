import React from "react"
import Lottie from "./Lottie"
import animationData from "../assets/asset-animation/lf30_editor_z7afqwvr.json"

const Hero = () => {
  return (
    <section className="hero-main-section">
      <div className="hero-container">
        <div className="hero-container-text">
          <h1 className="hero-title">
            Hi, i’m <span id="my-name">Ifedáyo.</span>
            <span className="hero-span"> A software-dev.</span>
          </h1>
          <p className="hero-sub">
            I’m also a UI/UX designer and general doodler with a keen eye for
            creating engaging UI, bringing products to life.
          </p>
          <a href="#contact" className="hero-cta">
            <span>Say Hi!</span>
          </a>
        </div>
        <div className="hero-container-logo">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </section>
  )
}

export default Hero
