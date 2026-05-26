import { GradientBg } from "@/components/BgComp"
import { TiltCard } from "@/components/tilt-card"
import CustomHR from "@/components/ui/CustomTags"
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
        <p className="tracking-widest uppercase font-semibold font-sans text-muted">
          About
        </p>
        <div className="space-y-4">
          <p className="text-3xl sm:text-3xl lg:text-4xl font-bold headline-font">
            {ProfileData.about.heading}
          </p>
          <p>{ProfileData.about.summary}</p>
        </div>
      </div>

      {/* hr comp */}
      <CustomHR />

      {/* cards */}
      <div className="flex flex-col gap-8 p-4">
        {/* education */}
        <Wrapper className="bg-secondary p-6 space-y-4">
          <div className="flex justify-between">
            <p className="tracking-widest uppercase text-sm text-muted">
              Education
            </p>
            <p className="tracking-widest text-muted font-sans font-bold">
              {ProfileData.education.duration}
            </p>
          </div>
          <h1 className="text-2xl font-semibold">
            {ProfileData.education.degree}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* education card */}
            {educationCard.map((item, index) => (
              <TiltCard
                key={index}
                className={`flex-${1} border border-foreground/10 bg-background rounded-2xl p-4 space-y-2`}
              >
                <p className="tracking-widest uppercase text-sm text-muted">{item.title}</p>
                <p>{item.content}</p>
              </TiltCard>
            ))}
          </div>
        </Wrapper>
        {/* secondary cards */}
        <div className="flex flex-col-reverse md:flex-row gap-8 md:h-70">
          {/* working style */}
          <Wrapper className="bg-secondary p-6 space-y-4">
            <p className="tracking-widest uppercase text-sm text-muted">{ProfileData.about.workingStyle.title}</p>
            <p className="font-bold">{ProfileData.about.workingStyle.heading}</p>
            <p className="opacity-80">{ProfileData.about.workingStyle.summary}</p>
          </Wrapper>
          {/* current goal */}
          <Wrapper className="relative overflow-hidden isolate bg-highlightedCard/90 p-6 space-y-4">
            <div className="absolute w-full h-full top-0 right-0 mix-blend-hard-light">
              <GradientBg />
            </div>
            <p className="tracking-widest uppercase text-md text-background">{ProfileData.about.currentGoal.title}</p>
            <p className="font-bold text-invertFont">{ProfileData.about.currentGoal.heading}</p>
            <p className="text-invertFont">{ProfileData.about.currentGoal.summary}</p>
          </Wrapper>
        </div>
      </div>

    </div>
  )
}
export default about