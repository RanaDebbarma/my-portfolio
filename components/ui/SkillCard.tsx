const SkillCard = ({ children, icon }: { children: React.ReactNode, icon: React.ReactNode }) => {
  return (
    <div
      className={`h-14 backdrop-blur-md flex items-center justify-center gap-2 border border-foreground/16 px-4 py-3 rounded-full bg-secondary
        hover:border-accent hover:bg-accent/5 transition-all duration-300 ease-in-out`}
    >
      {icon}
      {children}
    </div>
  )
}
export default SkillCard