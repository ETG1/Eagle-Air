'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { CalendarIcon, ClockIcon, UserIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const instructors = [
  { id: 1, name: "Capt. John Smith", specialization: "PPL, CPL Training" },
  { id: 2, name: "Sarah Williams", specialization: "Ground School" },
  { id: 3, name: "Michael Chen", specialization: "Multi-Engine Training" },
]

const aircraftTypes = [
  { id: 1, type: "Cessna 172 Skyhawk", registration: "ZS-WCC" },
  { id: 2, type: "Piper PA-28 Cherokee", registration: "ZS-KFB" },
  { id: 3, type: "Piper PA-34 Seneca II", registration: "ZS-PJC" },
]

const flightTypes = [
  { id: 1, name: "Training Flight", description: "Regular flight training session" },
  { id: 2, name: "Check Ride", description: "License or rating examination" },
  { id: 3, name: "Solo Flight", description: "Solo flight practice" },
  { id: 4, name: "Ground Training", description: "Ground school session" },
]

type BookingFormData = {
  flightType: string;
  aircraft: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  notes: string;
}

export default function BookingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>()

  const onSubmit = async (data: BookingFormData) => {
    // Here you would typically send the data to your backend
    console.log(data)
    // Show success message
    alert('Booking submitted successfully!')
  }

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
            <h1 className="hero-heading mb-6">Book Your Flight</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Schedule your next training flight with our experienced instructors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="text-2xl font-semibold mb-6">Flight Booking Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Flight Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Flight Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {flightTypes.map((type) => (
                    <label
                      key={type.id}
                      className="relative flex cursor-pointer rounded-lg border bg-white dark:bg-gray-800 p-4 shadow-sm focus:outline-none"
                    >
                      <input
                        type="radio"
                        value={type.id}
                        {...register('flightType', { required: 'Please select a flight type' })}
                        className="sr-only"
                      />
                      <div className="flex flex-1">
                        <div className="flex flex-col">
                          <span className="block text-sm font-medium text-gray-900 dark:text-white">
                            {type.name}
                          </span>
                          <span className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                            {type.description}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`absolute -inset-px rounded-lg border-2 ${
                          errors.flightType ? 'border-red-500' : 'border-transparent'
                        }`}
                        aria-hidden="true"
                      />
                    </label>
                  ))}
                </div>
                {errors.flightType && (
                  <p className="mt-1 text-sm text-red-600">{errors.flightType.message}</p>
                )}
              </div>

              {/* Aircraft Selection */}
              <div>
                <label htmlFor="aircraft" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Select Aircraft
                </label>
                <select
                  id="aircraft"
                  {...register('aircraft', { required: 'Please select an aircraft' })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 ${
                    errors.aircraft ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <option value="">Select an aircraft</option>
                  {aircraftTypes.map((aircraft) => (
                    <option key={aircraft.id} value={aircraft.id}>
                      {aircraft.type} ({aircraft.registration})
                    </option>
                  ))}
                </select>
                {errors.aircraft && (
                  <p className="mt-1 text-sm text-red-600">{errors.aircraft.message}</p>
                )}
              </div>

              {/* Instructor Selection */}
              <div>
                <label htmlFor="instructor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Select Instructor
                </label>
                <select
                  id="instructor"
                  {...register('instructor', { required: 'Please select an instructor' })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 ${
                    errors.instructor ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <option value="">Select an instructor</option>
                  {instructors.map((instructor) => (
                    <option key={instructor.id} value={instructor.id}>
                      {instructor.name} - {instructor.specialization}
                    </option>
                  ))}
                </select>
                {errors.instructor && (
                  <p className="mt-1 text-sm text-red-600">{errors.instructor.message}</p>
                )}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    {...register('date', { required: 'Please select a date' })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 ${
                      errors.date ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    min={new Date().toISOString().split('T')[0]}
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    {...register('time', { required: 'Please select a time' })}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 ${
                      errors.time ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  />
                  {errors.time && (
                    <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                  )}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Flight Duration (hours)
                </label>
                <select
                  id="duration"
                  {...register('duration', { required: 'Please select a duration' })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 ${
                    errors.duration ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <option value="">Select duration</option>
                  <option value="1">1 hour</option>
                  <option value="1.5">1.5 hours</option>
                  <option value="2">2 hours</option>
                  <option value="2.5">2.5 hours</option>
                  <option value="3">3 hours</option>
                </select>
                {errors.duration && (
                  <p className="mt-1 text-sm text-red-600">{errors.duration.message}</p>
                )}
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  {...register('notes')}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  placeholder="Any special requirements or notes for the instructor..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full button-primary"
              >
                Book Flight
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 