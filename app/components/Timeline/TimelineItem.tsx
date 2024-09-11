import technologies from "@/app/data/technologies";
import { Job } from "@/app/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineItemProps {
  job: Job;
  isOdd: boolean;
  technologiesKeys: string[];
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
  index: number;
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

export const TimelineItem: React.FC<TimelineItemProps> = ({
  job,
  isOdd,
  onHover,
  onLeave,
  isHovered,
}) => (
  <motion.div
    className={`flex items-center w-full ${
      isOdd ? "md:justify-start" : "md:justify-end"
    } mb-16`}
    variants={itemVariants}
  >
    <div className={`relative w-1/2 ${isOdd ? "pr-8" : "pl-8"}`}>
      <motion.div
        className="p-4 dark:bg-gray-700 bg-gray-800 rounded-md flex justify-between relative z-10"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <div>
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p>{job.company}</p>
          <p className="text-muted-foreground">
            {formatDate(job.period.start)} - {formatDate(job.period.end)}
          </p>
        </div>
        <Image
          src={job.info.image}
          alt={job.company}
          width={80}
          height={80}
          className="rounded-md ml-4"
        />
      </motion.div>
      {isHovered && (
        <motion.div
          className={`absolute top-0 ${isOdd ? "left-full" : "right-full"} ${
            isOdd ? "ml-8" : "mr-8"
          } w-[500px] dark:bg-gray-700 bg-gray-800 p-4 rounded-lg shadow-lg z-20`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <h4 className="font-semibold mb-2">Domain: {job.info.domain}</h4>
          <h4 className="font-semibold mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {job.info.technologiesKeys.map((techKey, i) => {
              const tech = technologies
                .find((t) => t.items.find((t) => t.key == techKey)!)
                ?.items.find((t) => t.key == techKey);

              return tech ? (
                <motion.div
                  key={i}
                  className="flex items-center bg-gray-600 rounded-3xl px-3 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={27}
                    height={27}
                    className="mr-2"
                  />
                  <span className="text-sm">{tech.name}</span>
                </motion.div>
              ) : null;
            })}
          </div>
          <h4 className="font-semibold mb-2">Responsibilities:</h4>
          <ul className="list-disc list-inside">
            {job.info.responsibilities.map((responsibility, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {responsibility}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-gray-700 z-30
            ${isOdd ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"}`}
      />
    </div>
  </motion.div>
);

export default TimelineItem;
