import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <section className="about-section">
      <div className="about-hero-container">
        <article className="about-image-container">
          <StaticImage
            src="../assets/images/tarik-haiga-BxELNNMN88Y-unsplash.jpg"
            alt="V for Vendetta"
            placeholder="blurred"
            layout="fullWidth"
            className="about-hero-image"
          />
          <blockquote>Love your rage, not your cage.</blockquote>
          <p>― Alan Moore, V for Vendetta</p>
        </article>
        <article className="about-hero-text">
          <h2>
            I'm Ifedayo, a software developer, writer, and designer; currently
            interning with{" "}
            <a href="#" target="_blank">
              {" "}
              Zuri
            </a>{" "}
            as a backend developer in sunny Lagos, Nigeria.
          </h2>
          <p>
            I've spent the last 2+ years working across the gamut of the
            software development spectrum, from frontend web-development, mobile
            app development, to my current role as a backend developer for
            web-based applications.
          </p>
          <p>
            These days my time is spent researching, designing, prototyping, and
            coding 🔨. I also contribute to open source projects whenever I can.
          </p>
          <p>
            Out of the office, you’ll find me dreaming of basketball 🏀,
            crafting a new spotify playlist (it's an art 🎵), and petting all
            the good dogs 🐩.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
