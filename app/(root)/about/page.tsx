import Wrapper from "@/components/ui/Wrapper"
import { ProfileData } from "@/lib/data"

const about = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Introduction */}
      <div className="space-y-4 p-2">
        <h3 className="tracking-widest uppercase font-bold">About</h3>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold headline-font">A self-taught builder with a practical frontend mindset.</h1>
          <p>The portfolio is shaped around My resume details, but presented as a richer story: strong responsive layout instincts, hands-on UI work, and a clear path toward full-stack engineering.</p>
        </div>
      </div>

      {/* education */}
      <Wrapper className="bg-secondary p-6 space-y-4">
        <div className="flex justify-between">
          <h4 className="tracking-widest uppercase text-sm text-muted">Education</h4>
          <p className="tracking-widest text-muted font-sans font-bold">2019 - 2023</p>
        </div>
        <h1 className="text-2xl font-semibold">{ProfileData.education.degree}</h1>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* university */}
          <div className="flex-1 bg-background rounded-2xl p-4 space-y-2">
            <h4 className="tracking-widest uppercase text-sm text-muted">University</h4>
            <p>{ProfileData.education.college}</p>
          </div>
          {/* location */}
          <div className="flex-1 bg-background rounded-2xl p-4 space-y-2">
            <h4 className="tracking-widest uppercase text-sm text-muted">Location</h4>
            <p>{ProfileData.education.location}</p>
          </div>
          {/* grade */}
          <div className="flex-1 bg-highlightedCard text-invertFont rounded-2xl p-4 space-y-2">
            <h4 className="tracking-widest uppercase text-sm text-background">Grade</h4>
            <p>{ProfileData.education.gpa}</p>
          </div>
        </div>
      </Wrapper>

      {/* secondary cards */}
      <div className="flex flex-col-reverse md:flex-row gap-8 md:h-70">
        {/* working style */}
        <Wrapper className="bg-secondary p-6 space-y-4">
          <h4 className="tracking-widest uppercase text-sm text-muted">Working style</h4>
          <p className="font-bold">I approach frontend work with a clean UI mindset: responsive layout first, clear hierarchy second, and interaction only where it improves the experience.</p>
          <p className="opacity-80">The focus is on building interfaces that feel polished, readable, and usable across devices.</p>
        </Wrapper>
        {/* current goal */}
        <Wrapper className="bg-highlightedCard p-6 space-y-4">
          <h4 className="tracking-widest uppercase text-sm text-background">Current goal</h4>
          <p className="font-bold text-invertFont">Frontend first, full-stack next.</p>
          <p className="text-invertFont">Currently focused on frontend development, with a clear path toward backend skills, fullstack projects, and broader software engineering practice.</p>
        </Wrapper>
      </div>

    </div>
  )
}
export default about