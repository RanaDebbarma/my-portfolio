"use client"

import NavBar from "@/components/NavBar"
import { motion, AnimatePresence } from "motion/react"
import { usePathname } from "next/navigation"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="mx-auto pt-2 pb-2 max-w-7xl w-[95%] h-screen flex flex-col gap-2">
        {/* navigation */}
        <div className="border border-foreground/30 bg-secondary/6 rounded-3xl z-10 px-4 py-3 flex justify-between items-center">
          <div className="text-3xl font-serif font-bold flex gap-1">
            <span className="text-red-400">R</span>
            <span className="text-blue-400">D</span>
          </div>
          <NavBar />
        </div>
        {/* content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={pathname}
            className="border border-foreground/30 bg-secondary/6 rounded-2xl flex-1 px-4 py-2"
            // initial={{ opacity: 0, }}
            // animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, }}
            // transition={{ duration: 0.5 }} 
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
export default Layout