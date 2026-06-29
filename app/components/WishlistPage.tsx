// components/WishlistPage.tsx

"use client"

import { PRODUCTS } from "@/lib/product";
import ProductCard from "./ProductCard"



type WishlistPageProps = {

  wishlist: string[]

  onView: (
    product: Product
  ) => void

  onAdd: (
    product: Product
  ) => void

  onWishlist: (
    product: Product
  ) => void

}



type Product = {

  id: string

  name: string

  image: string

  category: string

  price: number

  originalPrice?: number

  rating: number

  reviews: number

}



export default function WishlistPage({

  wishlist,

  onView,

  onAdd,

  onWishlist

}: WishlistPageProps){



  const items =
    PRODUCTS.filter(
      product =>
        wishlist.includes(product.id)
    )



  return (

    <div className="
      pt-12
      pb-24
      w-full
      mx-auto
      px-6
    ">


      <div className="
        text-center
        mb-16
      ">


        <p className="
          text-[11px]
          tracking-[0.35em]
          uppercase
          text-[#C9A227]
          mb-4
        ">
          Saved Treasures
        </p>



        <h1 className="
          font-serif-display
          text-5xl
          md:text-6xl
          font-light
        ">
          Your Wishlist
        </h1>



        <div className="
          w-12
          h-px
          bg-[#C9A227]
          mt-6
          mx-auto
        "/>


      </div>





      {
        items.length === 0 ? (

          <p className="
            text-center
            text-[#6b6b6b]
          ">
            Your wishlist awaits. Begin by saving pieces that speak to you.
          </p>


        ) : (


          <div className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
            md:gap-10
          ">


            {
              items.map(product => (

                <ProductCard

                  key={product.id}

                  product={product}

                  onView={onView}

                  onAdd={onAdd}

                  onWishlist={onWishlist}

                  wishlisted={true}

                />


              ))
            }


          </div>


        )
      }


    </div>

  )

}