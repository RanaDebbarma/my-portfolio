import { ProfileData } from "@/lib/data"
import Image from "next/image"

const Overview = () => {
  return (
    <div className="flex flex-col gap-12 lg:w-120 border border-foreground/30 bg-foreground/5 w-full rounded-3xl shrink-0 p-8">
      <h1 className="uppercase tracking-widest">Quick Overview</h1>

      <div>
        <p>Rana Debbarma</p>
        <p className="text-muted">Frontend Developer based in Guwahati</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-8 border-0 border-foreground/30 concave rounded-xl">
          <p className="text-muted">Primary stack</p>
          <p>React + tailwind</p>
        </div>
        <div className="p-8 border-0 border-foreground/30 concave rounded-xl">
          <p className="text-muted">Learning now</p>
          <p>NextJs</p>
        </div>
        <div className="p-8 border-0 border-foreground/30 concave rounded-xl">
          <p className="text-muted">Career direction</p>
          <p>Full-stack</p>
        </div>
        <div className="p-8 border-0 border-foreground/30 concave rounded-xl">
          <p className="text-muted">Based in</p>
          <p>{ProfileData.personalInfo.address}</p>
        </div>
      </div>

      <div>
        <Image src="/ProjectOverview.png" alt="kanban-board" width={500} height={500}/>
      </div>
    </div>
  )
}
export default Overview