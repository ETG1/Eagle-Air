import { motion } from 'framer-motion'
import { AcademicCapIcon, ClipboardDocumentCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const courses = [
  {
    title: "Private Pilot License (PPL)",
    description: "Start your aviation journey with our comprehensive PPL program. Learn fundamental flying skills and aeronautical knowledge.",
    duration: "6-8 months",
    icon: AcademicCapIcon,
  },
  {
    title: "Commercial Pilot License (CPL)",
    description: "Advance your career with our CPL program. Master advanced flying techniques and commercial operations.",
    duration: "12-18 months",
    icon: ChartBarIcon,
  },
  {
    title: "Instrument Rating (IR)",
    description: "Enhance your flying capabilities with instrument flight training. Learn to fly safely in various weather conditions.",
    duration: "4-6 months",
    icon: ClipboardDocumentCheckIcon,
  },
]

export default function CoursesOverview() {
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
          <h2 className="section-heading">Our Training Programs</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive aviation training programs designed to help you achieve your flying goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl"
            >
              <course.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Duration:</span>
                <span className="ml-2">{course.duration}</span>
              </div>
              <a 
                href={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 