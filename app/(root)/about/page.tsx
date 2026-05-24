import Wrapper from "@/components/ui/Wrapper"
import { ProfileData } from "@/lib/data"

const about = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-4 p-2">
        <h3 className="tracking-widest uppercase font-bold">About</h3>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold headline-font">A self-taught builder with a practical frontend mindset.</h1>
          <p>The portfolio is shaped around Rana&apos;s resume details, but presented as a richer story: strong responsive layout instincts, hands-on UI work, and a clear path toward full-stack engineering.</p>
        </div>
      </div>

      <Wrapper className="bg-secondary p-6 space-y-4">
        <h4 className="tracking-widest uppercase text-sm text-muted">Working style</h4>
        <p className="font-bold">Rana approaches frontend work with a clean UI mindset: responsive layout first, clear hierarchy second, and interaction only where it improves the experience.</p>
        <p>The focus is on building interfaces that feel polished, readable, and usable across devices, while steadily growing into stronger Next.js and full-stack capabilities.</p>
      </Wrapper>

      <Wrapper className=" bg-foreground/90 p-6 space-y-4">
        <h4 className="tracking-widest uppercase text-sm text-background">Current goal</h4>
        <p className="font-bold text-background/80">Frontend first, full-stack next.</p>
        <p className="text-background/80">Currently focused on frontend development, with a clear path toward backend skills, fullstack projects, and broader software engineering practice.</p>
      </Wrapper>

      <Wrapper className="bg-secondary p-6 space-y-4">
        <div className="flex justify-between">
          <h4 className="tracking-widest uppercase text-sm text-muted">Education</h4>
          <p className="tracking-widest text-muted font-sans font-bold">2019 - 2023</p>
        </div>
        <h1 className="text-2xl font-semibold">{ProfileData.education.degree}</h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-background rounded-2xl p-4 space-y-2">
            <h4 className="tracking-widest uppercase text-sm text-muted">University</h4>
            <p>{ProfileData.education.college}</p>
          </div>
          <div className="flex-1 bg-background rounded-2xl p-4 space-y-2">
            <h4 className="tracking-widest uppercase text-sm text-muted">Location</h4>
            <p>{ProfileData.education.location}</p>
          </div>
          <div className="flex-1 bg-background rounded-2xl p-4 space-y-2">
            <h4 className="tracking-widest uppercase text-sm text-muted">Grade</h4>
            <p>{ProfileData.education.gpa}</p>
          </div>
        </div>
      </Wrapper>

    </div>
  )
}
export default about