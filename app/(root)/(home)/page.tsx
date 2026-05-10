import { ProfileData } from "@/lib/data"

const home = () => {
  return (
    <div className="text-center pt-12 flex flex-col gap-8">
      <div>
        <div>Hi, I am</div>
        <span className="text-3xl">
          {ProfileData.personalInfo.name}
        </span>
      </div>
      <p>
        {ProfileData.summary}
      </p>

      <div className="border border-foreground/20 w-fit m-auto mt-20 rounded-full p-8 py-34">
        {Object.entries(ProfileData.skills).map(skill => (
          <div key={skill[0]}>
            {skill[0]}: {" "}
            {skill[1].map((s, i) => {
              if (i === skill[1].length - 1) return s + ". ";
              return (s + ", ")
            })}
          </div>
        ))}
      </div>

    </div>
  )
}
export default home