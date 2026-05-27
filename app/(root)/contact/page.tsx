import { TiltCard } from "@/components/tilt-card"
import CustomHR from "@/components/ui/CustomTags"
import { ProfileData } from "@/lib/data"
import Link from "next/link"

const contact = () => {
  return (
    <div className="flex flex-col gap-8 min-h-full">
      {/* Introduction */}
      <div className="space-y-2 p-4">
        <h3 className="tracking-widest uppercase font-semibold font-sans text-muted">Contact</h3>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold headline-font">{ProfileData.contact.heading}</h1>
          <p>{ProfileData.contact.summary}</p>
        </div>
      </div>
      <CustomHR />
      {/* Contact Information */}
      <div className="grow flex flex-col justify-center items-center p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {ProfileData.contact.cards.map((item, index) => (
            <TiltCard
              key={index}
              strength={-24}
              className="relative group border border-wrapper-border/30 hover:border-accent bg-secondary hover:bg-accent/2 rounded-2xl px-4 py-4"
            >
              <Link
                href={item.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center gap-2 group-hover:scale-105 transition-transform duration-300"
                >
                <div className="h-10 w-full p-2 border border-wrapper-border/50 group-hover:border-accent/80 bg-background rounded-lg fill-foreground group-hover:fill-accent">{item.icon}</div>
                <p
                  className="borde text-md font-sans font-light tracking-wider text-foreground group-hover:text-accent"
                >
                  {item.title}</p>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  )
}
export default contact