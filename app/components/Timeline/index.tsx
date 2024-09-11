"use client";
import { Job } from "@/app/types";
import TimelineItem from "./TimelineItem";
import { useState, useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

interface TimelineProps {
  jobs: Job[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.5,
    },
  },
};

const Timeline: React.FC<TimelineProps> = ({ jobs }) => {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateTitle = async () => {
      await animate(
        "span",
        { opacity: 1 },
        { duration: 0.05, delay: stagger(0.1) }
      );
    };

    animateTitle();
  }, [animate]);

  return (
    <div className="relative max-w-4xl mx-auto px-4 md:px-0">
      <h2
        ref={scope}
        className="text-3xl font-bold text-center mb-8"
        aria-label="Experience"
      >
        {"Experience".split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </h2>

      <div className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {jobs.map((job, index) => (
            <TimelineItem
              key={index}
              job={job}
              isOdd={index % 2 === 0}
              technologiesKeys={job.info.technologiesKeys}
              onHover={() => setHoveredJob(index)}
              onLeave={() => setHoveredJob(null)}
              isHovered={hoveredJob === index}
            />
          ))}
        </motion.div>
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-gray-700 md:-ml-0.5 z-0"></div>
      </div>
    </div>
  );
};

export default Timeline;
