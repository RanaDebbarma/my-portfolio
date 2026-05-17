import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar"
import ThemeToggle from "@/components/ThemeToggle"
import ThemeProvider from "@/providers/ThemeProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen pb-4 overflow-y-auto scrollbar-thin scrollbar-thumb-foreground/20">
      <div className="relative mx-auto pt-4 pb-4 max-w-7xl w-[95%] h-full flex flex-col gap-4">
        {/* navigation */}
        <div className="backdrop-blur-3xl shrink-0 border border-foreground/10 bg-secondary shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-full z-10 w-full px-4 py-3 flex gap-2 justify-between items-center overflow-auto scrollbar-none">
          {/* LOGO */}
          <Logo />
          <div className="flex gap-2 items-center">
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
          className="border border-foreground/10 bg-secondary shadow-[0_16px_24px_rgba(0,0,0,0.2)] rounded-4xl flex-1 p-4 md:p-8 lg:p-12"
        >
          {children}
        </div>
      </div>
    </div>
  )
}
export default Layout