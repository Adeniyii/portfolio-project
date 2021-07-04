import React from "react"
import Layout from "../components/Layout"
import Lottie from "../components/Lottie"
import animationData from "../assets/asset-animation/17033-icon-animation-for-under-construction-page.json"

const wip = () => {
  return (
    <Layout>
      <div className="lottie-error-container">
        <Lottie animationData={animationData} />
      </div>
    </Layout>
  )
}

export default wip
