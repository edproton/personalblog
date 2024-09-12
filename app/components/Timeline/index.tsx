"use client";
import { Job } from "@/app/types";
import TimelineItem from "./TimelineItem";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineProps {
  jobs: Job[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Timeline: React.FC<TimelineProps> = ({ jobs }) => {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        ref={titleRef}
        className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
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
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 dark:bg-gray-700 -ml-0.5"></div>
      </div>
    </div>
  );
};

export default Timeline;
