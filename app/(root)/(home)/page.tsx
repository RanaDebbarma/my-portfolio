import Button from "@/components/Button"
import Overview from "@/components/Overview"
import { ProfileData } from "@/lib/data"

const home = () => {
  return (
    <div className="h-full flex gap-8">
      {/* Hero */}
      <div className="text- pt-12 flex flex-col gap-12 h-full justify-center">
        <div className="space-y-8">
          <p className="text-4xl font-bold headline-font">
            {ProfileData.moto}
          </p>
          <p className="text-md text-foreground/80">
            {ProfileData.summary}
          </p>
        </div>
        {/* buttons */}
        <div className="flex gap-4 justify-start">
          <Button><p className="text-background text-sm font-semibold">Explore projects</p></Button>
          <Button><p className="text-background text-sm font-semibold">Contact me</p></Button>
        </div>
        {/* stacks */}
        <div>
          {Object.entries(ProfileData.skills).map(skill => (
            <div key={skill[0]}>
              {skill[0]} : {skill[1].map((item, index) => {
                if (index === skill[1].length - 1) {
                  return item + "."
                } else {
                  return (item + ", ")
                }
              })}
            </div>
          ))}
        </div>
      </div>
      
      {/* Overview */}
      <div className="border border-foreground/50 w-50 rounded-3xl shrink-0 p-4">
        <Overview></Overview>
      </div>
    </div>
  )
}
export default home