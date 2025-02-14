import { motion } from 'framer-motion'
import { AcademicCapIcon, ClipboardDocumentCheckIcon, ChartBarIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const courses = [
  {
    title: "Private Pilot License (PPL)",
    description: "Start your aviation journey with our comprehensive PPL program. Learn fundamental flying skills and aeronautical knowledge.",
    duration: "6-8 months",
    requirements: [
      "Be at least 17 years old",
      "Hold a valid Class 2 medical certificate",
      "Be able to read, speak, and understand English",
    ],
    curriculum: [
      "Ground School Training",
      "Flight Training (minimum 40 hours)",
      "Cross-Country Navigation",
      "Night Flying",
      "Radio Communications",
    ],
    icon: AcademicCapIcon,
  },
  {
    title: "Commercial Pilot License (CPL)",
    description: "Advance your career with our CPL program. Master advanced flying techniques and commercial operations.",
    duration: "12-18 months",
    requirements: [
      "Hold a valid PPL",
      "Be at least 18 years old",
      "Hold a valid Class 1 medical certificate",
      "Have completed 250 hours of flight time",
    ],
    curriculum: [
      "Advanced Ground School",
      "Complex Aircraft Operations",
      "Advanced Navigation",
      "Commercial Operations",
      "Multi-Engine Training (optional)",
    ],
    icon: ChartBarIcon,
  },
  {
    title: "Instrument Rating (IR)",
    description: "Enhance your flying capabilities with instrument flight training. Learn to fly safely in various weather conditions.",
    duration: "4-6 months",
    requirements: [
      "Hold a valid PPL",
      "Have completed 50 hours of cross-country flight time",
    ],
    curriculum: [
      "Instrument Flight Rules (IFR)",
      "Weather Theory and Planning",
      "Instrument Approaches",
      "Radio Navigation",
      "Emergency Procedures",
    ],
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Flight Instructor Rating (FI)",
    description: "Share your passion for aviation by becoming a certified flight instructor.",
    duration: "3-4 months",
    requirements: [
      "Hold a valid CPL",
      "Have completed 200 hours of flight time",
      "Pass the flight instructor entrance exam",
    ],
    curriculum: [
      "Teaching and Learning",
      "Instructional Techniques",
      "Lesson Planning",
      "Student Assessment",
      "Safety Management",
    ],
    icon: BookOpenIcon,
  },
]

export default function CoursesPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="hero-heading mb-6">Flight Training Programs</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive aviation training programs designed to help you achieve your flying goals,
              from private pilot to commercial aviation career.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card hover:shadow-xl"
              >
                <div className="flex items-start mb-6">
                  <course.icon className="w-12 h-12 text-blue-600 mr-4" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Duration</h3>
                    <p className="text-gray-600 dark:text-gray-400">{course.duration}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      {course.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Curriculum Highlights</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      {course.curriculum.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full button-primary mt-4"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 