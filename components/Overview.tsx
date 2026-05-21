import { ProfileData } from "@/lib/data"

const Overview = () => {
  return (
    <div className="lg:w-120 border border-foreground/30 bg-foreground/5 w-full rounded-3xl shrink-0 p-4 px-5">
      <h1 className="uppercase tracking-widest">Quick Overview</h1>
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
  )
}
export default Overview