import NavBar from "@/components/NavBar"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="mx-auto pt-4 pb-4 max-w-7xl w-[95%] h-screen flex flex-col gap-4">
        {/* navigation */}
        <div className="border border-foreground/10 bg-secondary/12 shadow-lg rounded-full z-10 px-4 py-3 flex gap-2 justify-between items-center">
          <div className="text-2xl font-serif font-bold flex gap-1">
            <span className="text-red-500">R</span>
            <span className="text-blue-500">D</span>
          </div>
          <NavBar />
        </div>
        {/* content */}
        <div
          className="overflow-y-auto border border-foreground/10 bg-secondary/12 shadow-md rounded-4xl flex-1 px-4 py-2"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
export default Layout