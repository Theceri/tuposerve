import { Users, CheckCircle, Clock, Award } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "Verified Professionals",
      color: "text-warm-orange",
    },
    {
      icon: CheckCircle,
      number: "25,000+",
      label: "Jobs Completed",
      color: "text-bright-cyan",
    },
    {
      icon: Clock,
      number: "2 hrs",
      label: "Average Response Time",
      color: "text-warm-orange",
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "Customer Satisfaction",
      color: "text-bright-cyan",
    },
  ]

  return (
    <section className="py-20 bg-primary-teal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Thousands in Nairobi</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our numbers speak for themselves. Join the growing community of satisfied customers and professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
