"use client"

import Link from "next/link";

const navItems = [
  { name: "home", href: "/" },
  { name: "overview", href: "/overview" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "contact", href: "/contact" },
];


const NavBar = () => {
  return (
    <div>
      {navItems.map(nav => (
        <Link key={nav.href} href={nav.href}>
          {nav.name}
        </Link>
      ))}
    </div>
  )
}
export default NavBar