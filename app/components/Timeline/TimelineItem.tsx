import React, { useRef, useEffect } from "react";
import technologies from "@/app/data/technologies";
import { Job } from "@/app/types";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

interface TimelineItemProps {
  job: Job;
  isOdd: boolean;
  technologiesKeys: string[];
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}

const formatDate = (date?: Date): string => {
  if (!date) return "Present";
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const techVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const responsibilityVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const TimelineItem: React.FC<TimelineItemProps> = ({
  job,
  isOdd,
  onHover,
  onLeave,
  isHovered,
}) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={itemRef}
      className={`flex items-center w-full ${
        isOdd ? "justify-start" : "justify-end"
      } mb-8`}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
    >
      <div className={`relative w-full max-w-md ${isOdd ? "pr-8" : "pl-8"}`}>
        <motion.div
          className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md relative z-10"
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {job.company}
              </p>
            </div>
            <Image
              src={job.info.image}
              alt={job.company}
              width={40}
              height={40}
              className="rounded-md"
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {formatDate(job.period.start)} - {formatDate(job.period.end)}
          </p>
        </motion.div>
        {isHovered && (
          <motion.div
            className={`absolute ${isOdd ? "left-full" : "right-full"} top-0 ${
              isOdd ? "ml-4" : "mr-4"
            } w-64 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="font-semibold mb-2 text-sm text-gray-800 dark:text-white">
              Domain: {job.info.domain}
            </h4>
            <h4 className="font-semibold mb-2 text-sm text-gray-800 dark:text-white">
              Technologies:
            </h4>
            <motion.div className="flex flex-wrap gap-1 mb-2">
              {job.info.technologiesKeys.map((techKey, i) => {
                const tech = technologies
                  .find((t) => t.items.find((t) => t.key == techKey)!)
                  ?.items.find((t) => t.key == techKey);

                return tech ? (
                  <motion.div
                    key={i}
                    className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1"
                    variants={techVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: i * 0.05 }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={16}
                      height={16}
                      className="mr-1"
                    />
                    <span className="text-xs text-gray-800 dark:text-gray-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ) : null;
              })}
            </motion.div>
            <h4 className="font-semibold mb-1 text-sm text-gray-800 dark:text-white">
              Responsibilities:
            </h4>
            <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-300">
              {job.info.responsibilities.map((responsibility, idx) => (
                <motion.li
                  key={idx}
                  variants={responsibilityVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: idx * 0.3 }}
                >
                  {responsibility}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full border-2 border-white dark:border-gray-800 z-30
              ${isOdd ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}`}
        />
      </div>
    </motion.div>
  );
};

export default TimelineItem;
