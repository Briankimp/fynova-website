"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import CustomCursor from "@/components/custom-cursor"

export default function TermsOfService() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>Last updated: March 3, 2024</p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by FyNova.Co ("we," "our," or "us"), you agree to comply
                with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our
                services.
              </p>

              <h2>2. Services</h2>
              <p>
                FyNova.Co provides digital transformation, web development, design, and related services. The specific
                scope of services will be detailed in separate agreements or statements of work.
              </p>

              <h2>3. Intellectual Property</h2>
              <p>
                All intellectual property rights in the services, including but not limited to copyrights, patents,
                trademarks, and trade secrets, are owned by FyNova.Co or its licensors.
              </p>

              <h2>4. Client Responsibilities</h2>
              <p>Clients are responsible for:</p>
              <ul>
                <li>Providing accurate and complete information</li>
                <li>Reviewing and approving deliverables in a timely manner</li>
                <li>Ensuring they have necessary rights to materials provided to us</li>
                <li>Maintaining confidentiality of project-related information</li>
              </ul>

              <h2>5. Payment Terms</h2>
              <p>
                Payment terms will be specified in individual agreements. Unless otherwise stated, invoices are due
                within 30 days of issuance.
              </p>

              <h2>6. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary information shared during the
                course of service provision.
              </p>

              <h2>7. Limitation of Liability</h2>
              <p>
                FyNova.Co's liability shall be limited to the amount paid for the services. We are not liable for
                indirect, consequential, or incidental damages.
              </p>

              <h2>8. Termination</h2>
              <p>
                Either party may terminate services with written notice as specified in individual agreements.
                Outstanding payments will remain due upon termination.
              </p>

              <h2>9. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective upon posting to our
                website.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These terms are governed by the laws of [Jurisdiction], without regard to its conflict of law
                principles.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <p>
                Email: legal@fynova.co
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

