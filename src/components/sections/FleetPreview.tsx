import { motion } from 'framer-motion'
import Image from 'next/image'

const fleetData = [
  {
    callSign: "ZS-KFB",
    type: "Piper PA-28-180 Cherokee D",
    year: "1976",
    weight: "2558 lb / 1160 kg",
    speed: "140mph / 122kt",
    fuel: "48 Gallons / 182 Liters",
    endurance: "+/- 5 hours",
    category: "Training Aircraft",
    image: "/images/piper-cherokee.jpg",
  },
  {
    callSign: "ZS-WCC",
    type: "Cessna 172 Skyhawk",
    year: "1982",
    weight: "2300 lb / 1043 kg",
    speed: "122mph / 106kt",
    fuel: "42 Gallons / 159 Liters",
    endurance: "+/- 4.5 hours",
    category: "Training Aircraft",
    image: "/images/cessna-172.jpg",
  },
  {
    callSign: "ZS-PJC",
    type: "Piper PA-34 Seneca II",
    year: "1978",
    weight: "4570 lb / 2073 kg",
    speed: "200mph / 174kt",
    fuel: "98 Gallons / 371 Liters",
    endurance: "+/- 5 hours",
    category: "Multi-Engine",
    image: "/images/seneca.jpg",
  },
]

export default function FleetPreview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Our Fleet</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Modern and well-maintained aircraft for all your training needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((aircraft, index) => (
            <motion.div
              key={aircraft.callSign}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={aircraft.image}
                  alt={aircraft.type}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">{aircraft.type}</h3>
                  <span className="text-sm text-blue-600 font-medium">{aircraft.callSign}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{aircraft.category}</p>
                <div className="pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Year:</span>
                    <span>{aircraft.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Speed:</span>
                    <span>{aircraft.speed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Endurance:</span>
                    <span>{aircraft.endurance}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full button-primary"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 