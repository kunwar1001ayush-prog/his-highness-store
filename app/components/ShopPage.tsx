// components/ShopPage.tsx

"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import ProductCard from "./ProductCard"


type Product = {
  id: string
  name: string
  image: string
  category: string
  collection?: string
  price: number
  rating: number
}


type ShopPageProps = {
  products: Product[]
  initialCat?: string
  wishlist: string[]

  onView: (product: Product) => void
  onAdd: (product: Product) => void
  onWishlist: (product: Product) => void
}


const CATEGORIES = [
  "All",
  "Men's Collection",
  "Royal Atire",
  "Accessories",
  "Wedding",
  "Festive",
  "Luxury Essentials",
]


export default function ShopPage({
  products,
  initialCat,
  wishlist,
  onView,
  onAdd,
  onWishlist,
}: ShopPageProps) {


  const [cat, setCat] = useState(
    initialCat || "All"
  )

  const [q, setQ] = useState("")
  const [sort, setSort] = useState("")
  const [page, setPage] = useState(1)


  const perPage = 8



  const filtered = useMemo(() => {

    let items = [...products]


    if (cat !== "All") {
      items = items.filter(
        (product) =>
          product.category === cat ||
          product.collection === cat
      )
    }


    if (q) {
      items = items.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(q.toLowerCase())
      )
    }


    if (sort === "price-asc") {
      items.sort(
        (a, b) => a.price - b.price
      )
    }

    else if (sort === "price-desc") {
      items.sort(
        (a, b) => b.price - a.price
      )
    }

    else if (sort === "rating") {
      items.sort(
        (a, b) => b.rating - a.rating
      )
    }


    return items

  }, [cat, q, sort, products])



  const paged = filtered.slice(
    (page - 1) * perPage,
    page * perPage
  )


  const totalPages = Math.ceil(
    filtered.length / perPage
  )



  return (

    <div className="
      pt-12
      pb-24
    ">

      <div className="
        w-full
        mx-auto
        px-6
      ">


        {/* Header */}

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
            Maison Maharani
          </p>


          <h1 className="
            font-serif-display
            text-5xl
            md:text-7xl
            font-light
          ">
            The Collection
          </h1>


          <div className="
            w-12
            h-px
            bg-[#C9A227]
            mt-6
            mx-auto
          "/>

        </div>



        {/* Filters */}

        <div className="
          flex
          flex-col
          lg:flex-row
          gap-6
          mb-12
        ">


          <div className="
            flex
            flex-wrap
            gap-2
          ">

            {CATEGORIES.map((item) => (

              <button

                key={item}

                onClick={() => {
                  setCat(item)
                  setPage(1)
                }}

                className={`
                  px-5
                  py-2.5
                  text-[11px]
                  tracking-[0.2em]
                  uppercase
                  border
                  transition

                  ${
                    cat === item
                    ? "bg-[#111] text-[#F8F5EF] border-[#111]"
                    : "border-[#E5DFD2] hover:border-[#C9A227]"
                  }
                `}
              >
                {item}

              </button>

            ))}

          </div>




          <div className="
            flex
            gap-3
            lg:ml-auto
          ">


            <div className="relative">

              <Search className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                w-4
                h-4
                text-[#6b6b6b]
              "/>


              <Input

                placeholder="Search..."

                value={q}

                onChange={(e) =>
                  setQ(e.target.value)
                }

                className="
                  pl-9
                  h-11
                  rounded-none
                  border-[#E5DFD2]
                  focus-visible:border-[#C9A227]
                "

              />

            </div>




            <select

              value={sort}

              onChange={(e) =>
                setSort(e.target.value)
              }

              className="
                h-11
                px-4
                border
                border-[#E5DFD2]
                bg-transparent
                text-sm
                rounded-none
                outline-none
              "
            >

              <option value="">
                Sort
              </option>

              <option value="price-asc">
                Price: Low to High
              </option>

              <option value="price-desc">
                Price: High to Low
              </option>

              <option value="rating">
                Best Rated
              </option>


            </select>


          </div>


        </div>




        <p className="
          text-sm
          text-[#6b6b6b]
          mb-8
        ">
          {filtered.length} pieces
        </p>




        {/* Products */}

        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
          md:gap-10
        ">

          {paged.map((product) => (

            <ProductCard

              key={product.id}

              product={product}

              onView={onView}

              onAdd={onAdd}

              onWishlist={onWishlist}

              wishlisted={
                wishlist.includes(product.id)
              }

            />

          ))}


        </div>




        {/* Pagination */}

        {totalPages > 1 && (

          <div className="
            flex
            justify-center
            gap-2
            mt-16
          ">


            {[...Array(totalPages)].map(
              (_, i) => (

              <button

                key={i}

                onClick={() =>
                  setPage(i + 1)
                }

                className={`
                  w-10
                  h-10
                  border

                  ${
                    page === i + 1
                    ? "bg-[#111] text-[#F8F5EF] border-[#111]"
                    : "border-[#E5DFD2] hover:border-[#C9A227]"
                  }
                `}
              >
                {i + 1}

              </button>

            ))}


          </div>

        )}


      </div>

    </div>

  )
}