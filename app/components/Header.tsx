// components/Header.tsx

"use client"

import { useEffect, useState } from "react"
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const NAV = [
  "Home",
  "Shop",
  "Collections",
  "New Arrivals",
  "Customization",
]

type HeaderProps = {
  onNav: (page: string) => void
  cartCount: number
  wishlistCount: number
  onCartOpen: () => void
  onSearchOpen: () => void
}

export default function Header({
  onNav,
  cartCount,
  wishlistCount,
  onCartOpen,
  onSearchOpen,
}: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavigation = (item: string) => {
    if (
      item === "Shop" ||
      item === "Collections" ||
      item === "New Arrivals"
    ) {
      onNav("shop")
    } else if (item === "Customization") {
      onNav("customization")
    } else {
      onNav("home")
    }
  }

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#111] text-[#F8F5EF] text-[11px] tracking-[0.25em] uppercase overflow-hidden w-full">
  <div className="flex whitespace-nowrap animate-marquee py-2.5 w-max">
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex shrink-0">
        {[
          "Premium Craftsmanship",
          "Timeless Style",
          "Worldwide Delivery",
          "Bespoke Tailoring",
          "Heritage Since 2018",
        ].map((text, j) => (
          <span
            key={j}
            className="mx-8 flex items-center gap-8 shrink-0"
          >
            <span>{text}</span>
            <span className="text-[#C9A227]">✦</span>
          </span>
        ))}
      </div>
    ))}
  </div>
</div>


      {/* Header */}
      <header
        className={`
          sticky top-0 z-40 transition-all duration-500
          ${
            scrolled
              ? "bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#E5DFD2]"
              : "bg-transparent"
          }
        `}
      >
        <div className="w-full mx-auto px-6 py-5 flex items-center justify-between">

          <button
            onClick={() => onNav("home")}
            className="flex items-center gap-2"
          >
            <span className="font-serif-display text-2xl md:text-3xl">
              HIS HIGHNESS 
            </span>

            <span className="text-[#C9A227] text-2xl">
              ✦
            </span>

            <span className="font-serif-display text-2xl md:text-3xl italic font-light">
              
            </span>
          </button>


          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="
                  text-[11px]
                  tracking-[0.25em]
                  uppercase
                  text-[#111]
                  hover:text-[#C9A227]
                  transition-colors
                "
              >
                {item}
              </button>
            ))}
          </nav>


          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-3">

            {/* <button
              onClick={onSearchOpen}
              className="p-2 hover:text-[#C9A227]"
            >
              <Search className="w-4 h-4" />
            </button> */}


            <button
              className="p-2 hover:text-[#C9A227] hidden md:block"
            >
              <User className="w-4 h-4" />
            </button>


            <button
              onClick={() => onNav("wishlist")}
              className="p-2 relative hover:text-[#C9A227]"
            >
              <Heart className="w-4 h-4" />

              {wishlistCount > 0 && (
                <span className="
                  absolute -top-0.5 -right-0.5
                  bg-[#C9A227]
                  text-white
                  text-[9px]
                  w-4 h-4
                  rounded-full
                  flex items-center justify-center
                ">
                  {wishlistCount}
                </span>
              )}
            </button>


            <button
              onClick={onCartOpen}
              className="p-2 relative hover:text-[#C9A227]"
            >
              <ShoppingBag className="w-4 h-4" />

              {cartCount > 0 && (
                <span className="
                  absolute -top-0.5 -right-0.5
                  bg-[#C9A227]
                  text-white
                  text-[9px]
                  w-4 h-4
                  rounded-full
                  flex items-center justify-center
                ">
                  {cartCount}
                </span>
              )}
            </button>


            <button
              onClick={() => setOpen(true)}
              className="p-2 lg:hidden"
            >
              <Menu className="w-4 h-4" />
            </button>

          </div>
        </div>
      </header>


      {/* Mobile Menu */}
      {/* Mobile Menu */}
<Sheet open={open} onOpenChange={setOpen}>
  <SheetContent
    side="right"
    className="bg-[#F8F5EF] w-4/5 max-w-sm sm:w-[350px] p-6 text-[#1A1A1A] border-l border-[#E5DFD2]"
  >
    <SheetHeader className="text-left">
      <SheetTitle className="font-serif-display text-2xl tracking-wide text-stone-900">
        Menu
      </SheetTitle>
    </SheetHeader>

    <div className="mt-8 flex flex-col gap-5 h-[calc(100vh-80px)] overflow-y-auto pr-2">
      {NAV.map((item) => (
        <button
          key={item}
          onClick={() => {
            setOpen(false);
            handleNavigation(item);
          }}
          className="
            text-left
            text-sm
            tracking-[0.2em]
            uppercase
            border-b
            border-[#E5DFD2]
            pb-4
            text-stone-700
            hover:text-stone-900
            transition-colors
            focus:outline-none
          "
        >
          {item}
        </button>
      ))}
    </div>
  </SheetContent>
</Sheet>

    </>
  )
}