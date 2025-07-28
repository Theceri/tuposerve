import { Home, Car, Paintbrush, Zap, Droplets, Hammer, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    
    {
      icon: Car,
      title: "Mechanics",
      description: "Workshop and on-site vehicle diagnostics, maintenance, and repairs.",
      features: ["Certified technicians", "Mobile service", "Quality parts"],
      color: "text-bright-cyan",
    },
    {
      icon: Zap,
      title: "Electricians",
      description: "Electrical installations, repairs, and maintenance services.",
      features: ["Licensed professionals", "Emergency service", "Safety guaranteed"],
      color: "text-warm-orange",
    },
    {
      icon: Droplets,
      title: "Plumbers",
      description: "Plumbing installations, repairs, and water system maintenance.",
      features: ["Expert plumbers", "24/7 availability", "Modern equipment"],
      color: "text-bright-cyan",
    },
    {
      icon: Paintbrush,
      title: "Painters",
      description: "Interior and exterior painting services for homes and offices.",
      features: ["Quality materials", "Color consultation", "Clean finish"],
      color: "text-warm-orange",
    },
    {
      icon: Hammer,
      title: "Carpenters",
      description: "Custom furniture, repairs, and woodworking services.",
      features: ["Skilled craftsmen", "Custom designs", "Quality wood"],
      color: "text-bright-cyan",
    },
    {
      icon: Home,
      title: "House Maintenance",
      description: "Cleaning, cooking, childcare, errands—domestic support you can trust.",
      features: ["Background checked", "Trained professionals", "Flexible schedules"],
      color: "text-warm-orange",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-teal mb-4">Our Core Services</h2>
          <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
            From household management to technical repairs, we connect you with certified professionals across several service
            categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white border border-neutral-border shadow-lg hover:shadow-xl transition-shadow group"
            >
              <CardHeader className="bg-primary-teal text-white">
                <div className="flex items-center space-x-3">
                  <service.icon className={`h-8 w-8 ${service.color} bg-white p-1 rounded`} />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6"> {/* Added p-6 back */}
  <p className="">{service.description}</p>
  <ul className="">
    {service.features.map((feature, idx) => (
      <li key={idx} className="flex items-center text-sm text-neutral-mid">
        <div className="w-2 h-2 bg-warm-orange rounded-full mr-3"></div>
        {feature}
      </li>
    ))}
  </ul>
  <Button
    variant="outline"
    className="w-full border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white"
  >
    View Professionals
  </Button>
</CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-neutral-light border-4 border-warm-orange inline-block">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-warm-orange mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-teal mb-2">Additional Trades</h3>
              <p className="text-neutral-mid mb-4">
                From gardeners to security guards, all certified and ready to deploy.
              </p>
              <Button className="bg-warm-orange hover:bg-warm-orange/90 text-white">Explore All Services</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
