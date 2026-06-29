// components/Newsletter.tsx

"use client"

import { useState } from "react"
import { toast } from "sonner"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)


  const submit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (!email) return

    try {
      setLoading(true)

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      })


      if (!res.ok) {
        throw new Error("Newsletter signup failed")
      }


      toast.success(
        "Welcome to our world of timeless fashion."
      )

      setEmail("")

    } catch (error) {

      toast.error(
        "Something went wrong. Please try again."
      )

    } finally {
      setLoading(false)
    }
  }


  return (
    <section className="
      py-24
      md:py-32
      bg-[#111]
      text-[#F8F5EF]
      relative
      overflow-hidden
    ">


      {/* Background */}
      <div className="
        absolute
        inset-0
        opacity-10
      ">

        <img
          src="/assets/p16.png"
          alt=""
          className="
            w-full
            h-full
            object-cover
          "
        />

      </div>



      <div className="
        relative
        w-full
        mx-auto
        px-6
        text-center
        max-w-2xl
      ">


        <p className="
          text-[11px]
          tracking-[0.35em]
          uppercase
          text-[#C9A227]
          mb-5
        ">
          The HHS Letter
        </p>



        <h2 className="
          font-serif-display
          text-4xl
          md:text-6xl
          font-light
          leading-tight
        ">
          Join our world of{" "}

          <span className="italic">
            timeless fashion
          </span>

        </h2>



        <p className="
          mt-6
          text-[#F8F5EF]/70
          mb-10
        ">
          Private previews, atelier stories, and invitations
          to exclusive showings.
        </p>



        <form
          onSubmit={submit}
          className="
            flex
            flex-col
            sm:flex-row
            gap-3
            max-w-md
            mx-auto
          "
        >

          <Input

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            type="email"

            required

            placeholder="Your email address"

            className="
              bg-transparent
              border-[#F8F5EF]/30
              text-[#F8F5EF]
              placeholder:text-[#F8F5EF]/40
              rounded-none
              h-12
              px-4
              focus-visible:border-[#C9A227]
            "

          />



          <Button

            type="submit"

            disabled={loading}

            className="
              bg-[#C9A227]
              hover:bg-[#a8861e]
              text-[#111]
              rounded-none
              px-8
              h-12
              text-[11px]
              tracking-[0.3em]
              uppercase
            "
          >

            {loading
              ? "Joining..."
              : "Subscribe"
            }

          </Button>


        </form>


      </div>

    </section>
  )
}