import { ProfileData } from "@/lib/data"

const Overview = () => {
  return (
    <div>
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