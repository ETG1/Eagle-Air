"use client";
import HeroSection from '@/components/sections/HeroSection'
import CoursesOverview from '@/components/sections/CoursesOverview'
import FleetPreview from '@/components/sections/FleetPreview'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoursesOverview />
      <FleetPreview />
      <TestimonialsSection />
      </main>
  )
}
