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
    <div className="w-fit border border-white/50 rounded-3xl flex gap-1 p-1">
      {/* NavTabs */}
      {navItems.map(nav => (
        <Link
          key={nav.href}
          href={nav.href}
          onClick={() => setActiveTab(nav.name)}
          className={`${activeTab === nav.name
            ? '' : 'hover:text-white/50'
            }  relative`}
        >
          {/* pill */}
          {activeTab === nav.name &&
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 z-10 bg-stone-300 mix-blend-difference"
              style={{
                borderRadius: 9999
              }}
            // transition={{duration: 5}}
            />
          }

          {/* text */}
          <div className="px-3 py-1">
            {nav.name}
          </div>
        </Link>
      ))}
    </div>
  )
}
export default NavBar