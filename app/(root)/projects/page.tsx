import { TiltCard } from "@/components/tilt-card"
import CustomHR from "@/components/ui/CustomTags"
import { ProfileData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

const projectData = ProfileData.projects
const projects = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Introduction */}
      <div className="space-y-2 p-4">
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
          <TiltCard
            key={index}
            strength={2}
            className="group/card px-5 py-6 lg:px-6 lg:py-7 bg-secondary hover:border-accent border border-wrapper-border/30 shadow-[0_8px_24px_rgba(0,0,0,0.2)] rounded-4xl"
            contentClassName="flex flex-col gap-4 h-full"
          >
            {/* project preview */}
            <Link
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="border card border-wrapper-border/30 rounded-2xl overflow-hidden"
            >
              <Image
                className="group-hover/card:scale-110 transition-transform duration-800 w-full h-auto object-cover"
                src={item.image}
                alt={item.title}
                height={500}
                width={500}
              />
            </Link>
            {/* project contents */}
            <div className="px-1 flex flex-col gap-4 grow">
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
            <div className="px-1 flex gap-4 font-sans font-semibold text-sm text-foreground">
              <Link
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-wrapper-border/30 hover:border-accent rounded-full flex gap-2 justify-center items-center px-4 py-2 transition duration-300"
              >
                <svg className="h-4 fill-foreground/80 group-hover:fill-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-80q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-334q-35-12-57.5-43T160-760q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T320-647v7q0 50 35 85t85 35h80q83 0 141.5 58.5T720-320v7q35 12 57.5 43t22.5 70q0 50-35 85t-85 35q-50 0-85-35t-35-85q0-39 22.5-70t57.5-43v-7q0-50-35-85t-85-35h-80q-34 0-64.5-10.5T320-480v167q35 12 57.5 43t22.5 70q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-200q0-17-11.5-28.5T280-240q-17 0-28.5 11.5T240-200q0 17 11.5 28.5T280-160Zm400 0q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM280-720q17 0 28.5-11.5T320-760q0-17-11.5-28.5T280-800q-17 0-28.5 11.5T240-760q0 17 11.5 28.5T280-720Z" /></svg>
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
                  <div className="relative inline-block group-hover:bg-accent bg-red-500/80 rounded-full h-2 w-2 transition duration-300">
                    <div className="absolute inline-block animate-ping group-hover:bg-accent bg-red-500/80 rounded-full h-2 w-2 transition duration-300"></div>
                  </div>
                </span>
              </Link>
            </div>
          </TiltCard>
        ))}
      </div>

    </div>
  )
}
export default projects