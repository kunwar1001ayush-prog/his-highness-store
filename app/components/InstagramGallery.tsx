// components/InstagramGallery.tsx

"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import SectionHeading from "./SectionHeading"


type InstagramGalleryProps = {
  images: string[]
}

export default function InstagramGallery({
  images,
}: InstagramGalleryProps) {
  return (
    <section className="
      py-24
      md:py-32
      bg-[#EFEAE0]/40
    ">

      <div className="
        w-full
        mx-auto
        px-6
      ">

        <SectionHeading
          eyebrow="@HHS"
          title="The HHS"
          sub="Follow our journey on Instagram"
        />


        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-2
          md:gap-3
        ">

          {images.map((image, i) => (

            <motion.a

              key={i}

              href="#"

              initial={{
                opacity: 0,
                scale: 0.9,
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
                delay: i * 0.05,
              }}

              className="
                rounded-4xl relative
                aspect-square
                overflow-hidden
                group
              "
            >

              <img
                src={image}
                alt="Maharani Atelier Instagram"
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />


              <div className="
                absolute
                inset-0
                bg-black/0
                group-hover:bg-black/40
                transition
                flex
                items-center
                justify-center
              ">

                <Instagram
                  className="
                    w-6
                    h-6
                    text-[#F8F5EF]
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />

              </div>


            </motion.a>

          ))}

        </div>


      </div>

    </section>
  )
}