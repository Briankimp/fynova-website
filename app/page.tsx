"use client"

import { useEffect } from "react"
import HeroSection from "@/components/hero-section"
import WhyFyNovaSection from "@/components/why-fynova-section"
import CustomCursor from "@/components/custom-cursor"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  useEffect(() => {
    // Add cursor-glow class to body for custom cursor
    document.body.classList.add("cursor-glow")

    return () => {
      document.body.classList.remove("cursor-glow")
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <HeroSection />
      <WhyFyNovaSection />

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Transformation",
                description: "Reimagine your brand identity with our comprehensive transformation services.",
                image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
                link: "/services/brand-transformation",
              },
              {
                title: "Web Development",
                description: "Custom websites and applications built with cutting-edge technologies.",
                image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
                link: "/services/web-development",
              },
              {
                title: "Digital Marketing",
                description: "Strategic campaigns that drive engagement and conversion.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
                link: "/services/digital-marketing",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group hover-effect"
              >
                <Link href={service.link} className="block overflow-hidden rounded-xl">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
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

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="hover-effect inline-flex items-center border border-primary/50 hover:border-primary text-foreground hover:text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of transformative digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Nexus Rebrand",
                category: "Brand Transformation",
                image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop",
                link: "/portfolio/nexus-rebrand",
              },
              {
                title: "Elevate E-Commerce",
                category: "Web Development",
                image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2070&auto=format&fit=crop",
                link: "/portfolio/elevate-ecommerce",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group hover-effect"
              >
                <Link href={project.link} className="block overflow-hidden rounded-xl">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-primary text-sm font-medium">{project.category}</span>
                      <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                      <p className="text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View case study <ArrowRight className="inline-block ml-1 w-4 h-4" />
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="hover-effect inline-flex items-center border border-primary/50 hover:border-primary text-foreground hover:text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "FyNova transformed our digital presence completely. Their strategic approach and creative execution exceeded our expectations.",
                author: "Sarah Johnson",
                position: "Marketing Director, TechVision",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
              },
              {
                quote:
                  "Working with FyNova was a game-changer for our brand. Their team's attention to detail and innovative solutions helped us stand out in a crowded market.",
                author: "Michael Chen",
                position: "CEO, Innovate Inc.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
              },
              {
                quote:
                  "The team at FyNova delivered a website that perfectly captures our brand essence while providing an exceptional user experience.",
                author: "Emily Rodriguez",
                position: "Brand Manager, Elevate Group",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/30 rounded-xl p-8 hover-effect"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
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

