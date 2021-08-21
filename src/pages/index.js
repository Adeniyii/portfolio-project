import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import TechStack from "../components/TechStack"

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <TechStack></TechStack>
      <Projects></Projects>
    </Layout>
  )
}
