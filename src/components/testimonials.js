import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      role: "Homeowner, Westlands",
      content:
        "Tuposerve connected me with the most reliable house girl. She's been with us for 6 months now and we couldn't be happier. The vetting process really works!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "James Mwangi",
      role: "Business Owner, CBD",
      content:
        "Our company fleet is always in top condition thanks to the mechanics from Tuposerve. Professional, punctual, and reasonably priced.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Grace Akinyi",
      role: "Resident, Karen",
      content:
        "From plumbing to electrical work, Tuposerve has never disappointed. The secure payment system gives me peace of mind.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-teal mb-4">What Our Customers Say</h2>
          <p className="text-xl text-neutral-mid max-w-3xl mx-auto">
            Real experiences from real customers across Nairobi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border border-neutral-border shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-bright-cyan mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warm-orange text-warm-orange" />
                    ))}
                  </div>
                </div>

                <p className="text-neutral-dark mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-primary-teal">{testimonial.name}</div>
                    <div className="text-sm text-neutral-mid">{testimonial.role}</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t-4 border-warm-orange"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
