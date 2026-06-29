// components/Testimonials.tsx

"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import SectionHeading from "./SectionHeading"


type Testimonial = {
  text: string
  name: string
  city: string
}

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export default function Testimonials({
  testimonials,
}: TestimonialsProps) {
  const [idx, setIdx] = useState(0)

  const current = testimonials[idx]

  return (
    <section className="
      py-24
      md:py-32
      w-full
      mx-auto
      px-6
    ">

      <SectionHeading
        eyebrow="In Their Words"
        title="Patron Stories"
      />


      <div className="
        max-w-3xl
        mx-auto
        text-center
      ">

        <AnimatePresence mode="wait">

          <motion.div

            key={idx}

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            transition={{
              duration: 0.6,
            }}

          >

            {/* Rating */}
            <div className="
              flex
              justify-center
              gap-1
              mb-6
            ">

              {[...Array(5)].map((_, i) => (

                <Star
                  key={i}
                  className="
                    w-4
                    h-4
                    fill-[#C9A227]
                    text-[#C9A227]
                  "
                />

              ))}

            </div>



            {/* Quote */}
            <p className="
              font-serif-display
              text-2xl
              md:text-3xl
              italic
              font-light
              leading-relaxed
              text-[#111]
              mb-8
            ">
              “{current.text}”
            </p>



            <p className="
              font-medium
              tracking-wide
            ">
              {current.name}
            </p>


            <p className="
              text-[11px]
              tracking-[0.25em]
              uppercase
              text-[#C9A227]
              mt-1
            ">
              {current.city}
            </p>


          </motion.div>

        </AnimatePresence>



        {/* Controls */}
        <div className="
          flex
          justify-center
          gap-3
          mt-12
        ">

          <button

            onClick={() =>
              setIdx(
                (idx - 1 + testimonials.length) %
                testimonials.length
              )
            }

            className="
              w-12
              h-12
              border
              border-[#C9A227]
              flex
              items-center
              justify-center
              hover:bg-[#C9A227]
              hover:text-white
              transition
            "
          >

            <ChevronLeft className="w-4 h-4" />

          </button>



          <button

            onClick={() =>
              setIdx(
                (idx + 1) %
                testimonials.length
              )
            }

            className="
              w-12
              h-12
              border
              border-[#C9A227]
              flex
              items-center
              justify-center
              hover:bg-[#C9A227]
              hover:text-white
              transition
            "
          >

            <ChevronRight className="w-4 h-4" />

          </button>


        </div>


      </div>

    </section>
  )
}