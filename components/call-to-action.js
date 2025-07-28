import { ArrowRight, Smartphone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary-teal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of satisfied customers and professionals on Kenya's premier service marketplace.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-white text-neutral-dark">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Globe className="h-16 w-16 text-warm-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-teal mb-2">For Clients</h3>
                <p className="text-neutral-mid">Post your job, browse certified profiles, and book instantly.</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mr-3"></div>
                  <span>Browse 5,000+ verified professionals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bright-cyan rounded-full mr-3"></div>
                  <span>Secure escrow payment system</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mr-3"></div>
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bright-cyan rounded-full mr-3"></div>
                  <span>Insurance coverage on all bookings</span>
                </div>
              </div>

              <Button className="w-full bg-warm-orange hover:bg-warm-orange/90 text-white">
                Visit www.tuposerve.com
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white text-neutral-dark">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Smartphone className="h-16 w-16 text-bright-cyan mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-teal mb-2">For Service Professionals</h3>
                <p className="text-neutral-mid">
                  Sign up, complete your assessment, and start receiving high-value job invitations.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bright-cyan rounded-full mr-3"></div>
                  <span>Free skills assessment and training</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mr-3"></div>
                  <span>Flexible work opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-bright-cyan rounded-full mr-3"></div>
                  <span>Fair and transparent pricing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-warm-orange rounded-full mr-3"></div>
                  <span>Professional development support</span>
                </div>
              </div>

              <Button className="w-full bg-bright-cyan hover:bg-bright-cyan/90 text-white">
                Visit portal.tuposerve.com
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Tuposerve—connecting you with the best service talent in Nairobi.
            </h3>
            <Button size="lg" className="bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 text-lg">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
