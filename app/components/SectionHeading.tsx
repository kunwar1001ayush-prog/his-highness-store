// components/SectionHeading.tsx

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  sub?: string
  center?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-[11px] tracking-[0.35em] text-[#C9A227] uppercase mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#111]">
        {title}
      </h2>

      {sub && (
        <p
          className={`mt-4 text-[#6b6b6b] max-w-xl text-balance ${
            center ? "mx-auto" : ""
          }`}
        >
          {sub}
        </p>
      )}

      <div
        className={`w-12 h-px bg-[#C9A227] mt-6 ${
          center ? "mx-auto" : ""
        }`}
      />
    </div>
  )
}