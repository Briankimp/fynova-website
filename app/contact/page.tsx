"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"

export default function ContactPage() {
  useEffect(() => {
    document.body.classList.add("cursor-glow")

    return () => {
      document.body.classList.remove("cursor-glow")
    }
  }, [])

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: "", email: "", message: "" }

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid"
      isValid = false
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }, 1000)
    }
  }

  const getInputClass = (fieldName: keyof typeof errors) => {
    return `flex h-12 w-full rounded-lg border ${
      errors[fieldName]
        ? "border-destructive focus-visible:ring-destructive"
        : formState[fieldName]
          ? "border-primary focus-visible:ring-primary"
          : "border-input"
    } bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-300`
  }

  return (
    <>
      <CustomCursor />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
            alt="Contact background"
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
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help transform your digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-primary" />,
                title: "Visit Us",
                details: ["123 Innovation Drive", "Tech City, TC 10101"],
              },
              {
                icon: <Phone className="w-8 h-8 text-primary" />,
                title: "Call Us",
                details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
              },
              {
                icon: <Mail className="w-8 h-8 text-primary" />,
                title: "Email Us",
                details: ["hello@fynova.co", "support@fynova.co"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/50 backdrop-blur-sm rounded-xl p-8 text-center hover-effect"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <div className="text-muted-foreground">
                  {item.details.map((detail, i) => (
                    <p key={i} className="mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-secondary/30 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Contact us"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
              </div>

              <div className="p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center"
                    >
                      <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We'll get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formState.name}
                          onChange={handleChange}
                          className={getInputClass("name")}
                        />
                        {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email *"
                          value={formState.email}
                          onChange={handleChange}
                          className={getInputClass("email")}
                        />
                        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone (Optional)"
                          value={formState.phone}
                          onChange={handleChange}
                          className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <select
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a Subject</option>
                          <option value="Brand Transformation">Brand Transformation</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Content Creation">Content Creation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          placeholder="Your Message *"
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          className={`flex w-full rounded-lg border ${
                            errors.message
                              ? "border-destructive focus-visible:ring-destructive"
                              : formState.message
                                ? "border-primary focus-visible:ring-primary"
                                : "border-input"
                          } bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-300`}
                        ></textarea>
                        {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        className="hover-effect bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 w-full"
                      >
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </button>
                    </form>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 pb-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our office to meet our team and discuss your project in person.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden h-[400px] relative hover-effect"
          >
            <Image
              src="https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=2069&auto=format&fit=crop"
              alt="Office location map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl max-w-md text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">FyNova Headquarters</h3>
                <p className="text-muted-foreground">123 Innovation Drive, Tech City, TC 10101</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

