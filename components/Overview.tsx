import { ProfileData } from "@/lib/data"
import Image from "next/image"

const Overview = () => {
  return (
    <div className="relative shadow-[0_4px_24px_rgba(0,0,0,0.24)] flex flex-col gap-6 lg:w-120 border border-foreground/16 bg-secondary w-full rounded-3xl shrink-0 p-6 sm:p-8">
      <h2 className="uppercase tracking-widest">Quick Overview</h2>
      <div className="absolute right-6 sm:right-8">
        <p className="bg-background border border-foreground/10 rounded-xl p-3 text-foreground/90 font-sans font-semibold tracking-widest">
          RD
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xl font-medium">{ProfileData.personalInfo.name}</p>
        <p className="text-sm text-muted">{ProfileData.position} based in {ProfileData.personalInfo.address}</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ProfileData.overview.cards.map((item, index) => (
          <div
            key={index}
            className="flex flex-row-reverse sm:flex-col gap-3 justify-between p-6 sm:p-4 concave bg-background rounded-2xl"
          >
            <div className="flex items-center">
              <div className="min-h-8 h-10 fill-foreground/80 p-2.5 inline-block bg-secondary  border border-foreground/10 rounded-xl">
                {item.svg}
              </div>
            </div>
            <div className="grow space-y-2">
              <p className="uppercase text-xs tracking-widest font-sans font-medium text-muted">{item.title}</p>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Projects */}
      <h4 className="uppercase tracking-widest font-sans">Project</h4>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="rounded-2xl">
          <h4 className="border-t border-foreground/30 py-2 w-full text-center font-sans tracking-wide text-muted rounded-2xl">Kanban board</h4>
          <Image
            className="w-full h-auto object-cover border border-foreground/30 rounded-2xl"
            src="/assets/projects/KanbanBoard.png"
            alt="kanban-board"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}
export default Overview