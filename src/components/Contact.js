import React from "react"
import { FaEnvelope, FaPhoneAlt, FaHome } from "react-icons/fa"

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section className="section-1">
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
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
            <a href="#">ifedayoadeniyi@gmail.com</a>
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
)

export default Contact
