import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary">
              FyNova<span className="text-foreground">.Co</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              We build extraordinary digital experiences that transform brands.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/brand-transformation"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Brand Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content-creation"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">123 Innovation Drive, Tech City, TC 10101</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@fynova.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} FyNova.Co. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

