import { ArrowRight, CheckCircle, Star, Home, Car, Zap, Users, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Services from "@/components/services"
import Stats from "@/components/stats"
import Footer from "@/components/footer"
import Contact from "@/components/contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-teal-800 text-white z-50 shadow-md">
        <div className="container mx-auto px-4 py-2 border-b border-white/10">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+254 721 311 449</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@tuposerve.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>2nd Floor, Spur Mall, Thika Road, Nairobi</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Tuposerve</div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="hover:text-orange-400 transition-colors">
                Home
              </a>
              <a href="#services" className="hover:text-orange-400 transition-colors">
                Services
              </a>
              <a href="#how-it-works" className="hover:text-orange-400 transition-colors">
                How It Works
              </a>
              <a href="#contact" className="hover:text-orange-400 transition-colors">
                Contact
              </a>
            </nav>
            <div className="hidden lg:flex items-center space-x-4">
              {/* <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-800">
                Sign In
              </Button> */}
              <a href="#contact" className="">
              <Button className="bg-orange-400 hover:bg-orange-500 text-white">Get Started</Button>
              </a>
            </div>
          </div>
        </div>
      </header>

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

      {/* CTA Section */}
      <section className="py-20 bg-teal-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Join thousands of satisfied customers and professionals on Kenya's premier service marketplace.
            </p>
            <div className="bg-white/10 p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Tuposerve—connecting you with the best service talent in Nairobi, one job at a time.
              </h3>
              <div className="flex justify-center mt-6">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 text-lg"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* contact secttion */}
      <div id="contacts">
      < Contact />
      </div>
      {/* Footer */}
      < Footer />
    </div>
  )
}