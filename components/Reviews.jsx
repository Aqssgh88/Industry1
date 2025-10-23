"use client"
import { motion } from "motion/react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Liam James",
    video: "/Shirts/review1.mp4",
  },
  {
    id: 2,
    name: "Noah Carter",
    video: "/Shirts/review2.mp4",
  },
  {
    id: 3,
    name: "Mason Blake",
    video: "/Shirts/review3.mp4",
  },
  {
    id: 3,
    name: "Ethan Cole",
    video: "/Shirts/review1.mp4",
  },
  {
    id: 5,
    name: "Logan Chase",
    video: "/Shirts/review2.mp4",
  },
  {
    id: 6,
    name: "Aiden Scott",
    video: "/Shirts/review3.mp4",
  },
]

const Reviews = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () =>
    setCurrent(current === reviews.length - 1 ? 0 : current + 1)
  const prevSlide = () =>
    setCurrent(current === 0 ? reviews.length - 1 : current - 1)

  return (
    <section
      id="reviews"
      className="w-full px-[10%] py-24 bg-gray-50 dark:bg-[#0b0b0b] relative overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h4 className="text-lg font-Ovo text-green-600 dark:text-green-400 tracking-wide">
          What Our Clients Say
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold font-Ovo text-gray-900 dark:text-white mt-2">
          Client Reviews
        </h2>
        <div className="mt-2 w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
      </div>

      {/* Video Slider */}
      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-10 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-10 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slides */}
        <motion.div
          key={reviews[current].id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl rounded-4xl overflow-hidden shadow-xl ring-1 ring-gray-200 dark:ring-gray-700"
        >
          <video
            src={reviews[current].video}
            controls
            autoPlay
            muted
            loop
            className="w-full h-[400px] md:h-[600px] object-cover"
          />
          <div className="p-4 bg-white dark:bg-[#111] text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {reviews[current].name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Verified Client
            </p>
          </div>
        </motion.div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-10 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-10 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 gap-3">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-green-600"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Reviews
