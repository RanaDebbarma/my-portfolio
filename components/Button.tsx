"use client"

import Link from "next/link"

const Button = ({ children, href }: { children: React.ReactNode, href?: string }) => {

  if (href === undefined) {
    return (
      <button
        className="active:scale-98 hover:scale-104 hover:outline-accent/50 hover:outline isolate group relative overflow-hidden convex bg-foreground rounded-full px-4 py-3 cursor-pointer transition-transform"
        style={{
          transitionDuration: "300ms",
          transitionTimingFunction: "ease-in-out"
        }}
      >
        {children}
        <div className="absolute -z-10 top-0 left-0 w-full h-full group-hover:bg-accent/50 transition-all duration-300 ease-in-out"></div>
      </button>
    )
  }
  else
    return (
      <Link href={href}
        className="active:scale-98 hover:scale-104 hover:outline-accent/50 hover:outline isolate group relative overflow-hidden convex bg-foreground rounded-full px-4 py-3 cursor-pointer transition-transform"
        style={{
          transitionDuration: "300ms",
          transitionTimingFunction: "ease-in-out"
        }}
      >
        {children}
        <div className="absolute -z-10 top-0 left-0 w-full h-full group-hover:bg-accent/80 mix-blend-hard-light transition-all duration-300 ease-in-out"></div>
      </Link>
    )
}
export default Button