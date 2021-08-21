import React from "react"
import {
  DiNodejs,
  DiCss3,
  DiGit,
  DiHeroku,
  DiPostgresql,
  DiReact,
  DiMongodb,
} from "react-icons/di"
import {
  SiTypescript,
  SiDocker,
  SiGo,
  SiGraphql,
  SiMaterialUi,
} from "react-icons/si"

const TechStack = () => {
  return (
    <section className="techstack-section">
      <div className="stack-container">
        <DiNodejs size="3em" style={{ fill: "rgb(46,125,50)" }} />
        <SiGraphql size="3em" style={{ fill: "rgb(255,64,129)" }} />
        <DiCss3 size="3em" style={{ fill: "rgb(2,119,189)" }} />
        <DiGit size="3em" style={{ fill: "rgb(244,81,30)" }} />
        <DiHeroku size="3em" style={{ fill: "rgb(126,87,194)" }} />
        <SiMaterialUi size="3em" style={{ fill: "rgb(2,136,209)" }} />
        <DiPostgresql size="3em" style={{ fill: "rgb(2,119,189)" }} />
        <DiReact size="3em" style={{ fill: "rgb(128,222,234)" }} />
        <SiGo size="3em" style={{ fill: "rgb(77,208,225)" }} />
        <SiDocker size="3em" style={{ fill: "rgb(2,136,209)" }} />
        <DiMongodb size="3em" style={{ fill: "rgb(76,175,80)" }} />
        <SiTypescript size="2em" style={{ fill: "rgb(25,118,210)" }} />
      </div>
    </section>
  )
}

export default TechStack
