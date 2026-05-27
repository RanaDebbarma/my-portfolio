"use client"

import { ProfileData } from "@/lib/data"
import Image from "next/image"
import { TiltCard } from "./tilt-card"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const Overview = () => {
  const router = useRouter();
  const projects = ProfileData.projects.cards;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectData, setProjectData] = useState<{ title: string, image: string }>(
    {
      title: projects[0]?.title || "Loading...",
      image: projects[0]?.image
    }
  );
  const delay = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % projects.length;

      // Update index and data
      setCurrentIndex(nextIndex);
      setProjectData(projects[nextIndex]);

    }, delay * 1000);

    return () => clearInterval(interval);
  }, [projects, currentIndex]);

  return (
    <div className="relative shadow-[0_4px_24px_rgba(0,0,0,0.24)] flex flex-col gap-6 md:w-100 lg:w-120 h-fit border border-wrapper-border/30 bg-secondary w-full rounded-3xl shrink-0 p-6 sm:p-8 transition-all duration-300">
      {/* title */}
      <h2 className="uppercase tracking-widest">Quick Overview</h2>
      {/* sub-logo */}
      <div className="absolute right-6 sm:right-8">
        <p className="bg-background border border-foreground/10 rounded-xl p-3 text-foreground/90 font-sans font-semibold tracking-widest">
          RD
        </p>
      </div>
      <div className="space-y-2">
        <p className="text-xl font-medium">{ProfileData.personalInfo.name}</p>
        <p className="text-sm text-muted">{ProfileData.position} based in {ProfileData.personalInfo.address}</p>
      </div>
      {/* sub-cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {ProfileData.overview.cards.map((item, index) => (
          <TiltCard
            key={index}
            className="h-fit group border border-wrapper-border/25 hover:border-accent/80 p-6 sm:p-4 bg-background rounded-2xl"
            contentClassName="flex flex-row-reverse sm:flex-col gap-3 justify-between"
          >
            {/* svg icon */}
            <div className="flex items-center">
              <div className="min-h-8 h-10 fill-foreground/80 group-hover:fill-accent p-2.5 inline-block bg-secondary border border-foreground/10 rounded-xl">
                {item.svg}
              </div>
            </div>
            <div className="grow space-y-2">
              <p className="uppercase text-xs tracking-widest font-sans font-medium text-muted">
                {item.title}
              </p>
              <p>{item.content}</p>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Projects */}
      <p className="uppercase tracking-widest font-sans">Project</p>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full rounded-2xl">
          {/* project title */}
          <motion.div>
            <p className="border-t border-wrapper-border/30 py-2 w-full text-center font-sans tracking-wide text-muted rounded-2xl">
              {projectData.title}
            </p>
          </motion.div>
          <div className="relative border border-wrapper-border/30 rounded-2xl h-56 w-full bg-black overflow-hidden">
            <AnimatePresence>
              <motion.div
                className="absolute inset-0"
                key={projectData.title}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                {/* project image */}
                <div className="h-full overflow-hidden">
                  <Image
                    onClick={() => router.push('/projects')}
                    className="cursor-pointer hover:scale-110 transition-transform duration-800 w-full h-full object-cover"
                    src={projectData.image}
                    alt={projectData.title}
                    width={500}
                    height={500}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Overview