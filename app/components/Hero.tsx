// components/Hero.tsx

"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type HeroProps = {
  onShop: () => void
}

export default function Hero({ onShop }: HeroProps) {
  return (
    <section className="relative w-full h-[92vh] min-h-[640px] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/a32.png"
          alt="Atelier Maharani collection"
          className="w-full h-full object-cover"
        />

        <div className="
          absolute inset-0
          bg-gradient-to-r
          from-black/70
          via-black/40
          to-black/30
        " />
      </div>


      {/* Content */}
      <div className="
        relative
        h-full
        
        mx-auto
        px-6
        flex
        items-center
      ">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl text-[#F8F5EF]"
        >

          <p className="
            text-[11px]
            tracking-[0.4em]
            uppercase
            text-[#C9A227]
            mb-6
          ">
            His Highness Store — Est. 2018
          </p>


          <h1 className="
            font-serif-display
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-light
            leading-[1.05]
            tracking-tight
          ">
            Where Heritage
            <br />

            <span className="italic font-extralight">
              Meets Modern
            </span>

            <br />

            Luxury
          </h1>


          <p className="
            mt-8
            text-lg
            md:text-xl
            text-[#F8F5EF]/85
            max-w-xl
            font-light
          ">
            Crafted for those who appreciate timeless elegance.
            Every garment, an heirloom in the making.
          </p>


          <div className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
          ">

            <Button
              onClick={onShop}
              className="
                bg-[#C9A227]
                hover:bg-[#a8861e]
                text-[#111]
                rounded-none
                px-10
                h-14
                text-[11px]
                tracking-[0.3em]
                uppercase
                font-medium
              "
            >
              Shop Collection

              <ArrowRight className="
                ml-3
                w-4
                h-4
              " />

            </Button>


            <Button
              onClick={onShop}
              variant="outline"
              className="
                border-[#F8F5EF]
                bg-transparent
                text-[#F8F5EF]
                hover:bg-[#F8F5EF]
                hover:text-[#111]
                rounded-none
                px-10
                h-14
                text-[11px]
                tracking-[0.3em]
                uppercase
                font-medium
              "
            >
              Explore New Arrivals

            </Button>

          </div>

        </motion.div>

      </div>


      {/* Scroll indicator */}
      <div className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        gap-3
        text-[#F8F5EF]/70
      ">

        <span className="
          text-[10px]
          tracking-[0.3em]
          uppercase
        ">
          Scroll
        </span>


        <div className="
          w-px
          h-12
          bg-[#F8F5EF]/40
          relative
          overflow-hidden
        ">

          <motion.div
            animate={{
              y: [-48, 48],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-x-0
              h-6
              bg-[#C9A227]
            "
          />

        </div>

      </div>

    </section>
  )
}