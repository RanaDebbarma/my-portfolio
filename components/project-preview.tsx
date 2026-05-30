"use client"

import { ProfileData } from "@/lib/data";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"

const ProjectPreview = () => {
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
  )
}
export default ProjectPreview