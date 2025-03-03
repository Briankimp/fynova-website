"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, Zap, Target, Users } from "lucide-react"

const WhyFyNovaSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const features = [
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Creative Innovation",
      description: "We push boundaries with forward-thinking solutions that set your brand apart from the competition.",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Rapid Execution",
      description: "Our streamlined process delivers exceptional results with efficiency and precision.",
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Strategic Focus",
      description: "We align every digital touchpoint with your business goals for maximum impact.",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Collaborative Approach",
      description: "We work as an extension of your team, ensuring transparency throughout the process.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-primary">FyNova</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-secondary/50 backdrop-blur-sm rounded-xl p-8 hover-effect service-card"
            >
              <div className="service-icon mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Parallax Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default WhyFyNovaSection

