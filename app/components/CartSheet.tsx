// components/CartSheet.tsx

"use client"

import {
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"



type CartItem = {
  cartId: string
  id: string
  name: string
  image: string
  price: number
  qty: number
  size: string
  color: string
}


type CartSheetProps = {
  open: boolean

  cart: CartItem[]

  onClose: (
    open: boolean
  ) => void

  onUpdate: (
    cartId: string,
    qty: number
  ) => void

  onRemove: (
    cartId: string
  ) => void

  onCheckout: () => void
}



const INR = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)



export default function CartSheet({
  open,
  cart,
  onClose,
  onUpdate,
  onRemove,
  onCheckout,
}: CartSheetProps) {


  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  )



  return (

    <Sheet
      open={open}
      onOpenChange={onClose}
    >

      <SheetContent

        side="right"

        className="
          bg-[#F8F5EF]
          w-full
          sm:max-w-md
          flex
          flex-col
        "
      >


        <SheetHeader>

          <SheetTitle className="
            font-serif-display
            text-2xl
          ">
            Your Shopping Bag
          </SheetTitle>

        </SheetHeader>





        {cart.length === 0 ? (

          <div className="
            flex-1
            flex
            flex-col
            items-center
            justify-center
            text-center
          ">


            <ShoppingBag

              className="
                w-12
                h-12
                text-[#C9A227]
                mb-4
              "

              strokeWidth={1}

            />


            <p className="
              font-serif-display
              text-xl
              mb-2
            ">
              Your bag is empty
            </p>


            <p className="
              text-sm
              text-[#6b6b6b]
            ">
              Discover our latest creations
            </p>


          </div>


        ) : (


          <>


            <div className="
              flex-1
              overflow-y-auto
              -mx-6
              px-6
              mt-6
              space-y-5
            ">


              {cart.map((item) => (

                <div

                  key={item.cartId}

                  className="
                    flex
                    gap-4
                    pb-5
                    border-b
                    border-[#E5DFD2]
                  "
                >


                  <img

                    src={item.image}

                    alt={item.name}

                    className="
                      w-24
                      h-32
                      object-cover
                    "

                  />



                  <div className="flex-1">


                    <p className="
                      font-serif-display
                      text-lg
                      leading-tight
                    ">
                      {item.name}
                    </p>


                    <p className="
                      text-xs
                      text-[#6b6b6b]
                      mt-1
                    ">
                      {item.size} • {item.color}
                    </p>


                    <p className="
                      text-sm
                      font-medium
                      mt-2
                    ">
                      {INR(item.price)}
                    </p>




                    <div className="
                      flex
                      items-center
                      justify-between
                      mt-3
                    ">


                      <div className="
                        flex
                        items-center
                        border
                        border-[#E5DFD2]
                      ">


                        <button

                          onClick={() =>
                            onUpdate(
                              item.cartId,
                              Math.max(
                                1,
                                item.qty - 1
                              )
                            )
                          }

                          className="
                            w-7
                            h-7
                          "
                        >

                          <Minus className="
                            w-3
                            h-3
                            mx-auto
                          "/>


                        </button>



                        <span className="
                          w-7
                          text-center
                          text-sm
                        ">
                          {item.qty}
                        </span>



                        <button

                          onClick={() =>
                            onUpdate(
                              item.cartId,
                              item.qty + 1
                            )
                          }

                          className="
                            w-7
                            h-7
                          "
                        >

                          <Plus className="
                            w-3
                            h-3
                            mx-auto
                          "/>

                        </button>


                      </div>




                      <button

                        onClick={() =>
                          onRemove(item.cartId)
                        }

                        className="
                          text-xs
                          underline
                          text-[#6b6b6b]
                          hover:text-[#C9A227]
                        "
                      >

                        Remove

                      </button>


                    </div>


                  </div>


                </div>

              ))}


            </div>




            <div className="
              border-t
              border-[#E5DFD2]
              pt-5
              mt-4
              space-y-4
            ">


              <div className="
                flex
                justify-between
                text-sm
              ">

                <span className="text-[#6b6b6b]">
                  Subtotal
                </span>

                <span className="font-medium">
                  {INR(total)}
                </span>

              </div>




              <div className="
                flex
                justify-between
                text-sm
              ">

                <span className="text-[#6b6b6b]">
                  Shipping
                </span>


                <span className="text-[#C9A227]">
                  Complimentary
                </span>

              </div>





              <div className="
                flex
                justify-between
                text-lg
                font-serif-display
                border-t
                border-[#E5DFD2]
                pt-4
              ">

                <span>
                  Total
                </span>

                <span>
                  {INR(total)}
                </span>

              </div>





              <Button

                onClick={onCheckout}

                className="
                  w-full
                  bg-[#111]
                  hover:bg-[#C9A227]
                  text-[#F8F5EF]
                  rounded-none
                  h-12
                  text-[11px]
                  tracking-[0.3em]
                  uppercase
                "
              >

                Proceed to Checkout

              </Button>


            </div>


          </>

        )}


      </SheetContent>


    </Sheet>

  )
}