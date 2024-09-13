import { Job } from "../types";

const jobs: Job[] = [
  {
    company: "Ordem dos Enfermeiros",
    title: ".NET Developer",
    period: {
      start: new Date(2024, 6),
    },
    info: {
      imageSrc: "/companies/ordem_enfermeiros_logo.jpg",
      domain: "Healthcare",
      technologiesKeys: [
        "git",
        "bitbucket",
        "c-sharp",
        "asp.net-core",
        "next.js",
        "rest",
      ],
      responsibilities: [
        "Developed new features for the online store",
        "Optimized the performance of the website",
        "Collaborated with the design team to improve the user experience",
      ],
    },
  },
  {
    company: "Farfetch",
    title: ".NET Developer",
    period: {
      start: new Date(2022, 2),
      end: new Date(2024, 4),
    },
    info: {
      imageSrc: "/companies/farfetch_logo.jpg",
      domain: "E-commerce",
      technologiesKeys: [
        "git",
        "gitlab",
        "c-sharp",
        "dotnet",
        "mssql",
        "asp.net-core",
        "mongodb",
        "docker",
        "kafka",
        "rabbitmq",
        "next.js",
        "rest",
      ],
      responsibilities: [
        "Developed new features for the online store",
        "Optimized the performance of the website",
        "Collaborated with the design team to improve the user experience",
      ],
    },
  },
  {
    company: "BrainR",
    title: ".NET Developer",
    period: {
      start: new Date(2021, 9),
      end: new Date(2022, 2),
    },
    info: {
      imageSrc: "/companies/brainr_logo.jpg",
      domain: "Industry 4.0",
      technologiesKeys: [
        "git",
        "github",
        "c-sharp",
        "mssql",
        "asp.net-core",
        "next.js",
        "docker",
        "rest",
      ],
      responsibilities: [
        "Development of new APIs for a project related with Manufacturing Execution System",
        "Refactor of some legacy REST APIs",
      ],
    },
  },
  {
    company: "Janela Digital S.A",
    title: "Junior .NET Developer",
    info: {
      imageSrc: "/companies/janela_digital_logo.jpg",
      domain: "Real Estate",
      technologiesKeys: [
        "git",
        "github",
        "c-sharp",
        "dotnet",
        "asp.net-core",
        "mssql",
        "docker",
        "rest",
        "next.js",
      ],
      responsibilities: [
        "Development of new features for Infocasa and eGo projects",
        "Integration with internal and external APIs",
        "Creation of automated tests namely with xUnit and Puppeteer",
        "Troubleshooting issues related to internal project migrations",
      ],
    },
    period: {
      start: new Date(2020, 8, 1),
      end: new Date(2021, 9, 1),
    },
  },
];

export default jobs;
