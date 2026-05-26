// import { TiltCard } from "@/components/tilt-card"
import CustomHR from "@/components/ui/CustomTags"
import Wrapper from "@/components/ui/Wrapper"
import { ProfileData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

const projectData = ProfileData.projects
const projects = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Introduction */}
      <div className="space-y-2 p-4 bg-">
        <h3 className="tracking-widest uppercase font-semibold font-sans text-muted">Projects</h3>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold headline-font">{projectData.heading}</h1>
          <p>{projectData.summary}</p>
        </div>
      </div>
      <CustomHR />
      {/*project Cards */}
      <div className="grid grid-cols-1 p-4 md:grid-cols-2 gap-8">
        {projectData.cards.map((item, index) => (
          // <TiltCard
          //   key={index}
          //   strength={2}
          // >
          <Wrapper
            key={index}
            className="flex flex-col gap-4 p-6 bg-secondary hover:border-accent"
          >
            {/* project preview */}
            <Link
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-wrapper-border/30 rounded-2xl overflow-hidden"
            >
              <Image
                className="hover:scale-110 transition-transform duration-800 w-full h-auto object-cover"
                src={item.image}
                alt={item.title}
                height={500}
                width={500}
              />
            </Link>
            {/* project contents */}
            <div className="flex flex-col gap-4 grow">
              <p className="font-light text-2xl text-foreground/90 font-sans tracking-wide">
                {item.title}
              </p>
              <p className="text-muted font-sans font-light text-sm">
                {item.description}
              </p>
              {/* technologies */}
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-full px-3 py-1 text-xs text-foreground font-medium font-sans border-wrapper-border/10 bg-background"
                  >
                    {item}
                  </div>
                ))}
              </div>
              {/* bullets */}
              <ul className="grid gap-2 list-outside list-disc pl-5">
                {item.bullets.map((point, index) => (
                  <li
                    key={index}
                  >
                    <span className="text-muted font-sans text-[0.9em]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* links */}
            <div className="flex gap-4 font-sans font-semibold text-sm text-foreground/80">
              <Link
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-wrapper-border/30 hover:border-accent rounded-full grid place-items-center px-4 py-2 transition duration-300"
              >
                view code
              </Link>
              <Link
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-wrapper-border/30 hover:border-accent bg-background/50 rounded-full px-4 py-2 transition duration-300"
              >
                <span className="flex items-center gap-2">
                  Live link
                  <div className="relative inline-block group-hover:bg-emerald-500/50 bg-red-500/80 rounded-full h-2 w-2 transition duration-300">
                    <div className="absolute inline-block group-hover:animate-ping group-hover:bg-emerald-500/50 rounded-full h-2 w-2 transition duration-300"></div>
                  </div>
                </span>
              </Link>
            </div>
          </Wrapper>
          // </TiltCard>
        ))}
      </div>

    </div>
  )
}
export default projects