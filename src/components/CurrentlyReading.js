import React from "react"
import Books from "../components/Books"
import { getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const CurrentlyReading = () => {
  const {
    allContentfulCurrentlyReading: { nodes },
  } = useStaticQuery(query)

  return (
    <section className="curr-reading">
      <h3 className="curr-reading-heading">Currently Reading</h3>
      <article className="curr-reading-grid">
        {nodes.map(book => {
          return (
            <Books
              img={getImage(book.bookImage)}
              author={book.author}
              title={book.bookTitle}
            />
          )
        })}
      </article>
    </section>
  )
}

const query = graphql`
  query currReading {
    allContentfulCurrentlyReading {
      nodes {
        author
        bookTitle
        bookImage {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default CurrentlyReading
