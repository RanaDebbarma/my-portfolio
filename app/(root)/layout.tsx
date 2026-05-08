import NavBar from "@/components/NavBar"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto mt-2 mb-2 max-w-7xl w-[95%] flex flex-col gap-2">
      {/* navigation */}
      <div className="border border-white/50 rounded-3xl px-4 py-3 flex justify-between items-center">
        <div className="text-3xl">
          <span className="text-red-400">R </span>
          <span className="text-blue-400">D </span>
        </div>
        <NavBar />
      </div>
      {/* content */}
      <div>
        {children}
      </div>
    </div>
  )
}
export default layout