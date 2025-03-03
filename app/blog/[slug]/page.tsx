"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"

// This would typically come from a CMS or API
const getBlogPost = (slug: string) => {
  const blogPosts = {
    "future-of-digital-branding-2023": {
      title: "The Future of Digital Branding in 2023",
      content: `
        <p>Digital branding has evolved significantly over the past decade, and as we move through 2023, we're seeing even more dramatic shifts in how brands connect with their audiences online. This comprehensive guide explores the latest trends and technologies shaping the future of digital branding.</p>
        
        <h2>The Rise of Immersive Experiences</h2>
        <p>Virtual and augmented reality are becoming increasingly important in digital branding. Brands are creating immersive experiences that allow customers to interact with their products and services in entirely new ways.</p>
        
        <h2>AI-Powered Personalization</h2>
        <p>Artificial intelligence is revolutionizing how brands deliver personalized experiences to their customers. From customized content to tailored product recommendations, AI is helping brands create more meaningful connections.</p>
        
        <h2>Sustainable Digital Practices</h2>
        <p>Sustainability isn't just about physical products anymore. Brands are increasingly focusing on sustainable digital practices, from energy-efficient websites to eco-friendly digital marketing strategies.</p>
      `,
      image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop",
      date: "June 15, 2023",
      author: "Alex Morgan",
      category: "Branding",
    },
    "ai-transforming-web-development": {
      title: "How AI is Transforming Web Development",
      content: `
        <p>Artificial Intelligence is revolutionizing the way we build and maintain websites. From automated testing to AI-powered design systems, the impact of AI on web development is profound and far-reaching.</p>
        
        <h2>AI-Powered Development Tools</h2>
        <p>Modern development tools are increasingly incorporating AI capabilities, helping developers write better code faster and with fewer bugs.</p>
        
        <h2>Automated Testing and Quality Assurance</h2>
        <p>AI is transforming how we test and ensure the quality of web applications, making the process more efficient and thorough.</p>
        
        <h2>The Future of Web Development</h2>
        <p>As AI continues to evolve, we can expect even more dramatic changes in how websites are built and maintained.</p>
      `,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
      date: "May 28, 2023",
      author: "Marcus Johnson",
      category: "Technology",
    },
    // Add more blog posts as needed
  }

  return blogPosts[slug as keyof typeof blogPosts]
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  useEffect(() => {
    document.body.classList.add("cursor-glow")
    return () => {
      document.body.classList.remove("cursor-glow")
    }
  }, [])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:text-primary/90 flex items-center">
            <ArrowLeft className="mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <CustomCursor />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        </div>

        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/90 mb-8 hover-effect">
            <ArrowLeft className="mr-2" /> Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                {post.category}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        </div>
      </section>
    </>
  )
}

