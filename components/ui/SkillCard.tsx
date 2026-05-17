const SkillCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`border border-foreground/30 px-4 py-3 rounded-full bg-foreground/5`}
    >
      {children}
    </div>
  )
}
export default SkillCard