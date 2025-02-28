"use client";
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'


const ThreeCanvas = dynamic(
  () =>
    import('@/components/3d/ThreeScene').then((mod) => mod.default),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <ThreeCanvas />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1 
          className="hero-heading text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Journey to the Skies Begins Here
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-200 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience world-class aviation training with state-of-the-art aircraft and expert instructors
        </motion.p>
        
        <motion.div 
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="/courses" className="button-primary">
            Explore Our Courses
          </a>
          <a href="/contact" className="button-secondary">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
} 