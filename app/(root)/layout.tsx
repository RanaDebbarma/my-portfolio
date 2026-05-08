import NavBar from "@/components/NavBar"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto pt-2 pb-2 max-w-7xl w-[95%] h-screen flex flex-col gap-2">
      {/* navigation */}
      <div className="border border-white/50 rounded-3xl px-4 py-3 flex justify-between items-center">
        <div className="text-3xl">
          <span className="text-red-400">R </span>
          <span className="text-blue-400">D </span>
        </div>
        <NavBar />
      </div>
      {/* content */}
      <div className="border border-white/50 rounded-2xl flex-1 px-4 py-2">
        {children}
      </div>
    </div>
  )
}
export default layout