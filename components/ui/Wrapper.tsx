const Wrapper = ({ children, className  }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`${className} h-full border border-foreground/10 shadow-[0_16px_24px_rgba(0,0,0,0.2)] rounded-4xl`}>
      {children}
    </div>
  )
}
export default Wrapper