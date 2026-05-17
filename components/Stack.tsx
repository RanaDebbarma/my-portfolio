import SkillCard from "./ui/SkillCard"

const Stack = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <SkillCard>ReactJs</SkillCard>
      <SkillCard>NextJs</SkillCard>
      <SkillCard>TailwindCSS</SkillCard>
      <SkillCard>Typescript</SkillCard>
      <SkillCard>Github</SkillCard>
      <SkillCard>vercel</SkillCard>
    </div>
  )
}
export default Stack