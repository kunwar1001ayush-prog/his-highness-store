// components/ProductCard.tsx

"use client"

import { motion } from "framer-motion"
import { Heart, Eye, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

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

type ProductCardProps = {
  product: Product
  onView: (product: Product) => void
  onAdd: (product: Product) => void
  onWishlist: (product: Product) => void
  wishlisted: boolean
}

const INR = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)

export default function ProductCard({
  product,
  onView,
  onAdd,
  onWishlist,
  wishlisted,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div
        className="rounded-4xl relative overflow-hidden bg-[#EFEAE0] aspect-[3/4] cursor-pointer"
        onClick={() => onView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {product.tag && (
          <span className="absolute top-4 left-4 bg-[#111] text-[#F8F5EF] text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
            {product.tag}
          </span>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation()
            onWishlist(product)
          }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition"
        >
          <Heart
            className={`w-4 h-4 ${
              wishlisted
                ? "fill-[#C9A227] text-[#C9A227]"
                : "text-[#111]"
            }`}
          />
        </button>

        <div className="absolute inset-x-0 bottom-0 p-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
          <Button
            onClick={(e) => {
              e.stopPropagation()
              onView(product)
            }}
            variant="outline"
            size="sm"
            className="flex-1 bg-white/95 border-0 text-[#111] hover:bg-white rounded-none text-[11px] tracking-widest uppercase"
          >
            <Eye className="w-3.5 h-3.5 mr-1.5" />
            Quick View
          </Button>

          <Button
            onClick={(e) => {
              e.stopPropagation()
              onAdd(product)
            }}
            size="sm"
            className="flex-1 bg-[#111] hover:bg-[#C9A227] text-[#F8F5EF] rounded-none text-[11px] tracking-widest uppercase"
          >
            Add to Bag
          </Button>
        </div>
      </div>

      <div className="pt-5 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] mb-1.5">
          {product.category}
        </p>

        <h3 className="font-serif-display text-lg text-[#111] mb-1.5">
          {product.name}
        </h3>

        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? "fill-[#C9A227] text-[#C9A227]"
                  : "text-gray-300"
              }`}
            />
          ))}

          <span className="text-xs text-[#6b6b6b] ml-1">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="font-medium text-[#111]">
            {INR(product.price)}
          </span>

          {product.originalPrice &&
            product.originalPrice > product.price && (
              <span className="text-sm text-[#6b6b6b] line-through">
                {INR(product.originalPrice)}
              </span>
            )}
        </div>
      </div>
    </motion.div>
  )
}