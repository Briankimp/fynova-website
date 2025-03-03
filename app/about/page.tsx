"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function AboutPage() {
  useEffect(() => {
    document.body.classList.add("cursor-glow")

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    return () => {
      document.body.classList.remove("cursor-glow")
    }
  }, [])

  const timelineRef = useRef<HTMLDivElement>(null)
  const timelineInView = useInView(timelineRef, { once: false, amount: 0.2 })

  useEffect(() => {
    if (!timelineRef.current) return

    const timelineItems = timelineRef.current.querySelectorAll(".timeline-item")

    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        },
      )
    })
  }, [])

  const missionRef = useRef<HTMLDivElement>(null)
  const missionInView = useInView(missionRef, { once: false, amount: 0.3 })

  const teamMembers = [
    {
      name: "Alex Morgan",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
      bio: "With over 15 years of experience in digital transformation, Alex leads our team with vision and innovation.",
    },
    {
      name: "Sophia Chen",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      bio: "Sophia brings her award-winning design expertise to create stunning visual experiences for our clients.",
    },
    {
      name: "Marcus Johnson",
      position: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      bio: "Marcus oversees all technical aspects of our projects, ensuring cutting-edge solutions and flawless execution.",
    },
    {
      name: "Olivia Rodriguez",
      position: "Strategy Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      bio: "Olivia develops strategic roadmaps that align with our clients' business goals and drive measurable results.",
    },
  ]

  return (
    <>
      <CustomCursor />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Team collaboration"
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
              About <span className="text-primary">FyNova</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate digital experts dedicated to transforming brands through innovative digital
              experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, FyNova began with a simple mission: to help brands thrive in the digital landscape
                  through innovative design and technology solutions.
                </p>
                <p>
                  What started as a small team of three passionate digital experts has grown into a full-service digital
                  agency with a global client base and a reputation for excellence.
                </p>
                <p>
                  Our journey has been defined by our commitment to pushing boundaries, embracing new technologies, and
                  delivering exceptional results for our clients.
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Our team working"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary/10 backdrop-blur-sm p-6 rounded-xl border border-primary/20 max-w-xs">
                <p className="text-lg font-medium">
                  "We believe in the power of digital to transform businesses and create meaningful connections."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Alex Morgan, Founder & CEO</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A timeline of our growth and key milestones.
            </p>
          </motion.div>

          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform md:translate-x-[-50%]"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "2015",
                  title: "FyNova Founded",
                  description:
                    "Started with a team of three in a small office with a vision to transform digital experiences.",
                  image:
                    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  year: "2017",
                  title: "First Major Client",
                  description: "Secured our first enterprise client and expanded our team to 10 members.",
                  image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
                },
                {
                  year: "2019",
                  title: "International Expansion",
                  description: "Opened our second office and began serving clients across Europe and Asia.",
                  image:
                    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
                },
                {
                  year: "2021",
                  title: "Award-Winning Work",
                  description: "Recognized with multiple industry awards for our innovative digital solutions.",
                  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
                },
                {
                  year: "2023",
                  title: "Present Day",
                  description: "A team of 50+ digital experts serving clients globally with cutting-edge solutions.",
                  image:
                    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`timeline-item relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="flex items-center justify-center absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-12 h-12 rounded-full bg-primary z-10">
                    <span className="text-primary-foreground font-bold">{item.year}</span>
                  </div>
                  <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right">
                    <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl hover-effect">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Our mission"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <div className="staggered-fade-in">
                {[
                  "To empower brands with digital experiences that drive meaningful connections and business growth.",
                  "To push the boundaries of creativity and technology in everything we do.",
                  "To foster a culture of innovation, collaboration, and continuous learning.",
                  "To deliver measurable results that exceed our clients' expectations.",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start mb-4 ${missionInView ? "visible" : ""}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="text-primary mr-3 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The talented individuals behind our exceptional work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group hover-effect"
              >
                <div className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary mb-4">{member.position}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's collaborate to create extraordinary digital experiences that elevate your brand.
              </p>
              <Link
                href="/contact"
                className="hover-effect bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

