"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"

export default function BlogPage() {
  useEffect(() => {
    document.body.classList.add("cursor-glow")

    return () => {
      document.body.classList.remove("cursor-glow")
    }
  }, [])

  const blogPosts = [
    {
      title: "The Future of Digital Branding in 2023",
      excerpt:
        "Explore the latest trends and technologies shaping the future of digital branding and how businesses can stay ahead of the curve.",
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
      date: "June 15, 2023",
      author: "Alex Morgan",
      category: "Branding",
      slug: "future-of-digital-branding-2023",
    },
    {
      title: "How AI is Transforming Web Development",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the web development process and creating new opportunities for innovation.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
      date: "May 28, 2023",
      author: "Marcus Johnson",
      category: "Technology",
      slug: "ai-transforming-web-development",
    },
    {
      title: "The Psychology of Color in Digital Marketing",
      excerpt:
        "Learn how color psychology influences consumer behavior and how to leverage it in your digital marketing strategy.",
      image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=80&w=2039&auto=format&fit=crop",
      date: "April 12, 2023",
      author: "Sophia Chen",
      category: "Marketing",
      slug: "psychology-color-digital-marketing",
    },
    {
      title: "Creating User-Centered Design Experiences",
      excerpt:
        "A comprehensive guide to designing digital experiences that put users first and drive engagement and conversion.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
      date: "March 5, 2023",
      author: "Olivia Rodriguez",
      category: "Design",
      slug: "creating-user-centered-design-experiences",
    },
    {
      title: "The Power of Storytelling in Content Marketing",
      excerpt:
        "Explore how storytelling can transform your content marketing strategy and create deeper connections with your audience.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
      date: "February 18, 2023",
      author: "Emily Wilson",
      category: "Content",
      slug: "power-storytelling-content-marketing",
    },
    {
      title: "Measuring ROI in Digital Transformation Projects",
      excerpt:
        "A practical guide to measuring the return on investment for digital transformation initiatives in your organization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      date: "January 30, 2023",
      author: "Michael Chen",
      category: "Strategy",
      slug: "measuring-roi-digital-transformation",
    },
  ]

  return (
    <>
      <CustomCursor />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
            alt="Blog background"
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
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert insights on digital transformation, design, and marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group hover-effect"
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden h-full service-card">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <div className="flex items-center mr-4">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <span className="text-primary flex items-center font-medium">
                        Read more{" "}
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

      {/* Newsletter Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Stay updated with the latest insights and trends in digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-12 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button className="hover-effect bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

