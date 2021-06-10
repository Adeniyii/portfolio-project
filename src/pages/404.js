import React from "react"
import animationData from "../assets/asset-animation/64171-404-not-found.json"
import Lottie from "../components/Lottie"

const E404 = () => {
  const styles = {
    "max-width": "70vw",
    "max-height": "60%",
    margin: "auto",
  }

  return (
    <div className="error-container" style={styles}>
      <Lottie animationData={animationData} />
    </div>
  )
}
export default E404
