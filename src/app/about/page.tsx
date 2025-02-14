import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: "Captain John Smith",
    role: "Chief Flight Instructor",
    image: "/images/team-1.jpg",
    qualifications: "ATP License, Flight Instructor, 15,000+ hours",
    description: "With over 20 years of aviation experience, Capt. Smith leads our team of instructors and ensures the highest standards of training.",
  },
  {
    name: "Sarah Williams",
    role: "Head of Ground School",
    image: "/images/team-2.jpg",
    qualifications: "CPL, Flight Instructor, Aviation Theory Specialist",
    description: "Sarah brings her extensive knowledge of aviation theory and practical experience to provide comprehensive ground training.",
  },
  {
    name: "Michael Chen",
    role: "Senior Flight Instructor",
    image: "/images/team-3.jpg",
    qualifications: "CPL, Multi-Engine Instructor, 8,000+ hours",
    description: "Specializing in multi-engine training, Michael ensures our students master complex aircraft operations.",
  },
  {
    name: "Emily Rodriguez",
    role: "Safety Manager",
    image: "/images/team-4.jpg",
    qualifications: "Safety Management Systems Expert, Former Air Traffic Controller",
    description: "Emily oversees our safety protocols and ensures compliance with all aviation regulations.",
  },
]

const milestones = [
  {
    year: "2005",
    title: "Establishment",
    description: "Eagle Air was founded with a vision to provide exceptional flight training.",
  },
  {
    year: "2010",
    title: "Fleet Expansion",
    description: "Added advanced aircraft to our fleet, including multi-engine training aircraft.",
  },
  {
    year: "2015",
    title: "Training Innovation",
    description: "Introduced advanced simulation technology and updated training methodologies.",
  },
  {
    year: "2020",
    title: "International Recognition",
    description: "Achieved international accreditation and expanded our training programs.",
  },
]

export default function AboutPage() {
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
            <h1 className="hero-heading mb-6">About Eagle Air</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated to excellence in aviation training since 2005
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              To provide world-class aviation training that empowers the next generation of pilots
              with the knowledge, skills, and confidence to achieve their flying dreams safely and professionally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet our experienced team of aviation professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start space-x-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {member.qualifications}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles that guide us in delivering excellence in aviation training
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Safety First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Safety is our top priority in every aspect of our operations,
                from training procedures to aircraft maintenance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We strive for excellence in everything we do, ensuring our students
                receive the highest quality training possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We embrace new technologies and methodologies to enhance the
                learning experience and prepare pilots for modern aviation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 