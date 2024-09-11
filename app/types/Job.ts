import { StaticImageData } from "next/image";

interface Job {
  title: string;
  company: string;
  period: {
    start: Date;
    end?: Date;
  };
  info: {
    image: StaticImageData;
    domain: string;
    technologiesKeys: string[];
    responsibilities: string[];
  };
}

export default Job;
