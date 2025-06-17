"use client"

import { motion } from "framer-motion"
import { Star, Quote, CheckCircle } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CISO, TechCorp",
    company: "Fortune 500 Technology Company",
    content:
      "CyberShield's penetration testing revealed critical vulnerabilities we never knew existed. Their expertise and professionalism saved us from potential disasters. The team's response time and thoroughness exceeded all expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    verified: true,
  },
  {
    name: "Michael Chen",
    role: "IT Director, FinanceFirst",
    company: "Leading Financial Institution",
    content:
      "The incident response team was incredible. They contained the breach within hours and helped us recover completely. Their 24/7 support and expertise gave us confidence during a critical situation.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    verified: true,
  },
  {
    name: "Emily Rodriguez",
    role: "Security Manager, HealthTech",
    company: "Healthcare Technology Provider",
    content:
      "Their compliance expertise helped us achieve SOC 2 certification ahead of schedule. The team's attention to detail and comprehensive approach made the entire process seamless and stress-free.",
    rating: 5,
    avatar: "/placeholder.svg?height=80&width=80",
    verified: true,
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="cyber-border px-6 py-2 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-medium text-sm lg:text-base">Client Success</span>
            </div>
          </motion.div>

          <h2 className="text-responsive-lg font-space-grotesk font-bold mb-6">
            What Our <span className="cyber-text">Clients Say</span>
          </h2>
          <p className="text-responsive-md text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Trusted by industry leaders worldwide for our expertise, reliability, and exceptional service delivery.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="cyber-border p-6 lg:p-8 rounded-xl backdrop-blur-sm relative card-hover h-full flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 lg:h-10 lg:w-10 text-blue-400/50 mb-4" />

              {/* Content */}
              <p className="text-gray-300 mb-6 lg:mb-8 italic leading-relaxed text-sm lg:text-base flex-1">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 border-blue-500/30 object-cover"
                  />
                  {testimonial.verified && (
                    <CheckCircle className="absolute -bottom-1 -right-1 h-5 w-5 text-green-400 bg-gray-950 rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-sm lg:text-base">{testimonial.name}</h4>
                  <p className="text-blue-400 text-xs lg:text-sm font-medium">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.company}</p>
                </div>
              </div>

              {/* Verified Badge */}
              {testimonial.verified && (
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500/10 border border-green-500/30 px-2 py-1 rounded-full">
                    <span className="text-green-400 text-xs font-medium">Verified</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "4.9/5", label: "Average Rating" },
              { value: "500+", label: "Happy Clients" },
              { value: "99%", label: "Retention Rate" },
              { value: "24/7", label: "Support Available" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-xl lg:text-2xl font-bold cyber-text mb-1">{item.value}</div>
                <div className="text-gray-400 text-sm lg:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
