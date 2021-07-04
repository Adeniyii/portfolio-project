import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Books = prop => {
  return (
    <div className="book-container">
      <GatsbyImage
        image={prop.img}
        alt={`${prop.title} image`}
        className="book-image"
      />
      <h2 className="book-title">{prop.title}</h2>
      <p className="book-author">― {prop.author}</p>
    </div>
  )
}

export default Books
