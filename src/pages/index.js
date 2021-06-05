import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Projects from "../components/Projects"

export default function Home({ data }) {
  const {
    site: {
      siteMetadata: { title, description },
    },
  } = data

  return (
    <Layout>
      <title>{`Home - ${title}`}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="portfolio web developer backend frontend"
      />
      <Hero></Hero>
      <Projects></Projects>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
