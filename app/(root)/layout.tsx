import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar"
import ThemeToggle from "@/components/ThemeToggle"
import ThemeProvider from "@/providers/ThemeProvider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen overflow-y-auto scrollbar-none scrollbar-thumb-foreground/20">
      <div className="relative mx-auto pt-4 max-w-6xl w-[95%] h-full flex flex-col gap-4">
        {/* navigation */}
        <div className="shrink-0 border border-foreground/10 bg-secondary shadow-[0_4px_12px_rgba(0,0,0,0.2)] rounded-4xl z-10 w-full px-2 sm:px-4 py-3 flex gap-2 justify-between items-center overflow-auto scrollbar-none">
          {/* LOGO */}
          <div className="grow">
            <Logo />
          </div>
          {/* NavTabs */}
          <NavBar />
          {/* ThemeToggle */}
          <ThemeProvider>
            <ThemeToggle />
          </ThemeProvider>
        </div>
        {/* content */}
        <div
          className="flex-1 pb-2"
        >
          {children}
        </div>
        <footer className="flex justify-center items-center rounded-4xl border-t border-foreground/30 p-8 text-muted footerBg">
          <p>&copy; 2026 Rana Debbarma. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
export default Layout