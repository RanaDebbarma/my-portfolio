import Button from "@/components/Button"
import Overview from "@/components/Overview"
import Stack from "@/components/Stack"
import { ProfileData } from "@/lib/data"
import { arrowSvg, mailSvg } from "@/lib/svgs"

const home = () => {
  return (
    <div className="p-4 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* section1 */}
        <div className="grow flex flex-col gap-8">
          {/* top bar */}
          <div className="flex gap-4">
            <div className="border border-foreground/30 bg-secondary text-foreground/80 rounded-full px-2 py-1 text-sm font-medium font-sans">
              Open for frontend roles
            </div>
            {/* Availability */}
            <div className="uppercase border border-emerald-500/50 bg-emerald-500/6 text-emerald-600/90 tracking-widest w-fit px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              available
              <div className="relative inline-block bg-emerald-500/50 rounded-full h-3 w-3">
                <div className="absolute inline-block animate-ping bg-emerald-500/50 rounded-full h-3 w-3"></div>
              </div>
            </div>
          </div>
          {/* Hero */}
          <div className="flex flex-col gap-12 h-full max-w-screen justify-center items-around">
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
                <Button href="/projects">
                  <div className="flex justify-center items-center gap-1">
                    <p className="grow text-background text-md font-semibold font-sans">
                      Explore projects
                    </p>
                    <div className="fill-background w-5">
                      {arrowSvg}
                    </div>
                  </div>
                </Button>
                <Button href="/contact">
                  <div className="flex justify-center items-center gap-1">
                    <div className="fill-background w-5">
                      {mailSvg}
                    </div>
                    <p className="grow text-background text-md font-semibold font-sans">
                      Contact me
                    </p>
                  </div>
                </Button>
              </div>
            </div>
            {/* stacks */}
            <div className="mb-2">
              <Stack />
            </div>
          </div>
        </div>
        {/* section2 */}
        {/* Overview */}
        <Overview />
      </div>
    </div>
  )
}
export default home