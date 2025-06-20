import { ArrowRight, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Hero() {
  return (
    <section className="bg-cyan-tint py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-teal leading-tight">
                Your Trusted Service Marketplace in Nairobi
              </h1>
              <p className="text-xl text-neutral-mid leading-relaxed">
                Connect with vetted, reliable service professionals. From house girls to mechanics and 50+ other trades.
                Quality service you can trust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 text-lg">
                Find Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white px-8 py-4 text-lg"
              >
                Join as Professional
              </Button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-bright-cyan" />
                <span className="text-neutral-dark font-medium">Vetted Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-bright-cyan" />
                <span className="text-neutral-dark font-medium">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-bright-cyan" />
                <span className="text-neutral-dark font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-white border border-neutral-border shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-primary-teal">Quick Booking</h3>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-warm-orange text-warm-orange" />
                      ))}
                      <span className="text-sm text-neutral-mid ml-2">4.9/5</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-neutral-light rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-neutral-dark">House Cleaning</span>
                        <span className="text-warm-orange font-semibold">KSh 2,500</span>
                      </div>
                      <p className="text-sm text-neutral-mid mt-1">Professional house girl • 4 hours</p>
                    </div>

                    <div className="p-4 bg-neutral-light rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-neutral-dark">Car Service</span>
                        <span className="text-warm-orange font-semibold">KSh 3,500</span>
                      </div>
                      <p className="text-sm text-neutral-mid mt-1">Certified mechanic • Full service</p>
                    </div>
                  </div>

                  <Button className="w-full bg-primary-teal hover:bg-primary-teal/90 text-white">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
