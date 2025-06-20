import { Search, UserCheck, CreditCard, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Post Your Job",
      description: "Describe your service needs in minutes. Our platform matches you with qualified professionals.",
      color: "bg-warm-orange",
    },
    {
      icon: UserCheck,
      title: "Review Profiles",
      description: "Browse vetted professional profiles, read reviews, and compare ratings before making your choice.",
      color: "bg-bright-cyan",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pay securely through our platform. Funds are held in escrow until you confirm satisfaction.",
      color: "bg-warm-orange",
    },
    {
      icon: Shield,
      title: "Protected Service",
      description: "Every booking is backed by insurance coverage and our dedicated customer care team.",
      color: "bg-bright-cyan",
    },
  ]

  return (
    <section className="py-20 bg-cyan-tint">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-teal mb-4">How Tuposerve Works</h2>
          <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
            Getting quality service has never been easier. Our streamlined process ensures you get the right
            professional for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white border border-neutral-border shadow-lg h-full">
                <CardContent className="p-8 text-center">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 bg-primary-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-primary-teal mb-4">{step.title}</h3>
                  <p className="text-neutral-mid">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-warm-orange"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
