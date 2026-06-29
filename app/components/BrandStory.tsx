// components/BrandStory.tsx

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function BrandStory() {
  return (
    <section className="py-24 md:py-32 w-full mx-auto px-6">

      <div className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        lg:gap-20
        items-center
      ">


        {/* Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="
            relative
            rounded-4xl
            aspect-[4/5]
            overflow-hidden
          "
        >

          <img
            src="/assets/a31.png"
            alt="His Highness heritage craftsmanship"
            className="
              w-full
              h-full
              object-cover
            "
          />


          <div className="
            absolute
            bottom-8
            left-8
            bg-[#F8F5EF]
            px-6
            py-4
          ">

            <p className="
              font-serif-display
              text-3xl
              text-[#C9A227]
            ">
              78
            </p>


            <p className="
              text-[10px]
              tracking-[0.25em]
              uppercase
            ">
              Years of Craft
            </p>

          </div>

        </motion.div>



        {/* Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
        >

          <p className="
            text-[11px]
            tracking-[0.35em]
            uppercase
            text-[#C9A227]
            mb-5
          ">
            Our Story
          </p>


          <h2 className="
            font-serif-display
            text-4xl
            md:text-6xl
            font-light
            leading-[1.05]
            mb-8
          ">
            Our Heritage,
            <br />

            <span className="italic">
              Our Craft
            </span>

          </h2>


          <div className="
            w-12
            h-px
            bg-[#C9A227]
            mb-8
          " />


          <p className="
            text-[#3a3a3a]
            leading-relaxed
            mb-5
            text-lg
          ">
            Every creation from His Highness reflects craftsmanship,
            tradition, and modern elegance — a quiet dialogue between
            centuries-old technique and the spirit of today.
          </p>


          <p className="
            text-[#6b6b6b]
            leading-relaxed
            mb-8
          ">
            From our karkhana in Jaipur, master artisans hand-embroider
            each garment with techniques passed through generations.
            We do not chase trends; we preserve treasures.
          </p>


          <Button
            className="
              bg-[#111]
              hover:bg-[#C9A227]
              text-[#F8F5EF]
              rounded-none
              px-10
              h-12
              text-[11px]
              tracking-[0.3em]
              uppercase
            "
          >
            Discover Our Atelier
          </Button>

        </motion.div>

      </div>

    </section>
  )
}