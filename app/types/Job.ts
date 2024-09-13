interface Job {
  title: string;
  company: string;
  period: {
    start: Date;
    end?: Date;
  };
  info: {
    imageSrc: string;
    domain: string;
    technologiesKeys: string[];
    responsibilities: string[];
  };
}

export default Job;
