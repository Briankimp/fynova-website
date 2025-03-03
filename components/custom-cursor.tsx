"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    const handleMouseOver = () => setCursorVariant("hover")
    const handleMouseOut = () => setCursorVariant("default")

    const hoverElements = document.querySelectorAll(".hover-effect")

    hoverElements.forEach((element) => {
      element.addEventListener("mouseover", handleMouseOver)
      element.addEventListener("mouseout", handleMouseOut)
    })

    return () => {
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseover", handleMouseOver)
        element.removeEventListener("mouseout", handleMouseOut)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(139, 92, 246, 0)",
      border: "2px solid rgba(139, 92, 246, 0.5)",
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(139, 92, 246, 0.1)",
      border: "2px solid rgba(139, 92, 246, 0.8)",
    },
  }

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
    },
  }

  return (
    <>
      <motion.div
        className="cursor-outline fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full bg-primary pointer-events-none z-50 hidden md:block"
        variants={dotVariants}
        animate={cursorVariant}
      />
    </>
  )
}

export default CustomCursor

