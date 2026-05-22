import { ProfileData } from "@/lib/data"

const Overview = () => {
  return (
    <div className="flex flex-col gap-12 lg:w-120 border border-foreground/30 bg-foreground/5 w-full rounded-3xl shrink-0 p-8">
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
      
      <ol>
        <li>Projects</li>
        <li>Why hire me?</li>
        <li>testaments</li>
        <li>Education</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Contact</li>
      </ol>
    </div>
  )
}
export default Overview