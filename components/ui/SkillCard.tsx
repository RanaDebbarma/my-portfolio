const SkillCard = ({ children, icon }: { children: React.ReactNode, icon: React.ReactNode }) => {
  return (
    <div
      className={`h-14 flex items-center justify-center gap-2 border border-foreground/30 px-4 py-3 rounded-full bg-foreground/5
        hover:border-accent/60 hover:bg-accent/8 transition-all duration-300 ease-in-out`}
    >
      {icon}
      {children}
    </div>
  )
}
export default SkillCard