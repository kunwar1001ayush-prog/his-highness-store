'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Dialog,
  Input
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

import { PRODUCTS } from "@/lib/product";
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCategories from './components/FeaturedCategories'
import BestSellers from './components/BestSellers'
import BrandStory from './components/BrandStory'
import CollectionBanners from './components/CollectionBanners'
import Customization from './components/Customization'
import Newsletter from './components/Newsletter'
import ShopPage from './components/ShopPage'
import ProductDetailPage from './components/ProductDetailPage'
import CheckoutPage from './components/CheckoutPage'
import WishlistPage from './components/WishlistPage'
import Footer from './components/Footer'
import CartSheet from './components/CartSheet'
import Testimonials from './components/Testimonials'
import InstagramGallery from './components/InstagramGallery'

  const CATEGORIES = [
    { name: "Men's Collection", image: '/assets/a4.png', tagline: 'Royal silhouettes' },
    { name: "Festive", image: '/assets/a6.png', tagline: 'Timeless grace' },
    { name: 'Wedding Collection', image: '/assets/a5.png', tagline: 'For the most sacred day' },
    { name: 'Hunting Jacket', image: '/assets/a9.png', tagline: 'Celebrate in heritage' },
    { name: 'Double Breasted', image: '/assets/a12.png', tagline: 'The finishing touch' },
    { name: 'New Arrivals', image: '/assets/a29.png', tagline: 'Just unveiled' }
  ];

   const TESTIMONIALS = [
    { name: 'Anaya Kapoor', city: 'Mumbai', text: 'My bridal lehenga was beyond a dress — it was an heirloom. Every stitch told a story.', rating: 5 },
    { name: 'Vikram Singh', city: 'Jaipur', text: 'The sherwani fit like it was sculpted on me. Old-world craftsmanship, modern silhouette.', rating: 5 },
    { name: 'Priya Mehta', city: 'London', text: 'Their team turned my Pinterest dreams into reality. The customization process was a dream.', rating: 5 },
    { name: 'Arjun Reddy', city: 'Hyderabad', text: 'Impeccable tailoring, royal detailing. This is luxury done right.', rating: 5 }
  ];

   const PRODUCTS = [
    { id: 'p1', name: 'Royal Sherwani', category: "Men's Collection", collection: 'Wedding', price: 84500, originalPrice: 95000, rating: 4.9, reviews: 124, image: '/assets/a16.png', images: ['/assets/a16.png','/assets/a16.png'], description: 'A masterpiece of regal craftsmanship — hand-embroidered ivory sherwani with antique zardozi and pearl detailing. Tailored from finest raw silk.', material: 'Pure Raw Silk, Velvet Lining', care: 'Dry clean only. Store in muslin cloth.', sizes: ['38','40','42','44','46'], colors: ['Ivory','Gold','Maroon'], tag: 'Bestseller' },
    { id: 'p2', name: 'Bushcoat', category: "Men's Collection", collection: 'Festive', price: 24500, originalPrice: 28000, rating: 4.8, reviews: 89, image: '/assets/a15.png', images: ['/assets/a15.png','/assets/a15.png'], description: 'An understated statement of elegance. Cotton-silk kurta with delicate chikankari and a crepe inner.', material: 'Cotton-Silk Blend', care: 'Dry clean recommended.', sizes: ['S','M','L','XL','XXL'], colors: ['Cream','Onyx','Saffron'], tag: 'New' },
    { id: 'p3', name: 'Bandhgala', category: "Men's Collection", collection: 'Luxury Essentials', price: 38900, originalPrice: 45000, rating: 4.7, reviews: 56, image: '/assets/a10.png', images: ['/assets/a10.png','/assets/a10.png'], description: 'A sculpted Italian-cut blazer in midnight wool with grosgrain lapels. Worn solo or layered with our heritage kurta.', material: 'Italian Wool, Silk Lining', care: 'Dry clean only.', sizes: ['38','40','42','44'], colors: ['Midnight','Charcoal'], tag: 'Limited' },
    { id: 'p4', name: 'Bushcoat', category: "Men's Collection", collection: 'Luxury Essentials', price: 14500, originalPrice: 17000, rating: 4.6, reviews: 73, image: '/assets/a14.png', images: ['/assets/a14.png'], description: 'A modern silhouette woven on a centuries-old loom. Banarasi silk shirt with mother-of-pearl buttons.', material: '100% Banarasi Silk', care: 'Dry clean only.', sizes: ['S','M','L','XL'], colors: ['Champagne','Onyx','Bordeaux'], tag: '' },
    { id: 'p5', name: 'Paag', category: "Men's Collection", collection: 'Luxury Essentials', price: 32500, originalPrice: 36000, rating: 4.8, reviews: 41, image: '/assets/a18.png', images: ['/assets/a18.png'], description: 'Hand-quilted jacket inspired by Rajasthani royalty — bandhgala collar with brass buttons.', material: 'Quilted Brocade, Cotton Lining', care: 'Dry clean only.', sizes: ['38','40','42','44','46'], colors: ['Rust','Forest','Indigo'], tag: '' },
    { id: 'p6', name: 'Talwar', category: "Royal Collection", collection: 'Wedding', price: 185000, originalPrice: 210000, rating: 5.0, reviews: 67, image: '/assets/a19.png', images: ['/assets/a19.png','/assets/a19.png','/assets/a19.png'], description: 'The pinnacle of our atelier — a hand-embroidered bridal lehenga with 2,400 hours of zardozi craftsmanship.', material: 'Raw Silk, Real Zari, Glass Beads', care: 'Professional dry clean only. Store flat in muslin.', sizes: ['XS','S','M','L','XL'], colors: ['Crimson','Blush','Emerald'], tag: 'Couture' },
    { id: 'p7', name: 'Mojdi', category: "Royal Collection", collection: 'Festive', price: 56500, originalPrice: 65000, rating: 4.9, reviews: 102, image: '/assets/a21.png', images: ['/assets/a21.png','/assets/a21.png'], description: 'A floor-sweeping anarkali in georgette with intricate gota-patti work.', material: 'Georgette, Silk Lining', care: 'Dry clean only.', sizes: ['XS','S','M','L','XL'], colors: ['Sapphire','Rose','Gold'], tag: 'Bestseller' },
    { id: 'p8', name: 'Buttons', category: "Royal Collection", collection: 'Luxury Essentials', price: 42500, originalPrice: 48000, rating: 4.8, reviews: 88, image: '/assets/a22.png', images: ['/assets/a22.png'], description: 'Pure Kanjeevaram silk saree woven with real gold zari. A timeless heirloom piece.', material: 'Kanjeevaram Silk, Real Zari', care: 'Dry clean only.', sizes: ['Free Size'], colors: ['Ivory-Gold','Maroon-Gold','Teal-Gold'], tag: '' },
    { id: 'p9', name: 'Hunting Bushcoat', category: 'Accessories', collection: 'Wedding', price: 96500, originalPrice: 110000, rating: 5.0, reviews: 34, image: '/assets/a9.png', images: ['/assets/a9.png'], description: 'Heritage polki necklace and earring set, set in 22k gold-plated silver.', material: '22k Gold Plated Silver, Polki Stones', care: 'Store in velvet pouch.', sizes: ['One Size'], colors: ['Gold'], tag: 'Limited' },
    { id: 'p10', name: 'Double Breasted', category: 'Accessories', collection: 'Festive', price: 8500, originalPrice: 10000, rating: 4.7, reviews: 56, image: '/assets/a12.png', images: ['/assets/a12.png'], description: 'Hand-stitched mojari with zardozi embroidery — comfort meets tradition.', material: 'Leather, Silk Embroidery', care: 'Wipe with dry cloth.', sizes: ['UK 6','UK 7','UK 8','UK 9','UK 10'], colors: ['Maroon','Gold','Black'], tag: '' },
    { id: 'p11', name: 'Jodhpuri Suit', category: 'Accessories', collection: 'Festive', price: 12500, originalPrice: 15000, rating: 4.8, reviews: 42, image: '/assets/a26.png', images: ['/assets/a26.png'], description: 'A statement evening clutch hand-embroidered with antique zardozi.', material: 'Silk, Antique Zardozi', care: 'Handle with care.', sizes: ['One Size'], colors: ['Gold','Silver','Bronze'], tag: 'New' },
    { id: 'p12', name: 'Hunting Jodhpuri', category: "Women's Collection", collection: 'Wedding', price: 225000, originalPrice: 265000, rating: 4.9, reviews: 28, image: '/assets/a30.png', images: ['/assets/a30.png'], description: 'Emerald velvet lehenga with real-zari and crystal embroidery. Made-to-measure couture.', material: 'Velvet, Real Zari, Crystals', care: 'Dry clean only.', sizes: ['XS','S','M','L','XL'], colors: ['Emerald','Ruby','Sapphire'], tag: 'Couture' }
  ];

   const INSTAGRAM_GALLERY = [
    '/assets/a1.png',
    '/assets/a7.png',
    '/assets/a3.png',
    '/assets/a8.png',
    '/assets/a27.png',
    '/assets/a32.jpg',
    '/assets/a10.png',
    '/assets/a16.png'
  ];

   const COLLECTION_BANNERS = [
    { title: 'The Wedding Edit', subtitle: 'Heirlooms in the making', image: '/assets/a24.png' },
    { title: 'Festive Collection', subtitle: 'Light. Lustre. Legacy.', image: '/assets/a13.png' },
    { title: 'Luxury Essentials', subtitle: 'Timeless silhouettes', image: '/assets/a25.png' },
    { title: 'Limited Edition', subtitle: 'Numbered & signed', image: '/assets/a26.png' }
  ];

const INR = (n:number) =>
  '₹' + n.toLocaleString('en-IN')


export default function Page() {

  const [view,setView] = useState<
    | 'home'
    | 'shop'
    | 'product'
    | 'checkout'
    | 'wishlist'
    | 'customization'
    | 'thanks'
  >('home')


  const [activeProduct,setActiveProduct] = useState<any>(null)

  const [initialCat,setInitialCat] = useState<string | null>(null)


  const [cart,setCart] = useState<any[]>([])
  const [wishlist,setWishlist] = useState<number[]>([])

  const [cartOpen,setCartOpen] = useState(false)

  const [searchOpen,setSearchOpen] = useState(false)
  const [searchQ,setSearchQ] = useState('')

  const [orderConfirm,setOrderConfirm] = useState<any>(null)

 



  useEffect(()=>{

    const c =
      JSON.parse(
        localStorage.getItem('cart') || '[]'
      )

    const w =
      JSON.parse(
        localStorage.getItem('wishlist') || '[]'
      )


    setCart(c)
    setWishlist(w)

  },[])



  useEffect(()=>{

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    )

  },[cart])


  useEffect(()=>{

    localStorage.setItem(
      'wishlist',
      JSON.stringify(wishlist)
    )

  },[wishlist])



  useEffect(()=>{

    window.scrollTo({
      top:0,
      behavior:'smooth'
    })

  },[view])




  function addToCart(
    product:any,
    qty=1,
    size?:string,
    color?:string
  ){

    const s =
      size || product.sizes[0]

    const c =
      color || product.colors[0]


    const cartId =
      `${product.id}-${s}-${c}`


    setCart(prev=>{

      const exist =
        prev.find(
          x=>x.cartId===cartId
        )


      if(exist){

        return prev.map(x=>
          x.cartId===cartId
          ?
          {
            ...x,
            qty:x.qty+qty
          }
          :
          x
        )

      }
      return [
        ...prev,
        {
          cartId,
          id:product.id,
          name:product.name,
          image:product.image,
          price:product.price,
          qty,
          size:s,
          color:c
        }
      ]

    })

  }





  function toggleWishlist(product:any){

    setWishlist(prev=>{

      if(prev.includes(product.id)){

        return prev.filter(
          id=>id!==product.id
        )

      }


      return [
        ...prev,
        product.id
      ]

    })

  }





  async function placeOrder(data:any){

    try{

      const res =
        await fetch(
          '/api/orders',
          {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:
              JSON.stringify(data)
          }
        )


      const json =
        await res.json()


      setOrderConfirm(
        json.order
      )

    }

    catch{

      setOrderConfirm({
        id:'demo-'+Date.now()
      })

    }


    setCart([])

    setView('thanks')

  }





  return (

    <div className="
      min-h-screen
      bg-[#F8F5EF]
      
      text-[#111]
    ">


      <Header

        onNav={(v:any)=>
          setView(v)
        }

        cartCount={
          cart.reduce(
            (s,i)=>s+i.qty,
            0
          )
        }

        wishlistCount={
          wishlist.length
        }

        onCartOpen={()=>
          setCartOpen(true)
        }

        onSearchOpen={()=>
          setSearchOpen(true)
        }

      />



      <AnimatePresence mode="wait">


      <motion.main

        key={view}

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        exit={{
          opacity:0
        }}

      >


      {
      view==='home' &&

      <>

      <Hero
        onShop={()=>
          setView('shop')
        }
      />


      <FeaturedCategories
       categories={CATEGORIES}

        onCategory={(c:string)=>{

          setInitialCat(c)

          setView('shop')

        }}

      />


      <BestSellers

        products={PRODUCTS}

        onView={(p:any)=>{
          setActiveProduct(p)
          setView('product')
        }}

        onAdd={addToCart}

        onWishlist={toggleWishlist}

        wishlist={wishlist}

      />


      <BrandStory/>

      <CollectionBanners
       banners={COLLECTION_BANNERS}
        onShop={()=>
          setView('shop')
        }
      />


      <Customization/>

      <InstagramGallery images={INSTAGRAM_GALLERY}/>

      <Testimonials testimonials={TESTIMONIALS}/>

      <Newsletter/>

      </>

      }



      {
      view==='shop' &&

      <ShopPage
        products={PRODUCTS}

        initialCat={initialCat}

        onView={(p:any)=>{

          setActiveProduct(p)

          setView('product')

        }}

        onAdd={addToCart}

        onWishlist={toggleWishlist}

        wishlist={wishlist}

      />

      }




      {
      view==='product' &&
      activeProduct &&

      <ProductDetailPage

        product={activeProduct}

        onAdd={addToCart}

        onBuy={(p:any,q:number,s:string,c:string)=>{

          addToCart(p,q,s,c)

          setView('checkout')

        }}

        onWishlist={toggleWishlist}

        wishlist={wishlist}

        onBack={()=>
          setView('shop')
        }

      />

      }





      {
      view==='checkout' &&

      <CheckoutPage

        cart={cart}

        onPlace={placeOrder}

        onBack={()=>
          setView('shop')
        }

      />

      }




      {
      view==='wishlist' &&

      <WishlistPage

        wishlist={wishlist}

        onView={(p:any)=>{

          setActiveProduct(p)

          setView('product')

        }}

        onAdd={addToCart}

        onWishlist={toggleWishlist}

      />

      }





      {
      view==='customization' &&
      <Customization/>
      }



      {
      view==='thanks' &&


      <section className="
        py-24
        text-center
      ">


      <h1 className="
        font-serif-display
        text-5xl
      ">

      Order placed

      </h1>


      <p className="mt-5">

      Order ID:
      {' '}
      {orderConfirm?.id}

      </p>


      <Button

      className="
      mt-10
      bg-[#111]
      text-white
      "

      onClick={()=>
        setView('home')
      }

      >

      Continue Shopping

      </Button>


      </section>


      }


      </motion.main>


      </AnimatePresence>





      <Footer/>




      <CartSheet

        open={cartOpen}

        onClose={setCartOpen}

        cart={cart}

        onUpdate={(id:string,qty:number)=>

          setCart(prev=>
            prev.map(i=>
              i.cartId===id
              ?
              {...i,qty}
              :
              i
            )
          )

        }

        onRemove={(id:string)=>

          setCart(prev=>
            prev.filter(
              i=>i.cartId!==id
            )
          )

        }


        onCheckout={()=>{

          setCartOpen(false)

          setView('checkout')

        }}

      />



    </div>

  )

}