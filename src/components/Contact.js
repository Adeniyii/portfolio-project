import React, { useState } from "react"
import { useForm } from "@formspree/react"
import { FaEnvelope, FaPhoneAlt, FaHome } from "react-icons/fa"

const Contact = props => {
  const [state, handleSubmit] = useForm("myyljwzr", {
    data: {
      _subject: "Someone reached out from your portfolio!",
    },
  })

  if (state.submitting) {
    document.getElementsByTagName("form")[0].reset()
    document.querySelector("#submitting").innerHTML = "submitting..."
  } else if (state.succeeded) {
    setTimeout(() => {
      document.querySelector("#submitting").innerHTML = ""
    }, 3000)
    document.querySelector("#submitting").innerHTML = "Thanks for reaching out!"
  }

  if (state.errors.length !== 0) {
    state.errors.map(err => {
      console.log(err)
    })
  }

  return (
    <>
      <h1 id="contact-head" className="contact-title">
        CONTACT
      </h1>
      <section id="contact">
        <div className="inner">
          <section className="section-1">
            <form onSubmit={handleSubmit}>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
                <div className="errors"></div>
              </div>

              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
                <div className="errors"></div>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="6"></textarea>
                <div className="errors"></div>
              </div>

              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="special"
                    disabled={state.submitting}
                  />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
                <div id="submitting" className="submitting"></div>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope">
                  <FaEnvelope />
                </span>
                <h3>Email</h3>
                <span>ifedayoadeniyi@gmail.com</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-phone">
                  <FaPhoneAlt />
                </span>
                <h3>Phone</h3>
                <span>(+234) 808-1523 197</span>
              </div>
            </section>
            <section id="last-sect">
              <div className="contact-method">
                <span className="icon alt fa-home">
                  <FaHome />
                </span>
                <h3>Address</h3>
                <span>
                  1234 Somewhere Road #5432
                  <br />
                  Lagos, LG 100001
                  <br />
                  United States of Nigeria
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  )
}

export default Contact
