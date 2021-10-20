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
            Hello, i’m <span id="my-name">Ifedáyo Adeniyi.</span>
          </h1>
          <p
            className="hero-sub"
            data-sal="slide-right"
            data-sal-duration="1000"
            data-sal-delay="2000"
            data-sal-easing="ease-out"
          >
            I'm a staff software engineer working on backend infrastructure at{" "}
            <a href="https://zuri.chat">Zuri Chat</a>. I am infatuated with
            test-driven development and software design patterns. I also
            contribute to open source projects like{" "}
            <a href="https://github.com/sourcegraph"> Source graph</a>
            , and share what I learn on my blog:{" "}
            <a href="https://hashnode.com/@Deniyi">deniyi</a>, or at meetups and
            conferences.
          </p>
          <a href="#contact" className="hero-cta">
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
          {/* <Lottie animationData={animationData} /> */}
          <div className="card">
            <p className="project-stack">javascript, go</p>
            <h3 className="project-name">ZuriChat</h3>
            <p className="project-desc">
              A fully integrated way to connect and interact.
            </p>
          </div>
          <div className="card">
            <p className="project-stack">javascript, go</p>
            <h3 className="project-name">ZuriChat</h3>
            <p className="project-desc">
              A fully integrated way to connect and interact.
            </p>
          </div>
          <div className="card">
            <p className="project-stack">javascript, go</p>
            <h3 className="project-name">ZuriChat</h3>
            <p className="project-desc">
              A fully integrated way to connect and interact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
