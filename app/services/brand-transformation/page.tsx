"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import CustomCursor from "@/components/custom-cursor"

export default function BrandTransformationPage() {
  useEffect(() => {
    document.body.classList.add("cursor-glow")
    
    return () => {
      document.body.classList.remove("cursor-glow")
    }
  }, [])

  return (
    <>
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop"
            alt="Brand Transformation"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Brand <span className="text-primary">Transformation</span></h1>
            <p className="text-xl text-muted-foreground">
              Reimagine your brand identity with our comprehensive transformation services.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Brand Identity</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In today's competitive digital landscape, a strong brand identity is essential for standing out and connecting with your audience. Our brand transformation services help you reimagine your brand from the ground up.
                </p>
                <p>
                  We take a holistic approach to brand transformation, considering every touchpoint and interaction your audience has with your brand. From visual identity to messaging, we ensure consistency and impact across all channels.
                </p>
                <p>
                  Our team of branding experts combines strategic thinking with creative execution to deliver brand experiences that resonate with your target audience and drive business growth.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop"
                  alt="Brand Transformation"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Brand Transformation Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to elevate your brand identity and presence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Brand Strategy",
                description: "Develop a clear brand strategy that aligns with your business goals and resonates with your target audience.",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Visual Identity",
                description: "Create a distinctive visual identity including logo, color palette, typography, and design elements.",
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Brand Messaging",
                description: "Craft compelling brand messaging that communicates your value proposition and connects with your audience.",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Brand Guidelines",
                description: "Develop comprehensive brand guidelines to ensure consistency across all touchpoints and channels.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "Digital Presence",
                description: "Transform your digital presence to reflect your brand identity and create meaningful connections.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
              },
              {
                title: "Brand Experience",
                description: "Design holistic brand experiences that delight your customers and build brand loyalty.",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group hover-effect"
              >
                <div className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden service-card h-full">
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
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Brand Transformation Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A strategic approach to reimagining your brand identity.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Brand Audit",
                description: "We conduct a comprehensive audit of your existing brand to identify strengths, weaknesses, and opportunities for improvement."
              },
              {
                number: "02",
                title: "Strategy Development",
                description: "Based on our findings, we develop a tailored brand strategy that aligns with your business goals and resonates with your target audience."
              },
              {
                number: "03",
                title: "Creative Exploration",
                description: "Our creative team explores various directions for your brand identity, including visual elements and messaging."
              },
              {
                number: "04",
                title: "Refinement",
                description: "We refine the chosen direction based on your feedback and ensure it meets all your requirements and objectives."
              },
              {
                number: "05",
                title: "Implementation",
                description: "We implement the new brand identity across all touchpoints and channels, ensuring consistency and impact."
              }
            ].map((step, index) => (
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Brand?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team to discuss how we can elevate your brand to the next level.
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="btn-primary mr-4">Contact Us</a>
              <a href="/portfolio" className="btn-outline">View Our Work</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
