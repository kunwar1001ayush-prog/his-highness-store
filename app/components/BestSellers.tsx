// components/BestSellers.tsx

"use client"

import ProductCard from "./ProductCard"
import SectionHeading from "./SectionHeading"


type Product = {
  id: string
  name: string
  image: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  tag?: string
}

type BestSellersProps = {
  products: Product[]
  wishlist: string[]
  onView: (product: Product) => void
  onAdd: (product: Product) => void
  onWishlist: (product: Product) => void
}

export default function BestSellers({
  products,
  wishlist,
  onView,
  onAdd,
  onWishlist,
}: BestSellersProps) {
  return (
    <section className="py-24 md:py-32 bg-[#EFEAE0]/40">

      <div className="w-full mx-auto px-6">

        <SectionHeading
          eyebrow="Most Coveted"
          title="Bestsellers"
          sub="The pieces our patrons return to, season after season."
        />


        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
            md:gap-10
          "
        >

          {products
            .slice(0, 8)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onView={onView}
                onAdd={onAdd}
                onWishlist={onWishlist}
                wishlisted={wishlist.includes(product.id)}
              />
            ))}

        </div>

      </div>

    </section>
  )
}