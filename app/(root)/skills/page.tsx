import CustomHR from "@/components/ui/CustomTags"
import { ProfileData } from "@/lib/data"
import { TiltCard } from "@/components/tilt-card"

const skillData = ProfileData.skills

const skills = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Introduction */}
      <div className="space-y-2 p-4">
        <p className="tracking-widest uppercase font-semibold font-sans text-muted">
          Skills
        </p>
        <div className="space-y-4">
          <p className="text-3xl sm:text-3xl lg:text-4xl font-bold headline-font">
            {skillData.heading}
          </p>
          <p>{skillData.summary}</p>
        </div>
      </div>
      <CustomHR />
      {/*skill Cards */}
      <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skillData.cards).map((card, index) => (
          <TiltCard
            key={index}
            className="h-fit group/card bg-secondary hover:border-accent sm:p-6 p-4 border border-wrapper-border/30 shadow-[0_8px_24px_rgba(0,0,0,0.2)] rounded-4xl"
            contentClassName="flex flex-col gap-3"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted group-hover/card:text-accent">{index + 1}.</p>
              <div className="text-xs bg-background border border-wrapper-border/0 px-2 py-1 rounded-xl self-center">
                {card[1].stack.length} skills
              </div>
            </div>
            <p className="tracking-wide uppercase text-sm text-muted">
              {card[1].title}
            </p>

            {card[1].stack.map((item, index) => (
              <div
                key={index}
                className="hover:-translate-y-1 transition-transform duration-300 text-foreground font-sans flex items-center gap-4 border border-wrapper-border/20 hover:border-accent bg-background px-4 py-2 rounded-2xl"
              >
                {item}
              </div>
            ))}
          </TiltCard>
        ))}
      </div>

    </div>
  )
}
export default skills