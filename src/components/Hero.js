import React from "react"
import Lottie from "./Lottie"
import animationData from "../assets/asset-animation/lf30_editor_z7afqwvr.json"
import { CgMail } from "react-icons/cg"
import { IoMailOutline } from "react-icons/io5"

const Hero = () => {
  return (
    <section className="hero-main-section">
      <div className="hero-container">
        <div className="hero-container-text">
          <h1
            className="hero-title"
            data-sal="fade"
            data-sal-duration="1000"
            data-sal-delay="100"
            data-sal-easing="ease-out"
          >
            Hi, i’m <span id="my-name">Ifedáyo.</span>
            <span className="hero-span"> A software-dev.</span>
          </h1>
          <p
            className="hero-sub"
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-delay="2000"
            data-sal-easing="ease-out"
          >
            I’m also a UI/UX designer and general doodler with a keen eye for
            creating engaging UI, bringing products to life.
          </p>
          <a
            href="#contact"
            className="hero-cta"
            // data-sal="fade"
            // data-sal-duration="500"
            // data-sal-delay="1000"
            // data-sal-easing="ease"
          >
            <IoMailOutline className="cta-icon" size="3em" />
          </a>
        </div>
        <div
          className="hero-container-logo"
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay="1000"
          data-sal-easing="ease"
        >
          <Lottie animationData={animationData} />
        </div>
      </div>
    </section>
  )
}

export default Hero
