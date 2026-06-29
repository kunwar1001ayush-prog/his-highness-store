// components/CheckoutPage.tsx

"use client"

import { useState } from "react"
import { ShieldCheck } from "lucide-react"

import {
  Input
} from "@/components/ui/input"

import {
  Button
} from "@/components/ui/button"



type CartItem = {
  cartId: string
  name: string
  image: string
  price: number
  qty: number
  size: string
  color: string
}


type CheckoutForm = {
  name: string
  email: string
  phone: string
  address: string
  city: string
  pincode: string
  card: string
}



type CheckoutPageProps = {

  cart: CartItem[]

  onPlace: (
    data: CheckoutForm & {
      items: CartItem[]
      total: number
    }
  ) => Promise<void>

  onBack: () => void

}



const INR = (price:number) =>
  new Intl.NumberFormat(
    "en-IN",
    {
      style:"currency",
      currency:"INR",
      maximumFractionDigits:0
    }
  ).format(price)



export default function CheckoutPage({

  cart,
  onPlace,
  onBack

}:CheckoutPageProps){


  const [form,setForm] =
    useState<CheckoutForm>({
      name:"",
      email:"",
      phone:"",
      address:"",
      city:"",
      pincode:"",
      card:""
    })



  const total =
    cart.reduce(
      (sum,item)=>
        sum + item.price * item.qty,
      0
    )



  const update = (
    key:keyof CheckoutForm,
    value:string
  ) => {

    setForm(prev=>({
      ...prev,
      [key]:value
    }))

  }



  async function submit(
    e:React.FormEvent
  ){

    e.preventDefault()

    await onPlace({
      ...form,
      items:cart,
      total
    })

  }



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
          Final Step
        </p>


        <h1 className="
          font-serif-display
          text-5xl
          md:text-6xl
          font-light
        ">
          Checkout
        </h1>


        <div className="
          w-12
          h-px
          bg-[#C9A227]
          mt-6
          mx-auto
        "/>


      </div>





      <div className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-12
        max-w-6xl
        mx-auto
      ">



        <form

          onSubmit={submit}

          className="
            lg:col-span-2
            space-y-8
          "

        >



          <section>

            <h2 className="
              font-serif-display
              text-2xl
              mb-6
            ">
              Contact
            </h2>


            <div className="
              grid
              md:grid-cols-2
              gap-4
            ">


              <Input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={
                  e=>update(
                    "name",
                    e.target.value
                  )
                }
                className="
                  rounded-none
                  h-12
                  border-[#E5DFD2]
                "
              />


              <Input

                required

                type="email"

                placeholder="Email"

                value={form.email}

                onChange={
                  e=>update(
                    "email",
                    e.target.value
                  )
                }

                className="
                  rounded-none
                  h-12
                  border-[#E5DFD2]
                "

              />



              <Input

                required

                placeholder="Phone"

                value={form.phone}

                onChange={
                  e=>update(
                    "phone",
                    e.target.value
                  )
                }

                className="
                  rounded-none
                  h-12
                  border-[#E5DFD2]
                  md:col-span-2
                "

              />

            </div>

          </section>





          <section>

            <h2 className="
              font-serif-display
              text-2xl
              mb-6
            ">
              Shipping Address
            </h2>


            <div className="
              grid
              md:grid-cols-2
              gap-4
            ">


              <Input

                required

                placeholder="Street Address"

                value={form.address}

                onChange={
                  e=>update(
                    "address",
                    e.target.value
                  )
                }

                className="
                  rounded-none
                  h-12
                  border-[#E5DFD2]
                  md:col-span-2
                "

              />



              <Input

                required

                placeholder="City"

                value={form.city}

                onChange={
                  e=>update(
                    "city",
                    e.target.value
                  )
                }

                className="
                  rounded-none
                  h-12
                  border-[#E5DFD2]
                "

              />



              <Input

                required

                placeholder="Postal Code"

                value={form.pincode}

                onChange={
                  e=>update(
                    "pincode",
                    e.target.value
                  )
                }

                className="
                  rounded-none
                  h-12
                  border-[#E5DFD2]
                "

              />


            </div>


          </section>





          <section>

            <h2 className="
              font-serif-display
              text-2xl
              mb-6
            ">
              Payment
            </h2>


            <Input

              required

              placeholder="Card Number"

              value={form.card}

              onChange={
                e=>update(
                  "card",
                  e.target.value
                )
              }

              className="
                rounded-none
                h-12
                border-[#E5DFD2]
              "

            />


            <div className="
              grid
              grid-cols-2
              gap-4
              mt-4
            ">

              <Input
                required
                placeholder="MM / YY"
                className="
                  rounded-none
                  h-12
                  border-[#E5DFD2]
                "
              />


              <Input
                required
                placeholder="CVV"
                className="
                  rounded-none
                  h-12
                  border-[#E5DFD2]
                "
              />

            </div>



            <p className="
              text-xs
              text-[#6b6b6b]
              mt-3
              flex
              items-center
              gap-2
            ">

              <ShieldCheck
                className="
                  w-3
                  h-3
                  text-[#C9A227]
                "
              />

              Encrypted & secure payment

            </p>


          </section>





          <div className="
            flex
            gap-3
          ">


            <Button

              type="button"

              variant="outline"

              onClick={onBack}

              className="
                rounded-none
                h-14
                px-8
                border-[#E5DFD2]
              "

            >

              Back

            </Button>



            <Button

              type="submit"

              className="
                flex-1
                bg-[#111]
                hover:bg-[#C9A227]
                text-[#F8F5EF]
                rounded-none
                h-14
                text-[11px]
                tracking-[0.3em]
                uppercase
              "

            >

              Place Order — {INR(total)}

            </Button>


          </div>



        </form>






        <aside className="
          bg-[#EFEAE0]/50
          p-8
          h-fit
        ">


          <h3 className="
            font-serif-display
            text-xl
            mb-6
          ">
            Order Summary
          </h3>



          {cart.map(item=>(

            <div

              key={item.cartId}

              className="
                flex
                gap-3
                text-sm
                mb-4
              "

            >


              <img

                src={item.image}

                alt={item.name}

                className="
                  w-14
                  h-18
                  object-cover
                "

              />



              <div>

                <p className="font-medium">
                  {item.name}
                </p>


                <p className="
                  text-xs
                  text-[#6b6b6b]
                ">
                  {item.size} • {item.color} • Qty {item.qty}
                </p>


                <p className="mt-1">
                  {INR(item.price * item.qty)}
                </p>


              </div>


            </div>


          ))}


          <div className="
            border-t
            border-[#E5DFD2]
            pt-4
          ">


            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{INR(total)}</span>
            </div>


            <div className="
              flex
              justify-between
              mt-2
            ">

              <span>Shipping</span>

              <span className="text-[#C9A227]">
                Free
              </span>

            </div>



            <div className="
              flex
              justify-between
              font-serif-display
              text-lg
              mt-4
              pt-3
              border-t
              border-[#E5DFD2]
            ">

              <span>Total</span>

              <span>
                {INR(total)}
              </span>

            </div>


          </div>



        </aside>



      </div>


    </div>

  )

}