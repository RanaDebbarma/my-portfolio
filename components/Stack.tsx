import SkillCard from "./ui/SkillCard"
import { reactSvg, nextJsSvg, tailwindSvg, typescriptSvg, githubSvg, vercelSvg } from "@/lib/svgs"

const skills = [
  { name: "React", icon: reactSvg },
  { name: "Nextjs", icon: nextJsSvg },
  { name: "Tailwindcss", icon: tailwindSvg },
  { name: "Typescript", icon: typescriptSvg },
  { name: "Github", icon: githubSvg },
  { name: "Vercel", icon: vercelSvg },
]

const Stack = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {skills.map(skill => (
        <SkillCard key={skill.name} icon={skill.icon}> {skill.name} </SkillCard>
      ))}
    </div>
  )
}
export default Stack