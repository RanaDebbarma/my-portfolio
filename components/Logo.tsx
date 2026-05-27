import { TiltCard } from "./tilt-card"

const Logo = () => {
  return (
    <div
      aria-label="RD Logo"
      className="convex bg-[#171717] select-none h-12 w-12 aspect-auto text-lg items-center justify-center font-serif font-bold border border-white/20 rounded-full flex gap-1"
    >
      <TiltCard
        strength={-16}
        className="h-full w-full p-2 rounded-full"
      >
        <span className="text-accent font-bold">RD</span>
        {/* <span className="text-accent font-extrabold font-sans">D</span> */}
      </TiltCard>
    </div>
  )
}
export default Logo