import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Commercial Pilot",
    image: "/images/testimonial-1.jpg",
    quote: "The training at Eagle Air was exceptional. The instructors are highly experienced and the aircraft fleet is well-maintained. I completed my CPL here and couldn't be happier with my choice.",
  },
  {
    name: "Michael Chen",
    role: "Private Pilot",
    image: "/images/testimonial-2.jpg",
    quote: "As a complete beginner, I was nervous about starting flight training. The team at Eagle Air made me feel comfortable from day one. Their structured approach to training helped me achieve my PPL with confidence.",
  },
  {
    name: "Emily Rodriguez",
    role: "Flight Instructor",
    image: "/images/testimonial-3.jpg",
    quote: "I completed my entire training journey at Eagle Air, from PPL to Flight Instructor Rating. The professional environment and comprehensive training programs set them apart from other schools.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Student Success Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from our graduates about their experience at Eagle Air
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.quote}"</p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 