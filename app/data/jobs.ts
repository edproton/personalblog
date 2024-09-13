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
        "Maintained and optimized legacy applications in a Government Healthcare ERP system using ASP.NET MVC and IIS",
        "Led migration of critical services to Web APIs, enhancing system performance and enabling modern frontend integration",
        "Implemented design patterns to improve modularity and developed responsive UIs with Next.js",
        "more on resume...",
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
        "Developed microservices using Kafka, integrating MongoDB and T-SQL for efficient data management",
        "Designed and optimized RESTful APIs with ASP.NET Core for complex business operations",
        "Built internal monitoring applications using Next.js, enhancing system visibility and management",
        "more on resume...",
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
        "Designed and developed RESTful APIs using .NET Core for Manufacturing Execution Systems",
        "Integrated AWS services (SQS, SNS) for decoupled communication in multiple APIs",
        "Utilized Docker for containerization and deployed applications on AWS infrastructure",
        "more on resume...",
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
        "Developed and maintained CRM and web scraper using .NET Framework and ASP.NET Core",
        "Implemented Test-Driven Development practices using xUnit and MSTest",
        "Contributed to migrating legacy .NET Framework projects to .NET Core in an Agile environment",
        "more on resume...",
      ],
    },
    period: {
      start: new Date(2020, 8, 1),
      end: new Date(2021, 9, 1),
    },
  },
];

export default jobs;
