"use client"
import { Users, CheckCircle, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

function CountingNumber({ end, duration = 2 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      if (typeof end === 'string') {
        // Handle string numbers like "5,000+"
        const numOnly = parseFloat(end.replace(/[^0-9.]/g, ''))
        setCount(Math.floor(numOnly * progress))
      } else {
        setCount(Math.floor(end * progress))
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  if (typeof end === 'string') {
    const suffix = end.replace(/[0-9.,]/g, '')
    const numOnly = parseFloat(end.replace(/[^0-9.]/g, ''))
    if (numOnly >= 1000) {
      return `${(count / 1000).toFixed(count < numOnly ? 1 : 0)}k${suffix}`
    }
    return `${count}${suffix}`
  }

  return count
}

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: "5000",
      display: "5,000+",
      label: "Verified Professionals",
      color: "text-warm-orange",
      bgGradient: "from-warm-orange/20 to-warm-orange/10",
      iconBg: "bg-warm-orange/20",
    },
    // {
    //   icon: CheckCircle,
    //   number: "25000",
    //   display: "25,000+",
    //   label: "Jobs Completed",
    //   color: "text-bright-cyan",
    //   bgGradient: "from-bright-cyan/20 to-bright-cyan/10",
    //   iconBg: "bg-bright-cyan/20",
    // },
    // {
    //   icon: Clock,
    //   number: "2",
    //   display: "2 hrs",
    //   label: "Average Response Time",
    //   color: "text-warm-orange",
    //   bgGradient: "from-warm-orange/20 to-warm-orange/10",
    //   iconBg: "bg-warm-orange/20",
    // },
    // {
    //   icon: Award,
    //   number: "4.9",
    //   display: "4.9/5",
    //   label: "Customer Satisfaction",
    //   color: "text-bright-cyan",
    //   bgGradient: "from-bright-cyan/20 to-bright-cyan/10",
    //   iconBg: "bg-bright-cyan/20",
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
    hidden: { opacity: 0, y: 50, scale: 0.8 },
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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-teal via-primary-teal/95 to-bright-cyan/90 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <motion.div
        className="absolute top-20 left-10 text-warm-orange/10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Users className="h-32 w-32" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-bright-cyan/10"
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
        <Award className="h-24 w-24" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
            <CheckCircle className="h-4 w-4 text-bright-cyan mr-2" />
            <span className="text-sm font-medium">Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Trusted by
            <span className="text-transparent bg-gradient-to-r from-warm-orange to-bright-cyan bg-clip-text"> Thousands</span>
            <br className="hidden sm:block" />
            in Nairobi
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Our numbers speak for themselves. Join the growing community of satisfied customers and professionals.
          </p>
        </motion.div>

        {/* This is the div where we apply the centering classes */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-7xl mx-auto" // Key changes here
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)] max-w-xs" // Added width classes and max-w-xs for individual card size
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`relative text-center p-6 sm:p-8 bg-gradient-to-br ${stat.bgGradient} backdrop-blur-sm rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
                {/* Icon */}
                <motion.div
                  className={`${stat.iconBg} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <stat.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${stat.color}`} />
                </motion.div>

                {/* Number with counting animation */}
                <motion.div
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                  >
                    <CountingNumber end={stat.display} duration={2 + index * 0.2} />
                  </motion.span>
                </motion.div>

                {/* Label */}
                <div className="text-white/90 text-sm sm:text-base font-medium leading-tight">
                  {stat.label}
                </div>

                {/* Decorative element */}
                <div className="absolute top-2 right-2 opacity-20">
                  <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional trust indicators */}
        <motion.div
          className="mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-warm-orange">98%</div>
              <div className="text-xs sm:text-sm text-white/70">Success Rate</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-bright-cyan">24/7</div>
              <div className="text-xs sm:text-sm text-white/70">Support Available</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-warm-orange">5★</div>
              <div className="text-xs sm:text-sm text-white/70">Top Rated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}