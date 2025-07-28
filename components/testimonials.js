"use client"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Homeowner, Westlands",
      content:
        "Tuposerve connected me with the most reliable house girl. She's been with us for 6 months now and we couldn't be happier. The vetting process really works!",
      rating: 5,
      image: "/avatar1.jpg",
      service: "House Cleaning",
      color: "warm-orange"
    },
    {
      name: "James Mwangi",
      role: "Business Owner, CBD",
      content:
        "Our company fleet is always in top condition thanks to the mechanics from Tuposerve. Professional, punctual, and reasonably priced.",
      rating: 5,
      image: "/avatar3.jpg",
      service: "Mechanic Services",
      color: "bright-cyan"
    },
    {
      name: "Grace Akinyi",
      role: "Resident, Karen",
      content:
        "From plumbing to electrical work, Tuposerve has never disappointed. The secure payment system gives me peace of mind.",
      rating: 5,
      image: "/avatar2.jpg",
      service: "Home Repairs",
      color: "primary-teal"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-neutral-light via-white to-cyan-tint/20 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-20 right-10 text-bright-cyan/10"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear" 
        }}
      >
        <Quote className="h-32 w-32" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-10 text-warm-orange/10"
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
      >
        <Star className="h-24 w-24" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-warm-orange/10 to-bright-cyan/10 rounded-full border border-warm-orange/20 mb-6">
            <Star className="h-4 w-4 text-warm-orange mr-2" />
            <span className="text-sm font-medium text-primary-teal">5000+ Happy Customers</span>
          </div> */}
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-teal mb-4 lg:mb-6">
            What Our 
            <span className="text-transparent bg-gradient-to-r from-warm-orange to-bright-cyan bg-clip-text"> Customers</span>
            <br className="hidden sm:block" />
            Say
          </h2>
          <p className="text-lg sm:text-xl text-neutral-mid max-w-4xl mx-auto leading-relaxed">
            Real experiences from real customers across Nairobi.
          </p>
        </motion.div>

        {/* Desktop/Tablet View */}
        <motion.div 
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className={`relative overflow-hidden bg-white border-2 border-gradient-to-r border-${testimonial.color}/20 shadow-lg hover:shadow-2xl transition-all duration-300 h-full`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${testimonial.color}/5 to-transparent`}></div>
                
                <CardContent className="relative p-6 lg:p-8 flex flex-col h-full">
                  {/* Header with quote and rating */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Quote className={`h-8 w-8 text-${testimonial.color}`} />
                    </motion.div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="h-4 w-4 fill-warm-orange text-warm-orange" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Service tag */}
                  <div className={`inline-block px-3 py-1 bg-${testimonial.color}/10 text-${testimonial.color} text-xs font-medium rounded-full mb-4 self-start`}>
                    {testimonial.service}
                  </div>

                  {/* Content */}
                  <p className="text-neutral-dark mb-6 italic leading-relaxed flex-grow text-sm lg:text-base">
                    "{testimonial.content}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center pt-4 border-t border-neutral-border/50">
                    <div className="relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-md"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-${testimonial.color} rounded-full border-2 border-white`}></div>
                    </div>
                    <div>
                      <div className="font-semibold text-primary-teal text-sm lg:text-base">{testimonial.name}</div>
                      <div className="text-xs lg:text-sm text-neutral-mid">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className={`relative overflow-hidden bg-white border-2 border-gradient-to-r border-${testimonials[currentIndex].color}/20 shadow-lg mx-4`}>
              <div className={`absolute inset-0 bg-gradient-to-br from-${testimonials[currentIndex].color}/5 to-transparent`}></div>
              
              <CardContent className="relative p-6 text-center">
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warm-orange text-warm-orange" />
                  ))}
                </div>

                {/* Service tag */}
                <div className={`inline-block px-3 py-1 bg-${testimonials[currentIndex].color}/10 text-${testimonials[currentIndex].color} text-xs font-medium rounded-full mb-4`}>
                  {testimonials[currentIndex].service}
                </div>

                {/* Content */}
                <p className="text-neutral-dark mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white shadow-md"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-primary-teal">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-neutral-mid">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-6 space-x-4">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-warm-orange' : 'bg-neutral-border'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-4 bg-gradient-to-r from-primary-teal/5 to-bright-cyan/5 backdrop-blur-sm rounded-2xl border border-primary-teal/20">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary-teal">4.9★</div>
              <div className="text-xs sm:text-sm text-neutral-mid">Average Rating</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-neutral-border"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-warm-orange">5000+</div>
              <div className="text-xs sm:text-sm text-neutral-mid">Reviews</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-neutral-border"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-bright-cyan">98%</div>
              <div className="text-xs sm:text-sm text-neutral-mid">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
