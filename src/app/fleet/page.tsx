"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Aircraft3D from '@/components/3d/Aircraft3D'

const ThreeCanvas = dynamic(() => 
  import('@/components/3d/ThreeScene').then((mod) => mod.default), 
  { ssr: false }
)

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
    description: "Our reliable Piper Cherokee is perfect for primary flight training. Its stable flight characteristics and forgiving nature make it an excellent choice for student pilots.",
    specifications: {
      engine: "Lycoming O-360-A4A (180 HP)",
      propeller: "Sensenich 76EM8S5-0-60",
      length: "23.3 ft / 7.1 m",
      wingspan: "30 ft / 9.1 m",
      height: "7.3 ft / 2.2 m",
      seats: "4",
    },
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
    description: "The Cessna 172 Skyhawk is renowned worldwide as a premier training aircraft. Its high-wing design provides excellent visibility and stability, making it ideal for both training and recreational flying.",
    specifications: {
      engine: "Lycoming O-320-H2AD (160 HP)",
      propeller: "McCauley 1C160/DTM7557",
      length: "27.2 ft / 8.28 m",
      wingspan: "36 ft / 11 m",
      height: "8.11 ft / 2.47 m",
      seats: "4",
    },
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
    description: "The Piper Seneca II is our advanced multi-engine training aircraft. It provides students with valuable experience in multi-engine operations and is also suitable for cross-country flights.",
    specifications: {
      engine: "2x Lycoming IO-360-C1E6 (200 HP each)",
      propeller: "Hartzell HC-C2YK-2CUF/FC7666A-2",
      length: "28.7 ft / 8.7 m",
      wingspan: "38.9 ft / 11.85 m",
      height: "9.8 ft / 3 m",
      seats: "6",
    },
    image: "/images/seneca.jpg",
  },
]

export default function FleetPage() {
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
            <h1 className="hero-heading mb-6">Our Aircraft Fleet</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern and meticulously maintained aircraft equipped with the latest avionics and safety features
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {fleetData.map((aircraft, index) => (
            <motion.div
              key={aircraft.callSign}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Aircraft Image and 3D Model */}
                <div className="space-y-8">
                  <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden">
                    <Image
                      src={aircraft.image}
                      alt={aircraft.type}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className="h-64 lg:h-96 rounded-lg overflow-hidden bg-gray-900">
                    <ThreeCanvas />
                  </div>
                </div>

                {/* Aircraft Details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-semibold mb-2">{aircraft.type}</h2>
                    <p className="text-blue-600 font-medium">{aircraft.callSign}</p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400">{aircraft.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Performance</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li><span className="font-medium">Speed:</span> {aircraft.speed}</li>
                        <li><span className="font-medium">Fuel:</span> {aircraft.fuel}</li>
                        <li><span className="font-medium">Endurance:</span> {aircraft.endurance}</li>
                        <li><span className="font-medium">Weight:</span> {aircraft.weight}</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li><span className="font-medium">Engine:</span> {aircraft.specifications.engine}</li>
                        <li><span className="font-medium">Length:</span> {aircraft.specifications.length}</li>
                        <li><span className="font-medium">Wingspan:</span> {aircraft.specifications.wingspan}</li>
                        <li><span className="font-medium">Seats:</span> {aircraft.specifications.seats}</li>
                      </ul>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="button-primary"
                  >
                    Book This Aircraft
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
} 