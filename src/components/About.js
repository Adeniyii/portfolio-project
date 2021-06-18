import React from "react"

const About = () => {
  return (
    <section className="about-hero-container">
      <article className="about-hero-image">
        <div className="deco-block deco-block-tl"></div>
        <div className="deco-block deco-block-tr"></div>
        <div className="deco-block deco-block-bl"></div>
        <div className="deco-block deco-block-br"></div>
      </article>
      <article className="about-hero-text">
        <h2>
          I'm Ifedayo, a software developer, writer, and founder, currently
          interning with{" "}
          <a href="#" target="_blank">
            {" "}
            Zuri Training
          </a>{" "}
          as a backend developer in sunny Lagos, Nigeria.
        </h2>
        <p>
          I've spent the last 2+ years working across the gamut of the software
          development spectrum - frontend web-development, mobile app
          development, to my current role as a backend developer for web-based
          applications.
        </p>
        <p>
          These days my time is spent researching, designing, prototyping, and
          coding 🔨. I also contribute to open source projects whenever I can.
        </p>
        <p>
          Out of the office, you’ll find me dreaming of basketball 🏀, crafting
          a new spotify playlist (it's an art 🎵), and petting all the good dogs
          🐩.
        </p>
      </article>
    </section>
  )
}

export default About
