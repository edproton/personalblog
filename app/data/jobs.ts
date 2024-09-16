import { Job } from "../types";
import jobsJsonString from "./jobs.json";

const dateFields = ["start", "end"];

const jobs: Job[] = JSON.parse(JSON.stringify(jobsJsonString), (key, value) => {
  if (dateFields.includes(key) && value) {
    return new Date(value);
  }
  return value;
});

export default jobs;
