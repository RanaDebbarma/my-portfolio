"use client"

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "home", href: "/" },
  { name: "overview", href: "/overview" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact" },
];


const NavBar = () => {
  const [activeTab, setActiveTab] = useState(navItems[0].name)

  return (
    <div className="w-fit border border-foreground/20 bg-background inset-shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-3xl flex gap-1 p-1">
      {/* NavTabs */}
      {navItems.map(nav => (
        <Link
          key={nav.href}
          href={nav.href}
          onClick={() => setActiveTab(nav.name)}
          className={`${activeTab === nav.name
            ? '' : 'hover:text-foreground/50'
            }  relative rounded-3xl`}
        >
          {/* pill */}
          {activeTab === nav.name &&
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-foreground"
              style={{
                borderRadius: 9999
              }}
            // transition={{duration: 5}}
            animate={{ scale: [1, 0.9, 1] }}
            />
          }

          {/* text */}
          <div className="relative z-10 px-3 py-1 text-white mix-blend-difference">
            {nav.name}
          </div>
        </Link>
      ))}
    </div>
  )
}
export default NavBar