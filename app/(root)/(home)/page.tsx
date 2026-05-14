import Button from "@/components/Button"
import Overview from "@/components/Overview"
import { ProfileData } from "@/lib/data"

const home = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row  gap-8">
      {/* Hero */}
      <div className="flex flex-col gap-8 h-full justify-around">
        {/* Availability */}
        <div className="convex w-fit px-4 py-2 rounded-full text-sm">Available to work</div>
        {/* Intro */}
        <div className="flex flex-col gap-8">
          <div className="space-y-8">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold headline-font">
              {ProfileData.moto}
            </p>
            <p className="text-md text-foreground/80">
              {ProfileData.summary}
            </p>
          </div>
          {/* buttons */}
          <div className="flex gap-4 justify-start">
            <Button href="/projects"><p className="text-background text-sm font-semibold">Explore projects</p></Button>
            <Button href="/contact"><p className="text-background text-sm font-semibold">Contact me</p></Button>
          </div>
        </div>
        {/* stacks */}
        <div className="space-y-4 space-x-2">
          <div className="convex w-fit px-4 py-2 rounded-full text-sm">
            Tech stacks goes here
          </div>
          <span className="convex w-fit px-4 py-2 rounded-full text-sm">tech1</span>
          <span className="convex w-fit px-4 py-2 rounded-full text-sm">tech2</span>
          <span className="convex w-fit px-4 py-2 rounded-full text-sm">tech3</span>
        </div>
      </div>

      {/* Overview */}
      <div className="lg:w-120 border border-foreground/50 w-full rounded-3xl shrink-0 p-4">
        <Overview></Overview>
      </div>
    </div>
  )
}
export default home