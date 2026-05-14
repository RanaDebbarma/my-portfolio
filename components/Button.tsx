"use client"

const Button = ({ children }: { children: React.ReactNode }) => {

  return (
    <button
      className="isolate group relative overflow-hidden convex bg-foreground rounded-full px-4 py-3 cursor-pointer"
    >
      {children}
      <div className="absolute -z-10 top-0 left-0 w-full h-full group-hover:bg-emerald-500/50 transition-colors duration-300 ease-in-out"></div>
    </button>
  )
}
export default Button