import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const serviceLinks = ["House Girls", "Mechanics", "Electricians", "Plumbers", "Painters", "Carpenters"]

  const companyLinks = ["About Us", "How It Works", "Careers", "Press", "Blog", "Contact"]

  const supportLinks = [
    "Help Center",
    "Safety",
    "Terms of Service",
    "Privacy Policy",
    "Community Guidelines",
    "Trust & Safety",
  ]

  return (
    <footer className="bg-primary-teal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Tuposerve</h3>
              <p className="text-white/80 leading-relaxed">
                Kenya's premier on-demand platform connecting households and businesses with vetted, reliable service
                professionals.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-warm-orange" />
                <span>+254 721 311 449</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-warm-orange" />
                <span>info@tuposerve.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-warm-orange mt-1" />
                <span>2nd Floor, Spur Mall, Thika Road, Nairobi</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href="#services" className="text-white/80 hover:text-white hover:text-warm-orange transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-white/80 hover:text-white hover:text-warm-orange transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link href="#contact" className="text-white/80 hover:text-white hover:text-warm-orange transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <Link href="#" className="text-white/80 hover:text-warm-orange transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-warm-orange transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-warm-orange transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-warm-orange transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/80">© 2024 Tuposerve. All rights reserved.</p>
              <p className="text-sm text-white/60 mt-1">Empowering service professionals through digital innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
