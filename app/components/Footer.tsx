// components/Footer.tsx

import {
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"


const SOCIALS = [
  Instagram,
  Facebook,
  Twitter,
]


export default function Footer() {
  return (
    <footer className="
      bg-[#0a0a0a]
      text-[#F8F5EF]/80
      pt-20
      pb-10
    ">

      <div className="
        w-full
        mx-auto
        px-6
      ">


        <div className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-12
          mb-16
        ">


          {/* Brand */}
          <div className="md:col-span-1">

            <div className="
              flex
              items-center
              gap-2
              mb-6
            ">

              <span className="
                font-serif-display
                text-2xl
                text-[#F8F5EF]
              ">
                His Highness
              </span>


              <span className="
                text-[#C9A227]
                text-xl
              ">
                ✦
              </span>


              <span className="
                font-serif-display
                text-2xl
                text-[#F8F5EF]
                italic
                font-light
              ">
                Store
              </span>

            </div>


            <p className="
              text-sm
              leading-relaxed
              mb-6
              text-[#F8F5EF]/60
            ">
              A house of Indian luxury craftsmanship since 2018.
              Where every garment is an heirloom in the making.
            </p>


            <div className="flex gap-3">

              {SOCIALS.map((Icon, i) => (

                <a
                  key={i}
                  href="#"
                  className="
                    w-9
                    h-9
                    border
                    border-[#F8F5EF]/20
                    flex
                    items-center
                    justify-center
                    hover:border-[#C9A227]
                    hover:text-[#C9A227]
                    transition
                  "
                >

                  <Icon className="w-4 h-4" />

                </a>

              ))}

            </div>

          </div>



          {/* Shop */}
          <FooterColumn
            title="Shop"
            items={[
              "Collections",
              "New Arrivals",
              "Bestsellers",
              "Wedding Edit",
              "Accessories",
            ]}
          />



          {/* Customer Care */}
          <FooterColumn
            title="Customer Care"
            items={[
              "Shipping",
              "Returns & Exchange",
              "Size Guide",
              "Privacy Policy",
              "Terms",
            ]}
          />



          {/* Atelier */}
          <div>

            <h4 className="
              font-serif-display
              text-lg
              text-[#F8F5EF]
              mb-5
            ">
              HHS
            </h4>


            <ul className="
              space-y-3
              text-sm
            ">

              <li>
                Heritage House, Jaipur
              </li>

              <li>
                +91 141 4040 9090
              </li>

              <li>
                hishighness@store.
              </li>


              <li className="
                text-[11px]
                tracking-[0.25em]
                uppercase
                text-[#C9A227]
                mt-5
              ">
                By Appointment
              </li>

            </ul>

          </div>


        </div>



        {/* Bottom */}
        <div className="
          border-t
          border-[#F8F5EF]/10
          pt-8
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          text-xs
          text-[#F8F5EF]/40
        ">

          <p>
            © 2025 HHS. All rights reserved.
          </p>


          <p>
            Crafted with care in India
          </p>

        </div>


      </div>

    </footer>
  )
}



function FooterColumn({
  title,
  items,
}: {
  title: string
  items: string[]
}) {

  return (
    <div>

      <h4 className="
        font-serif-display
        text-lg
        text-[#F8F5EF]
        mb-5
      ">
        {title}
      </h4>


      <ul className="
        space-y-3
        text-sm
      ">

        {items.map((item) => (

          <li key={item}>

            <a
              href="#"
              className="
                hover:text-[#C9A227]
                transition
              "
            >
              {item}
            </a>

          </li>

        ))}

      </ul>

    </div>
  )
}