import { ProfileData } from "@/lib/data"
import Image from "next/image"

const Overview = () => {
  return (
    <div className="shadow-[0_4px_24px_rgba(0,0,0,0.24)] flex flex-col gap-8 lg:w-120 border border-foreground/16 bg-foreground/5 w-full rounded-3xl shrink-0 p-4 sm:p-8">
      <h1 className="uppercase tracking-widest">Quick Overview</h1>

      <div>
        <p>{ProfileData.personalInfo.name}</p>
        <p className="text-muted">{ProfileData.overview["current position"]} based in {ProfileData.personalInfo.address}</p>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {Object.entries(ProfileData.overview.cards).map((item, index) => (

          <div
            key={index}
            className="space-y-2 p-8 border-0 border-foreground/30 concave bg-background rounded-2xl"
          >
            <p className="uppercase text-xs tracking-widest font-sans font-medium text-muted">{item[0]}</p>
            <p>{item[1]}</p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="rounded-2xl">
          <h4 className="border-t border-foreground/30 py-2 w-full text-center font-sans tracking-wide text-muted rounded-2xl">Kanban board</h4>
          <Image
            className="w-full h-auto object-cover border border-foreground/30 rounded-2xl"
            src="/ProjectOverview.png"
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