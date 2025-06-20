"use client"
import { ArrowRight, CheckCircle, Star, Home, Car, Zap, Users, Phone, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light via-white to-cyan-tint/30">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gradient-to-r from-primary-teal via-primary-teal to-primary-teal/95 backdrop-blur-lg text-white z-50 shadow-2xl border-b border-bright-cyan/20">
        {/* Top contact bar */}
        <div className="container mx-auto px-4 py-2 border-b border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <div className="p-1 bg-bright-cyan/20 rounded-full">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-bright-cyan" />
                </div>
                <span className="text-white/90">+254 721 311 449</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1 bg-warm-orange/20 rounded-full">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-warm-orange" />
                </div>
                <span className="text-white/90">info@tuposerve.com</span>
              </div>
            </div>
            <div className="hidden md:block text-white/70">
              <span>2nd Floor, Spur Mall, Thika Road, Nairobi</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-bright-cyan to-warm-orange bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Tuposerve
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", href: "#home" },
                { name: "Services", href: "#services" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative text-white/90 hover:text-white transition-colors duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-bright-cyan to-warm-orange rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button className="bg-gradient-to-r from-warm-orange to-warm-orange/90 hover:from-warm-orange/90 hover:to-warm-orange text-white shadow-lg border-0">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </a>
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-primary-teal to-primary-teal/95 backdrop-blur-lg border-t border-bright-cyan/20 shadow-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-4">
                  {[
                    { name: "Home", href: "#home" },
                    { name: "Services", href: "#services" },
                    { name: "How It Works", href: "#how-it-works" },
                    { name: "Contact", href: "#contact" },
                  ].map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <motion.div
                    className="pt-4 border-t border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-warm-orange to-warm-orange/90 hover:from-warm-orange/90 hover:to-warm-orange text-white shadow-lg">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <div className="pt-24 sm:pt-28 lg:pt-32">
        {/* Hero Section */}
        <div id="home">
          <Hero />
        </div>

        {/* How It Works Section */}
        <div id="how-it-works"> 
          <HowItWorks />
        </div>

        {/* Services Section */}
        <div id="services">
          <Services />
        </div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Stats Section */}
        <Stats />

        {/* Enhanced CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-teal via-primary-teal/95 to-bright-cyan/90 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <motion.div 
            className="absolute top-10 right-10 text-warm-orange/20"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear" 
            }}
          >
            <Star className="h-32 w-32" />
          </motion.div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
                Get Started 
                <span className="text-transparent bg-gradient-to-r from-warm-orange to-bright-cyan bg-clip-text"> Today</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto mb-8 lg:mb-12 leading-relaxed">
                Join thousands of satisfied customers and professionals on Kenya's premier service marketplace.
              </p>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-3xl max-w-3xl mx-auto border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
                  Tuposerve—connecting you with the best service talent in Nairobi, one job at a time.
                </h3>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 lg:mt-8">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <a href="#contact">
                      <Button
                        size="lg"
                        className="flex items-center justify-center bg-gradient-to-r from-warm-orange to-warm-orange/90 hover:from-warm-orange/90 hover:to-warm-orange text-white px-8 py-4 text-lg font-semibold shadow-xl"
                      >
                        Get Started Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-primary-teal px-8 py-4 text-lg font-semibold transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}