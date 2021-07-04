import React from "react"
import Layout from "../components/Layout"
import Lottie from "../components/Lottie"
import animationData from "../assets/asset-animation/64171-404-not-found.json"

const E404 = () => {
  return (
    <Layout>
      <div className="lottie-error-container">
        <Lottie animationData={animationData} />
      </div>
    </Layout>
  )
}
export default E404
