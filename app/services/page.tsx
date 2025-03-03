"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Palette, Code, BarChart, PenTool, Lightbulb } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"

export default function ServicesPage() {
  useEffect(() => {
    document.body.classList.add("cursor-glow")

    return () => {
      document.body.classList.remove("cursor-glow")
    }
  }, [])

  const services = [
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Brand Transformation",
      description:
        "Reimagine your brand identity with our comprehensive transformation services that align with your business goals and resonate with your audience.",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
      link: "/services/brand-transformation",
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description:
        "Custom websites and applications built with cutting-edge technologies that deliver exceptional user experiences and drive business results.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
      link: "/services/web-development",
    },
    {
      icon: <BarChart className="w-12 h-12 text-primary" />,
      title: "Digital Marketing",
      description:
        "Strategic campaigns that drive engagement, conversion, and growth through targeted channels and data-driven insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      link: "/services/digital-marketing",
    },
    {
      icon: <PenTool className="w-12 h-12 text-primary" />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create intuitive, engaging, and memorable digital experiences that users love.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
      link: "/services/ui-ux-design",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Content Creation",
      description:
        "Compelling content that tells your brand story, engages your audience, and drives meaningful action across all platforms.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      link: "/services/content-creation",
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Digital Strategy",
      description:
        "Comprehensive digital strategies that align with your business objectives and provide a roadmap for sustainable growth.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      link: "/services/digital-strategy",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, audience, and challenges through in-depth research and analysis.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Based on our findings, we develop a tailored strategy that aligns with your objectives and sets the foundation for success.",
    },
    {
      number: "03",
      title: "Creation",
      description:
        "Our team of experts brings the strategy to life through creative design, development, and content creation.",
    },
    {
      number: "04",
      title: "Implementation",
      description:
        "We meticulously execute the plan, ensuring attention to detail and quality at every step of the process.",
    },
    {
      number: "05",
      title: "Optimization",
      description:
        "We continuously monitor, analyze, and refine our approach to maximize results and drive ongoing improvement.",
    },
  ]

  return (
    <>
      <CustomCursor />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
            alt="Services background"
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions tailored to elevate your brand and drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group hover-effect"
              >
                <Link href={service.link} className="block h-full">
                  <div className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden h-full service-card">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    </div>
                    <div className="p-6">
                      <div className="service-icon mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <span className="text-primary flex items-center font-medium">
                        Learn more{" "}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures exceptional results for every project.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start mb-12 last:mb-0 hover-effect"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mr-6 flex-shrink-0">
                  <span className="text-primary text-2xl font-bold">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's collaborate to create extraordinary digital experiences that elevate your brand.
              </p>
              <Link
                href="/contact"
                className="hover-effect bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 group"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

