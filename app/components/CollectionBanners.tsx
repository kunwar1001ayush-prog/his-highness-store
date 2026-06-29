// components/CollectionBanners.tsx

"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

type CollectionBanner = {
  title: string
  subtitle: string
  image: string
}

type CollectionBannersProps = {
  banners: CollectionBanner[]
  onShop: () => void
}

export default function CollectionBanners({
  banners,
  onShop,
}: CollectionBannersProps) {
  return (
    <section className="
      py-24
      md:py-32
      bg-[#111]
      text-[#F8F5EF]
    ">


      {/* Heading */}
      <div className="
        w-full
        mx-auto
        px-6
        mb-16
        text-center
      ">

        <p className="
          text-[11px]
          tracking-[0.35em]
          uppercase
          text-[#C9A227]
          mb-4
        ">
          The Edits
        </p>


        <h2 className="
          font-serif-display
          text-4xl
          md:text-6xl
          font-light
        ">
          Curated Worlds
        </h2>


        <div className="
          w-12
          h-px
          bg-[#C9A227]
          mt-6
          mx-auto
        " />

      </div>



      {/* Banners */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-px
        bg-[#F8F5EF]/10
      ">

        {banners.map((banner, i) => (

          <motion.button

            key={banner.title}

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.8,
              delay: i * 0.1,
            }}

            onClick={onShop}

            className="
              relative
              overflow-hidden
              aspect-[16/10]
              group
              text-left
            "
          >

            <img
              src={banner.image}
              alt={banner.title}
              className="
                w-full
                h-full
                object-cover
                opacity-80
                group-hover:opacity-100
                transition
                duration-700
                group-hover:scale-105
              "
            />


            <div className="
              absolute
              inset-0
              bg-black/30
              group-hover:bg-black/10
              transition
            "/>


            <div className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-8
            ">

              <p className="
                text-[10px]
                tracking-[0.35em]
                uppercase
                text-[#C9A227]
                mb-3
              ">
                {banner.subtitle}
              </p>


              <h3 className="
                font-serif-display
                text-4xl
                md:text-5xl
                text-[#F8F5EF]
                mb-6
              ">
                {banner.title}
              </h3>


              <span className="
                inline-flex
                items-center
                text-[11px]
                tracking-[0.25em]
                uppercase
                text-[#F8F5EF]
                border-b
                border-[#C9A227]
                pb-1
              ">
                Shop the Edit

                <ArrowRight className="
                  ml-2
                  w-3
                  h-3
                "/>

              </span>

            </div>


          </motion.button>

        ))}

      </div>


    </section>
  )
}