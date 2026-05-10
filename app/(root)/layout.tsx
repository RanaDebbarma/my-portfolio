import NavBar from "@/components/NavBar"
import ThemeToggle from "@/components/ThemeToggle"
import ThemeProvider from "@/providers/ThemeProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="mx-auto pt-4 pb-4 max-w-7xl w-[95%] h-screen flex flex-col gap-4">
        {/* navigation */}
        <div className="border border-foreground/10 bg-secondary/12 shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-full z-10 px-4 py-3 flex gap-2 justify-between items-center">
          {/* LOGO */}
          <div className="text-2xl font-serif font-bold flex gap-1">
            <span className="text-red-500">R</span>
            <span className="text-blue-500">D</span>
          </div>
          <div className="flex gap-4 items-center">
            {/* NavTabs */}
            <NavBar />
            {/* ThemeToggle */}
            <ThemeProvider>
              <ThemeToggle />
            </ThemeProvider>
          </div>
        </div>
        {/* content */}
        <div
          className="overflow-y-auto border border-foreground/10 bg-secondary/12 shadow-[0_16px_24px_rgba(0,0,0,0.2)] rounded-4xl flex-1 px-4 py-2"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
export default Layout