import { GradientBg } from "@/components/BgComp"
import Wrapper from "@/components/ui/Wrapper"
import { ProfileData } from "@/lib/data"

const educationCard = [
  { title: "University", content: ProfileData.education.college },
  { title: "Location", content: ProfileData.education.location },
  { title: "Grade", content: ProfileData.education.gpa },
]

const about = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Introduction */}
      <div className="space-y-2 p-4 bg-">
        <h3 className="tracking-widest uppercase font-semibold font-sans text-muted">About</h3>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold headline-font">{ProfileData.about.heading}</h1>
          <p>{ProfileData.about.summary}</p>
        </div>
      </div>

      {/* education */}
      <Wrapper className="bg-secondary p-6 space-y-4">
        <div className="flex justify-between">
          <h4 className="tracking-widest uppercase text-sm text-muted">Education</h4>
          <p className="tracking-widest text-muted font-sans font-bold">{ProfileData.education.duration}</p>
        </div>
        <h1 className="text-2xl font-semibold">{ProfileData.education.degree}</h1>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* education card */}
          {educationCard.map((item, index) => (
            <div
              key={index}
              className={`flex-${1} border border-foreground/10 bg-background rounded-2xl p-4 space-y-2`}
            >
              <h4 className="tracking-widest uppercase text-sm text-muted">{item.title}</h4>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </Wrapper>

      {/* secondary cards */}
      <div className="flex flex-col-reverse md:flex-row gap-8 md:h-70">
        {/* working style */}
        <Wrapper className="bg-secondary p-6 space-y-4">
          <h4 className="tracking-widest uppercase text-sm text-muted">{ProfileData.about.workingStyle.title}</h4>
          <p className="font-bold">{ProfileData.about.workingStyle.heading}</p>
          <p className="opacity-80">{ProfileData.about.workingStyle.summary}</p>
        </Wrapper>
        {/* current goal */}
        <Wrapper className="relative overflow-hidden isolate bg-highlightedCard/90 p-6 space-y-4">
          <div className="absolute w-full h-full top-0 right-0 mix-blend-hard-light">
            <GradientBg/>
          </div>
          <h4 className="tracking-widest uppercase text-md text-background">{ProfileData.about.currentGoal.title}</h4>
          <p className="font-bold text-invertFont">{ProfileData.about.currentGoal.heading}</p>
          <p className="text-invertFont">{ProfileData.about.currentGoal.summary}</p>
        </Wrapper>
      </div>

    </div>
  )
}
export default about