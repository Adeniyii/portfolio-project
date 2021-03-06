import React, { createRef, useEffect } from "react"
import lottie from "lottie-web"

const Lottie = props => {
  let animationContainer = createRef()
  let anim = null

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: props.animationData,
    })

    return () => anim.destroy()
  }, [])

  // function handleStop() {
  //   anim.pause()
  // }

  // function handleStart() {
  //   anim.play()
  // }

  return (
    <div
      className="lottie-container"
      // onMouseOver={handleStart}
      // onMouseLeave={handleStop}
      ref={animationContainer}
    ></div>
  )
}

export default Lottie
