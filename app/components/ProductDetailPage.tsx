// components/ProductDetailPage.tsx

"use client"

import { useState } from "react"
import {
  ChevronLeft,
  Star,
  Heart,
  Minus,
  Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"


type Product = {
  id: string
  name: string
  category: string
  images: string[]
  rating: number
  reviews: number
  price: number
  originalPrice?: number
  description: string
  sizes: string[]
  colors: string[]
  material: string
  care: string
}


type ProductDetailPageProps = {
  product: Product

  wishlist: string[]

  onAdd: (
    product: Product,
    qty: number,
    size: string,
    color: string
  ) => void

  onBuy: (
    product: Product,
    qty: number,
    size: string,
    color: string
  ) => void

  onWishlist: (
    product: Product
  ) => void

  onBack: () => void
}


const INR = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)



export default function ProductDetailPage({
  product,
  wishlist,
  onAdd,
  onBuy,
  onWishlist,
  onBack,
}: ProductDetailPageProps) {


  const [imgIdx, setImgIdx] = useState(0)

  const [size, setSize] = useState(
    product.sizes[0]
  )

  const [color, setColor] = useState(
    product.colors[0]
  )

  const [qty, setQty] = useState(1)



  return (

    <div className="
      pt-8
      pb-24
      w-full
      mx-auto
      px-6
    ">


      <button

        onClick={onBack}

        className="
          text-[11px]
          tracking-[0.25em]
          uppercase
          text-[#6b6b6b]
          hover:text-[#C9A227]
          mb-8
          inline-flex
          items-center
        "
      >

        <ChevronLeft className="w-3 h-3 mr-1" />

        Back to Shop

      </button>




      <div className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        lg:gap-20
      ">


        {/* Images */}

        <div>


          <div className="
            aspect-[3/4]
            overflow-hidden
            bg-[#EFEAE0]
            mb-4
          ">

            <img

              src={product.images[imgIdx]}

              alt={product.name}

              className="
                w-full
                h-full
                object-cover
              "

            />

          </div>



          <div className="
            grid
            grid-cols-4
            gap-3
          ">


            {product.images.map(
              (image, i) => (

              <button

                key={image}

                onClick={() =>
                  setImgIdx(i)
                }

                className={`
                  aspect-square
                  overflow-hidden
                  border-2
                  transition

                  ${
                    imgIdx === i
                    ? "border-[#C9A227]"
                    : "border-transparent"
                  }
                `}
              >

                <img

                  src={image}

                  alt=""

                  className="
                    w-full
                    h-full
                    object-cover
                  "

                />

              </button>

            ))}


          </div>


        </div>





        {/* Details */}

        <div className="lg:pt-8">


          <p className="
            text-[11px]
            tracking-[0.35em]
            uppercase
            text-[#C9A227]
            mb-3
          ">
            {product.category}
          </p>



          <h1 className="
            font-serif-display
            text-4xl
            md:text-5xl
            font-light
            mb-4
          ">
            {product.name}
          </h1>




          <div className="
            flex
            items-center
            gap-2
            mb-6
          ">


            {[...Array(5)].map((_, i) => (

              <Star

                key={i}

                className={`
                  w-4
                  h-4

                  ${
                    i < Math.floor(product.rating)
                    ? "fill-[#C9A227] text-[#C9A227]"
                    : "text-gray-300"
                  }
                `}

              />

            ))}


            <span className="
              text-sm
              text-[#6b6b6b]
              ml-2
            ">
              {product.rating} • {product.reviews} reviews
            </span>


          </div>




          <div className="
            flex
            items-baseline
            gap-4
            mb-8
          ">

            <span className="text-3xl font-light">
              {INR(product.price)}
            </span>


            {product.originalPrice &&
              product.originalPrice > product.price && (

              <span className="
                text-lg
                text-[#6b6b6b]
                line-through
              ">
                {INR(product.originalPrice)}
              </span>

            )}


          </div>




          <p className="
            text-[#3a3a3a]
            leading-relaxed
            mb-8
          ">
            {product.description}
          </p>




          {/* Size */}

          <OptionGroup title="Size">

            {product.sizes.map((item) => (

              <button

                key={item}

                onClick={() =>
                  setSize(item)
                }

                className={`
                  min-w-[48px]
                  h-12
                  px-4
                  border
                  text-sm

                  ${
                    size === item
                    ? "bg-[#111] text-[#F8F5EF] border-[#111]"
                    : "border-[#E5DFD2]"
                  }
                `}
              >

                {item}

              </button>

            ))}

          </OptionGroup>





          {/* Color */}

          <OptionGroup
            title={`Color: ${color}`}
          >

            {product.colors.map((item) => (

              <button

                key={item}

                onClick={() =>
                  setColor(item)
                }

                className={`
                  px-4
                  h-10
                  border
                  text-xs

                  ${
                    color === item
                    ? "border-[#C9A227] bg-[#C9A227]/10"
                    : "border-[#E5DFD2]"
                  }
                `}
              >

                {item}

              </button>

            ))}

          </OptionGroup>





          {/* Quantity */}

          <OptionGroup title="Quantity">

            <div className="
              flex
              items-center
              border
              border-[#E5DFD2]
              w-fit
            ">

              <button

                onClick={() =>
                  setQty(
                    Math.max(1, qty - 1)
                  )
                }

                className="w-10 h-10"
              >

                <Minus className="w-3 h-3 mx-auto" />

              </button>


              <span className="w-10 text-center">
                {qty}
              </span>


              <button

                onClick={() =>
                  setQty(qty + 1)
                }

                className="w-10 h-10"
              >

                <Plus className="w-3 h-3 mx-auto" />

              </button>


            </div>


          </OptionGroup>





          {/* Actions */}

          <div className="
            flex
            flex-col
            sm:flex-row
            gap-3
            mb-10
          ">


            <Button
              onClick={() =>
                onAdd(
                  product,
                  qty,
                  size,
                  color
                )
              }

              className="
                flex-1
                bg-[#111]
                text-[#F8F5EF]
                rounded-none
                h-14
              "
            >
              Add to Bag
            </Button>



            <Button

              onClick={() =>
                onBuy(
                  product,
                  qty,
                  size,
                  color
                )
              }

              className="
                flex-1
                bg-[#C9A227]
                text-[#111]
                rounded-none
                h-14
              "
            >

              Buy Now

            </Button>




            <Button

              onClick={() =>
                onWishlist(product)
              }

              variant="outline"

              className="
                h-14
                px-5
                rounded-none
              "
            >

              <Heart

                className={`
                  w-4
                  h-4

                  ${
                    wishlist.includes(product.id)
                    ? "fill-[#C9A227] text-[#C9A227]"
                    : ""
                  }
                `}

              />

            </Button>


          </div>


        </div>


      </div>


    </div>

  )
}



function OptionGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {

  return (

    <div className="mb-6">

      <p className="
        text-[11px]
        tracking-[0.25em]
        uppercase
        mb-3
      ">
        {title}
      </p>


      <div className="
        flex
        flex-wrap
        gap-2
      ">
        {children}
      </div>


    </div>

  )
}