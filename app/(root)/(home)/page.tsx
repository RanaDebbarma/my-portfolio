import { ProfileData } from "@/lib/data"

const home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">
        {ProfileData.personalInfo.name}
      </h1>
    </div>
  )
}
export default home