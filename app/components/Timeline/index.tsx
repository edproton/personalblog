"use client";
import { Job } from "@/app/types";
import TimelineItem from "./TimelineItem";
import { useState } from "react";

interface TimelineProps {
  jobs: Job[];
}

const Timeline: React.FC<TimelineProps> = ({ jobs }) => {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);

  return (
    <div className="relative max-w-4xl mx-auto px-4 md:px-0">
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
      <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-gray-700 md:-ml-0.5"></div>
    </div>
  );
};

export default Timeline;
