"use client"
import { Home, Car, Paintbrush, Zap, Droplets, Hammer, Users, Star, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    
    {
      icon: Car,
      title: "Mechanics",
      description: "Workshop and on-site vehicle diagnostics, maintenance, and repairs.",
      features: ["Certified technicians", "Mobile service", "Quality parts"],
      color: "text-bright-cyan",
      bgGradient: "from-bright-cyan/10 to-bright-cyan/5",
      borderColor: "border-bright-cyan/20",
      hoverShadow: "hover:shadow-bright-cyan/20",
    },
    {
      icon: Zap,
      title: "Electricians",
      description: "Electrical installations, repairs, and maintenance services.",
      features: ["Licensed professionals", "Emergency service", "Safety guaranteed"],
      color: "text-warm-orange",
      bgGradient: "from-warm-orange/10 to-warm-orange/5",
      borderColor: "border-warm-orange/20",
      hoverShadow: "hover:shadow-warm-orange/20",
    },
    {
      icon: Droplets,
      title: "Plumbers",
      description: "Plumbing installations, repairs, and water system maintenance.",
      features: ["Expert plumbers", "24/7 availability", "Modern equipment"],
      color: "text-bright-cyan",
      bgGradient: "from-bright-cyan/10 to-bright-cyan/5",
      borderColor: "border-bright-cyan/20",
      hoverShadow: "hover:shadow-bright-cyan/20",
    },
    {
      icon: Paintbrush,
      title: "Painters",
      description: "Interior and exterior painting services for homes and offices.",
      features: ["Quality materials", "Color consultation", "Clean finish"],
      color: "text-warm-orange",
      bgGradient: "from-warm-orange/10 to-warm-orange/5",
      borderColor: "border-warm-orange/20",
      hoverShadow: "hover:shadow-warm-orange/20",
    },
    {
      icon: Hammer,
      title: "Carpenters",
      description: "Custom furniture, repairs, and woodworking services.",
      features: ["Skilled craftsmen", "Custom designs", "Quality wood"],
      color: "text-bright-cyan",
      bgGradient: "from-bright-cyan/10 to-bright-cyan/5",
      borderColor: "border-bright-cyan/20",
      hoverShadow: "hover:shadow-bright-cyan/20",
    },
    {
      icon: Home,
      title: "Erranders",
      description: "Cleaning, cooking, childcare, errands—domestic support you can trust.",
      features: ["Background checked", "Easily accessible", "Flexible schedules"],
      color: "text-warm-orange",
      bgGradient: "from-warm-orange/10 to-warm-orange/5",
      borderColor: "border-warm-orange/20",
      hoverShadow: "hover:shadow-warm-orange/20",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-neutral-light/30 to-white services-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-teal/10 to-bright-cyan/10 rounded-full border border-primary-teal/20 mb-6">
            <Star className="h-4 w-4 text-primary-teal mr-2" />
            <span className="text-sm font-medium text-primary-teal">Trusted by 5000+ Customers</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-teal mb-4 lg:mb-6">
            Our Core 
            <span className="text-transparent bg-gradient-to-r from-bright-cyan to-warm-orange bg-clip-text"> Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-neutral-mid max-w-4xl mx-auto leading-relaxed">
            From household management to technical repairs, we connect you with vetted professionals across 
            <span className="font-semibold text-primary-teal"> 50+ service categories.</span>
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className={`relative overflow-hidden bg-gradient-to-br ${service.bgGradient} border-2 ${service.borderColor} shadow-lg hover:shadow-2xl ${service.hoverShadow} transition-all duration-300 h-full`}>
                {/* Header with gradient background */}
                <CardHeader className="relative bg-gradient-to-r from-primary-teal to-primary-teal/90 text-white overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
                  
                  <div className="relative flex items-center space-x-3 z-10">
                    <motion.div 
                      className={`p-2 bg-white rounded-xl shadow-lg`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${service.color}`} />
                    </motion.div>
                    <CardTitle className="text-white text-lg sm:text-xl font-bold">{service.title}</CardTitle>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 opacity-20">
                    <div className="w-16 h-16 bg-white/10 rounded-full"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 opacity-10">
                    <div className="w-20 h-20 bg-white/10 rounded-full"></div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                  <p className="text-neutral-dark mb-2 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-sm text-neutral-mid"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx, duration: 0.4 }}
                      >
                        <div className={`w-2 h-2 ${service.color.replace('text-', 'bg-')} rounded-full mr-3 flex-shrink-0`}></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Rating and availability */}
                  <div className="flex items-center justify-between py-2 border-t border-neutral-border/50">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-warm-orange text-warm-orange" />
                      ))}
                      <span className="text-xs text-neutral-mid ml-1">4.8</span>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${service.color.replace('text-', 'bg-')}/10 ${service.color}`}>
                      Available Now
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary-teal/5 via-bright-cyan/5 to-warm-orange/5 border-4 border-gradient-to-r border-warm-orange inline-block max-w-2xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-teal/5 via-transparent to-warm-orange/5"></div>
            
            <CardContent className="relative p-6 sm:p-8 lg:p-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="relative inline-block mb-4">
                  <Users className="h-16 w-16 sm:h-20 sm:w-20 text-warm-orange mx-auto" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-bright-cyan rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
              </motion.div>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-teal mb-3">
                50+ Additional 
                <span className="text-transparent bg-gradient-to-r from-warm-orange to-bright-cyan bg-clip-text"> Trades</span>
              </h3>
              
              <p className="text-neutral-mid mb-6 text-base sm:text-lg max-w-md mx-auto">
                From mechanics to carpenters, all certified and ready to deploy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="bg-gradient-to-r from-warm-orange to-warm-orange/90 hover:from-warm-orange/90 hover:to-warm-orange text-white px-8 py-3 text-lg font-semibold shadow-lg">
                    Explore All Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    className="border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white px-8 py-3 text-lg font-semibold"
                  >
                    Join as Professional
                  </Button>
                </motion.div>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 pt-6 border-t border-neutral-border">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-primary-teal">98%</div>
                  <div className="text-xs text-neutral-mid">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-warm-orange">24h</div>
                  <div className="text-xs text-neutral-mid">Response Time</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-bright-cyan">5000+</div>
                  <div className="text-xs text-neutral-mid">Happy Clients</div>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
