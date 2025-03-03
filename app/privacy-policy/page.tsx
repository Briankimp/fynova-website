"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import CustomCursor from "@/components/custom-cursor"

export default function PrivacyPolicy() {
  useEffect(() => {
    document.body.classList.add("cursor-glow")
    return () => {
      document.body.classList.remove("cursor-glow")
    }
  }, [])

  return (
    <>
      <CustomCursor />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Last updated: March 3, 2024</p>

              <h2>1. Introduction</h2>
              <p>
                At FyNova.Co, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>We may collect:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business information</li>
                <li>Payment information</li>
              </ul>

              <h3>2.2 Usage Data</h3>
              <p>We may also collect:</p>
              <ul>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>IP address</li>
                <li>Device information</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Improve our website and services</li>
                <li>Communicate with you</li>
                <li>Send newsletters and marketing materials</li>
                <li>Process payments</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                with:
              </p>
              <ul>
                <li>Service providers and business partners</li>
                <li>Legal authorities when required by law</li>
                <li>Professional advisors and consultants</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information.
                However, no method of transmission over the internet is 100% secure.
              </p>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
              </ul>

              <h2>7. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to improve your browsing experience. You can control
                cookies through your browser settings.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13. We do not knowingly collect information from
                children under 13.
              </p>

              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page.
              </p>

              <h2>10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
              <p>
                Email: privacy@fynova.co
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Address: 123 Innovation Drive, Tech City, TC 10101
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

