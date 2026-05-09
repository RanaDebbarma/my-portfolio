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
    </div>
  )
}
export default home