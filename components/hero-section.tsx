"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!backgroundRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = clientX / window.innerWidth - 0.5
      const y = clientY / window.innerHeight - 0.5

      gsap.to(backgroundRef.current, {
        duration: 1.5,
        backgroundPosition: `${51 + x * 10}% ${51 + y * 10}%`,
        ease: "power2.out",
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20 bg-[length:200%_200%] animate-gradient"
        style={{ backgroundSize: "200% 200%", backgroundPosition: "50% 50%" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          fill
          className="opacity-10 mix-blend-overlay object-cover"
          priority
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 100 + 10,
              height: Math.random() * 100 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block typewriter-text">Transform Your Brand</span>
              <span className="text-primary">With Digital Excellence</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We create extraordinary digital experiences that elevate your brand and drive meaningful connections.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="hover-effect bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium flex items-center justify-center transition-all duration-300 group"
            >
              Let's Build Something Extraordinary
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/portfolio"
              className="hover-effect border border-primary/50 hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-lg font-medium transition-all duration-300"
            >
              See How We Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection

