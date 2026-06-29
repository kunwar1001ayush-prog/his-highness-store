// components/Customization.tsx

"use client"

import { motion } from "framer-motion"
import {
  Scissors,
  Award,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import SectionHeading from "./SectionHeading"


const SERVICES = [
  {
    icon: Scissors,
    title: "Custom Outfits",
    text: "Made-to-measure pieces drafted to your silhouette and story.",
  },
  {
    icon: Award,
    title: "Personal Styling",
    text: "A dedicated atelier consultant to guide every detail.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Tailoring",
    text: "Hand-finished by masters with a lifetime craftsmanship guarantee.",
  },
]

export default function Customization() {
  return (
    <section className="py-24 md:py-32 w-full mx-auto px-6">

      <SectionHeading
        eyebrow="Bespoke"
        title="Designed Exclusively For You"
        sub="An invitation to co-create. Where your vision becomes a one-of-one heirloom."
      />


      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        mt-10
      ">

        {SERVICES.map((item, i) => {
          const Icon = item.icon

          return (
            <motion.div

              key={item.title}

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.7,
                delay: i * 0.1,
              }}

              className="
                border
                border-[#E5DFD2]
                p-10
                bg-[#F8F5EF]
                hover:border-[#C9A227]
                transition-all
                hover:shadow-2xl
              "
            >

              <Icon
                className="
                  w-8
                  h-8
                  text-[#C9A227]
                  mb-6
                "
                strokeWidth={1.2}
              />


              <h3 className="
                font-serif-display
                text-2xl
                mb-4
              ">
                {item.title}
              </h3>


              <p className="
                text-[#6b6b6b]
                leading-relaxed
                mb-6
              ">
                {item.text}
              </p>


              <button
                className="
                  text-[11px]
                  tracking-[0.25em]
                  uppercase
                  border-b
                  border-[#C9A227]
                  pb-1
                  inline-flex
                  items-center
                "
              >
                Book Consultation

                <ArrowRight
                  className="
                    ml-2
                    w-3
                    h-3
                  "
                />

              </button>


            </motion.div>
          )
        })}

      </div>

    </section>
  )
}