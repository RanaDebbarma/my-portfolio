import CustomHR from "@/components/ui/CustomTags"
import Wrapper from "@/components/ui/Wrapper"
import { ProfileData } from "@/lib/data"
import { TiltCard } from "@/components/tilt-card"

const skillData = ProfileData.skills

const skills = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Introduction */}
      <div className="space-y-2 p-4 bg-">
        <h3 className="tracking-widest uppercase font-semibold font-sans text-muted">Skills</h3>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold headline-font">{skillData.heading}</h1>
          <p>{skillData.summary}</p>
        </div>
      </div>
      <CustomHR />
      {/* Cards */}
      <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillData.cards).map((card, index) => (
          <TiltCard
            key={index}
          >
            <Wrapper
              className="bg-secondary hover:border-accent/30 flex flex-col gap-4 sm:p-6 p-4"
            >
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted">{index + 1}.</p>
                <div className="text-xs bg-background border border-foreground/10 px-2 py-1 rounded-xl self-center">{card[1].stack.length} skills</div>
              </div>
              <h1 className="tracking-wide uppercase text-sm text-muted">{card[1].title}</h1>

              {card[1].stack.map((item, index) => (
                // <TiltCard
                //   key={index}
                // >
                <div
                  key={index}
                  className="text-foreground font-sans flex items-center gap-4 border border-foreground/10 hover:border-accent/50 bg-background px-4 py-2 rounded-2xl"
                >
                  {item}
                </div>
                // </TiltCard>

              ))}
            </Wrapper>
          </TiltCard>
        ))}
      </div>

    </div>
  )
}
export default skills