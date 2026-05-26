import { ProfileData } from "@/lib/data"
import Image from "next/image"
import { TiltCard } from "./tilt-card"

const Overview = () => {
  return (
    <div className="relative shadow-[0_4px_24px_rgba(0,0,0,0.24)] flex flex-col gap-6 md:w-100 lg:w-120 h-fit border border-wrapper-border/30 bg-secondary w-full rounded-3xl shrink-0 p-6 sm:p-8 transition-all duration-300">
      {/* title */}
      <h2 className="uppercase tracking-widest">Quick Overview</h2>
      {/* sub-logo */}
      <div className="absolute right-6 sm:right-8">
        <p className="bg-background border border-foreground/10 rounded-xl p-3 text-foreground/90 font-sans font-semibold tracking-widest">
          RD
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-xl font-medium">{ProfileData.personalInfo.name}</p>
        <p className="text-sm text-muted">{ProfileData.position} based in {ProfileData.personalInfo.address}</p>
      </div>
      {/* sub-cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ProfileData.overview.cards.map((item, index) => (
          <TiltCard
            key={index}
            strength={8}
          >
            <div
              className="relative overflow-hidden group border border-foreground/10 hover:border-accent/80 flex flex-row-reverse sm:flex-col gap-3 justify-between p-6 sm:p-4 bg-background rounded-2xl"
            >
              <div className="absolute group-hover:bg-accent/5 mix-blend-hard-light inset-0"></div>
              {/* svg icon */}
              <div className="flex items-center">
                <div className="min-h-8 h-10 fill-foreground/80 group-hover:fill-accent p-2.5 inline-block bg-secondary border border-foreground/10 rounded-xl">
                  {item.svg}
                </div>
              </div>
              <div className="grow space-y-2">
                <p className="uppercase text-xs tracking-widest font-sans font-medium text-muted">
                  {item.title}
                </p>
                <p>{item.content}</p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Projects */}
      <h4 className="uppercase tracking-widest font-sans">Project</h4>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="rounded-2xl">
          {/* project title */}
          <h4 className="border-t border-wrapper-border/30 py-2 w-full text-center font-sans tracking-wide text-muted rounded-2xl">
            Kanban board
          </h4>
          {/* project image */}
          <div className="overflow-hidden border border-wrapper-border/30 rounded-2xl">
            <Image
              className="hover:scale-110 transition-transform duration-800 w-full h-auto object-cover rounded-2xl"
              src="/assets/projects/KanbanBoard.png"
              alt="kanban-board"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Overview