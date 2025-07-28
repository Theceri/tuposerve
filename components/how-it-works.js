"use client"
import { Search, UserCheck, CreditCard, Shield, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Post Your Job",
      description: "Describe your service needs in minutes. Our platform matches you with qualified professionals.",
      color: "bg-warm-orange",
      iconColor: "text-warm-orange",
      bgGradient: "from-warm-orange/10 to-warm-orange/5",
      borderColor: "border-warm-orange/20",
    },
    {
      icon: UserCheck,
      title: "Review Profiles",
      description: "Browse certified professional profiles, read reviews, and compare ratings before making your choice.",
      color: "bg-bright-cyan",
      iconColor: "text-bright-cyan",
      bgGradient: "from-bright-cyan/10 to-bright-cyan/5",
      borderColor: "border-bright-cyan/20",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pay securely through our platform. Funds are held in escrow until you confirm satisfaction.",
      color: "bg-warm-orange",
      iconColor: "text-warm-orange",
      bgGradient: "from-warm-orange/10 to-warm-orange/5",
      borderColor: "border-warm-orange/20",
    },
    // {
    //   icon: Shield,
    //   title: "Protected Service",
    //   description: "Every booking is backed by insurance coverage and our dedicated customer care team.",
    //   color: "bg-bright-cyan",
    //   iconColor: "text-bright-cyan",
    //   bgGradient: "from-bright-cyan/10 to-bright-cyan/5",
    //   borderColor: "border-bright-cyan/20",
    // },
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-cyan-tint via-cyan-tint/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-10 text-primary-teal/10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Search className="h-32 w-32" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 text-bright-cyan/10"
        animate={{
          rotate: [360, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Shield className="h-24 w-24" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-teal/10 to-warm-orange/10 rounded-full border border-primary-teal/20 mb-6">
            <Shield className="h-4 w-4 text-primary-teal mr-2" />
            <span className="text-sm font-medium text-primary-teal">Simple & Secure Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-teal mb-4 lg:mb-6">
            How
            <span className="text-transparent bg-gradient-to-r from-warm-orange to-bright-cyan bg-clip-text"> Tuposerve</span>
            <br className="hidden sm:block" />
            Works
          </h2>
          <p className="text-lg sm:text-xl text-neutral-mid max-w-4xl mx-auto leading-relaxed">
            Getting quality service has never been easier. Our streamlined process ensures you get the right
            professional for your needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <Card className={`relative overflow-hidden bg-gradient-to-br ${step.bgGradient} border-2 ${step.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 h-full`}>
                <CardContent className="p-6 lg:p-8 text-center relative">
                  {/* Step number - Adjusted to be visible */}
                  <motion.div
                    className="absolute top-4 left-4 bg-gradient-to-r from-primary-teal to-primary-teal/90 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5, type: "spring" }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`${step.color} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-primary-teal mb-4">{step.title}</h3>
                  <p className="text-neutral-mid text-sm sm:text-base leading-relaxed">{step.description}</p>

                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 opacity-20">
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-2 left-2 opacity-10">
                    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                  </div>
                </CardContent>
              </Card>

              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20"
                  variants={lineVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-warm-orange to-bright-cyan origin-left"></div>
                    <ArrowRight className="h-4 w-4 text-warm-orange ml-1" />
                  </div>
                </motion.div>
              )}

              {/* Connecting arrow for mobile */}
              {index < steps.length - 1 && (
                <motion.div
                  className="lg:hidden flex justify-center my-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-warm-orange to-bright-cyan"></div>
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="h-4 w-4 text-warm-orange rotate-90" />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-4 bg-gradient-to-r from-primary-teal/5 to-bright-cyan/5 backdrop-blur-sm rounded-2xl border border-primary-teal/20">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary-teal">2min</div>
              <div className="text-xs sm:text-sm text-neutral-mid">Average Setup</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-neutral-border"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-warm-orange">24/7</div>
              <div className="text-xs sm:text-sm text-neutral-mid">Support</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-neutral-border"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-bright-cyan">100%</div>
              <div className="text-xs sm:text-sm text-neutral-mid">Secure</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}