"use client"
import { ArrowRight, CheckCircle, Star, Sparkles, Users, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-tint via-white to-neutral-light hero-pattern py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Floating Graphics */}
      <motion.div
        className="absolute top-20 right-10 text-bright-cyan opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <Sparkles className="h-16 w-16" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-10 text-warm-orange opacity-20"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2 
        }}
      >
        <Users className="h-12 w-12" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/4 text-primary-teal opacity-10"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4 
        }}
      >
        <Shield className="h-20 w-20" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="space-y-4 lg:space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-bright-cyan/10 to-warm-orange/10 rounded-full border border-bright-cyan/20 mb-4">
                <Sparkles className="h-4 w-4 text-bright-cyan mr-2" />
                <span className="text-sm font-medium text-primary-teal">Kenya's #1 Service Marketplace</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-teal leading-tight">
                Your Trusted
                <span className="block text-transparent bg-gradient-to-r from-bright-cyan to-warm-orange bg-clip-text">
                  Service Marketplace
                </span>
                in Nairobi
              </h1>
              
              <p className="text-lg sm:text-xl text-neutral-mid leading-relaxed max-w-xl mx-auto lg:mx-0">
                Connect with vetted, reliable service professionals. From house girls to mechanics and 50+ other trades.
                <span className="font-semibold text-primary-teal"> Quality service you can trust.</span>
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#services" className="group">
                <Button size="lg" className="flex items-center justify-center bg-gradient-to-r from-warm-orange to-warm-orange/90 hover:from-warm-orange/90 hover:to-warm-orange text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  Find Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact" className="group">
                <Button
                  size="lg"
                  variant="outline"
                  className="flex items-center justify-center border-2 border-warm-orange text-warm-orange hover:bg-gradient-to-r hover:from-warm-orange hover:to-warm-orange/90 hover:text-white px-8 py-4 text-lg transition-all duration-300 group-hover:scale-105"
                >
                  Join as Professional
                </Button>
              </a>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 text-center sm:text-left">
                <div className="p-2 bg-bright-cyan/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-bright-cyan" />
                </div>
                <span className="text-neutral-dark font-medium text-sm lg:text-base">Vetted Professionals</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 text-center sm:text-left">
                <div className="p-2 bg-warm-orange/10 rounded-full">
                  <Shield className="h-6 w-6 text-warm-orange" />
                </div>
                <span className="text-neutral-dark font-medium text-sm lg:text-base">Secure Payments</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 text-center sm:text-left">
                <div className="p-2 bg-primary-teal/10 rounded-full">
                  <Clock className="h-6 w-6 text-primary-teal" />
                </div>
                <span className="text-neutral-dark font-medium text-sm lg:text-base">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-bright-cyan/5 to-warm-orange/5 rounded-3xl transform rotate-3"></div>
            
            <Card className="relative bg-white/90 backdrop-blur-sm border-2 border-gradient-to-r from-bright-cyan/20 to-warm-orange/20 shadow-2xl hover:shadow-3xl transition-all duration-300 pulse-glow">
              <CardContent className="p-6 lg:p-8">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl lg:text-2xl font-semibold text-primary-teal">Quick Booking</h3>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.div
                          key={star}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + star * 0.1, duration: 0.3 }}
                        >
                          <Star className="h-4 w-4 fill-warm-orange text-warm-orange" />
                        </motion.div>
                      ))}
                      <span className="text-sm text-neutral-mid ml-2 font-semibold">4.9/5</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <motion.div 
                      className="p-4 bg-gradient-to-r from-neutral-light to-bright-cyan/5 rounded-2xl border border-bright-cyan/10"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(62, 193, 211, 0.1)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-neutral-dark">House Cleaning</span>
                        <span className="text-warm-orange font-bold text-lg">KSh 2,500</span>
                      </div>
                      <p className="text-sm text-neutral-mid mt-1">Professional house girl • 4 hours</p>
                      <div className="flex items-center mt-2">
                        <div className="flex-1 bg-bright-cyan/20 rounded-full h-2">
                          <motion.div 
                            className="bg-bright-cyan h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ delay: 1.2, duration: 1 }}
                          ></motion.div>
                        </div>
                        <span className="text-xs text-bright-cyan ml-2 font-medium">Available</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="p-4 bg-gradient-to-r from-neutral-light to-warm-orange/5 rounded-2xl border border-warm-orange/10"
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(242, 157, 53, 0.1)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-neutral-dark">Car Service</span>
                        <span className="text-warm-orange font-bold text-lg">KSh 3,500</span>
                      </div>
                      <p className="text-sm text-neutral-mid mt-1">Certified mechanic • Full service</p>
                      <div className="flex items-center mt-2">
                        <div className="flex-1 bg-warm-orange/20 rounded-full h-2">
                          <motion.div 
                            className="bg-warm-orange h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "92%" }}
                            transition={{ delay: 1.4, duration: 1 }}
                          ></motion.div>
                        </div>
                        <span className="text-xs text-warm-orange ml-2 font-medium">Available</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a href="#contact">
                      <Button className="w-full bg-gradient-to-r from-primary-teal to-bright-cyan hover:from-primary-teal/90 hover:to-bright-cyan/90 text-white py-3 text-lg font-semibold shadow-lg">
                        Book Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </motion.div>
                  
                  {/* Trust indicators */}
                  <div className="flex items-center justify-center space-x-6 pt-4 border-t border-neutral-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-teal">5000+</div>
                      <div className="text-xs text-neutral-mid">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warm-orange">500+</div>
                      <div className="text-xs text-neutral-mid">Professionals</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-bright-cyan">50+</div>
                      <div className="text-xs text-neutral-mid">Services</div>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
