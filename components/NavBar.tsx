"use client"

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "home", href: "/" },
  { name: "overview", href: "/overview" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact" },
];


const NavBar = () => {
  const pathname = usePathname();

  const activeTab = navItems.find(nav => nav.href === pathname)?.name || navItems[0].name;

  return (
    <div className="w-fit border border-foreground/10 bg-background concave rounded-full flex gap-1 p-2">
      {/* NavTabs */}
      {navItems.map(nav => (
        <Link
          key={nav.href}
          href={nav.href}
          className="relative rounded-3xl"
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
          <div className={`${activeTab === nav.name
            ? '' : 'hover:text-muted'
            } relative z-10 px-3 py-1 text-white mix-blend-difference`}>
            {nav.name}
          </div>
        </Link>
      ))}
    </div>
  )
}
export default NavBar