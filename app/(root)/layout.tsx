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
        <div className="border border-white/50 rounded-3xl z-10 px-4 py-3 flex justify-between items-center">
          <div className="text-3xl">
            <span className="text-red-400">R </span>
            <span className="text-blue-400">D </span>
          </div>
          <NavBar />
        </div>
        {/* content */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            key={pathname}
            className="border border-white/50 rounded-2xl flex-1 px-4 py-2"
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
export default Layout