const SkillCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`border border-foreground/30 px-2 py-1 rounded-full bg-foreground/5`}
    >
      {children}
    </div>
  )
}
export default SkillCard