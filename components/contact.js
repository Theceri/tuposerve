"use client";

import React, { useState } from "react"
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Phone number for WhatsApp integration (from user's sample form)
  const whatsappPhoneNumber = "254717661139"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp using formData
    const whatsappMessage = encodeURIComponent(
      `New Contact Request\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    
    // Open WhatsApp with the pre-filled message
    window.open(
      `https://wa.me/${whatsappPhoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );
    
    // Show success alert (replace with toast if you have a Toaster set up)
    alert("Your message has been sent via WhatsApp!"); 
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50"> {/* Adjusted bg color */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-teal-800 mb-4">Get in Touch</h2> {/* Adjusted text color */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"> {/* Adjusted text color */}
            We'd love to hear from you! Fill out the form below to send us a message via WhatsApp, or find our location and contact details.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Contact Form with WhatsApp Integration */}
          <Card className="bg-white shadow-xl rounded-xl p-6">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-teal-800 mb-6">Send Us a Message</h3> {/* Adjusted text color */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium mb-2 block">Your Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-lg p-3 border-gray-300 focus:border-teal-500 focus:ring-teal-500 bg-white" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium mb-2 block">Your Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-lg p-3 border-gray-300 focus:border-teal-500 focus:ring-teal-500 bg-white" 
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium mb-2 block">Your Phone</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="e.g., +2547XXXXXXXX" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="rounded-lg p-3 border-gray-300 focus:border-teal-500 focus:ring-teal-500 bg-white" 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium mb-2 block">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Type your message here..." 
                    rows={5} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="rounded-lg p-3 border-gray-300 focus:border-teal-500 focus:ring-teal-500 min-h-[150px] bg-white" 
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-800 hover:bg-teal-900 text-white rounded-lg px-6 py-4 text-lg flex items-center justify-center"> {/* Added flex, items-center, justify-center */}
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right Column: Map and Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white shadow-xl rounded-xl p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-teal-800 mb-4">Our Location</h3> {/* Adjusted text color */}
                <div className="h-80 w-full rounded-lg overflow-hidden border border-gray-200">
                  {/* Google Maps Embed - Replace src with your actual location embed code */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.81733952971!2d36.82098707372745!3d-1.2834620356204276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6678064cf%3A0x956bb6f5e0ab2aac!2sMoi%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1753678978482!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nairobi Map"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl rounded-xl p-6">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-2xl font-bold text-teal-800 mb-4">Contact Details</h3> {/* Adjusted text color */}
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin className="h-6 w-6 text-orange-400" /> {/* Adjusted icon color */}
                  <span>Nairobi CBD, Moi Avenue</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="h-6 w-6 text-orange-400" /> {/* Adjusted icon color */}
                  <span>+254 717 661 139</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="h-6 w-6 text-orange-400" /> {/* Adjusted icon color */}
                  <span>info@tuposerve.com</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
