"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"

export default function PortfolioPage() {
  useEffect(() => {
    document.body.classList.add("cursor-glow")

    return () => {
      document.body.classList.remove("cursor-glow")
    }
  }, [])

  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Nexus Rebrand",
      category: "Brand Transformation",
      description:
        "A complete brand overhaul for a tech company, including new visual identity, messaging, and digital presence.",
      image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop",
      link: "/portfolio/nexus-rebrand",
    },
    {
      title: "Elevate E-Commerce",
      category: "Web Development",
      description: "A custom e-commerce platform built with cutting-edge technologies for a luxury fashion brand.",
      image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2070&auto=format&fit=crop",
      link: "/portfolio/elevate-ecommerce",
    },
    {
      title: "Horizon Marketing Campaign",
      category: "Digital Marketing",
      description:
        "A multi-channel digital marketing campaign that increased conversions by 150% for a travel company.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
      link: "/portfolio/horizon-campaign",
    },
    {
      title: "Pulse App Design",
      category: "UI/UX Design",
      description: "A user-centered design for a health and wellness app that improved user engagement by 200%.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
      link: "/portfolio/pulse-app",
    },
    {
      title: "Vertex Content Strategy",
      category: "Content Creation",
      description:
        "A comprehensive content strategy that positioned a B2B company as a thought leader in their industry.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      link: "/portfolio/vertex-content",
    },
    {
      title: "Nova Digital Transformation",
      category: "Digital Strategy",
      description: "A complete digital transformation for a traditional retail company entering the e-commerce space.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      link: "/portfolio/nova-transformation",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = ["all", ...new Set(projects.map((project) => project.category))]

  return (
    <>
      <CustomCursor />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            alt="Portfolio background"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our collection of transformative digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full hover-effect transition-all duration-300 ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group hover-effect"
                >
                  <Link href={project.link} className="block h-full">
                    <div className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden h-full service-card">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-primary text-sm font-medium">{project.category}</span>
                          <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                          <p className="text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View case study <ArrowRight className="inline-block ml-1 w-4 h-4" />
                          </p>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's collaborate to create extraordinary digital experiences that elevate your brand.
              </p>
              <Link
                href="/contact"
                className="hover-effect bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

