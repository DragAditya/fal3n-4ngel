import { Project } from "../types/projects";
import {
  DiJava,
  DiPython,
  DiJavascript,
  DiMongodb,
  DiFirebase,
  DiReact,
  DiAndroid,
} from "react-icons/di";
import {
  SiDotnet,
  SiAngular,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiKotlin,
  SiCsharp,
  SiFlutter,
  SiC,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiNextdotjs,
  SiBlockchaindotcom,
  SiSolidity,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IconType } from "react-icons";


// Project Data
export const projects: Project[] = [
    {
      url1: "/Flash1.png",
      name: "FLASH DRIVE",
      type: "Website",
      event: "College Project",
      date: "2023",
      view: "https://flashdrive-f2an.vercel.app/",
      description:
        "A Next.js web platform featuring an AI image generator with custom-trained Stable Diffusion model and a few other arcade games. Built with Firebase and EpicRealism image model, it's just a DBMS course project that evolved into a playground for implementing advanced web technologies.",
    },
    {
      url1: "/SOYO.png",
      name: "STREAM OWN YOUR OWN",
      type: "Website",
      event: "Side Project",
      date: "2024",
      description:
        "A Next.js-powered local streaming solution that turns your computer into a personal media server. Built to solve the problem of limited mobile storage, SOYO lets you stream your video library across all devices on your network through a clean, modern interface.",
      view: "https://github.com/fal3n-4ngel/SOYO",
    },
    {
      url1: "/smartcertify.png",
      name: "SMART CERTIFY",
      type: "Website | Blockchain",
      event: "BlockHash",
      date: "2023",
      view: "https://github.com/Deflated-Pappadam/Smart-Certify",
      description:
        "A blockchain based certification platform that uniquely identifies organizations through secure wallet IDs and authenticates users via AADHAR integration, ensuring tamper-proof documentation. This project secured the winning spot at BlockHash 2023 by the Kerala Blockchain Academy.",
    },
    {
      url1: "/betterfunds.png",
      name: "BETTER FUNDS",
      type: "Website | Desktop",
      event: "Zilckathon",
      date: "2024",
      view: "https://better-funds.vercel.app/",
      description:
        "Developed in a 24-hour hackathon (Zilckathon - HFT), Better Funds is a blockchain-based incentivized crowdfunding platform. Contributors earn tokens proportional to their contributions, which can be redeemed in a marketplace.",
    },
    {
      url1: "/Sustaina1.png",
      name: "SUS GOALS",
      type: "Website",
      event: "College Project",
      date: "2023",
      view: "https://sus-goals.vercel.app/",
      description:
        "A college project centered on promoting sustainable development goals (SDGs). SUS Goals provides users with daily tasks to complete and keeps a global counter of the tasks completed, thus helping SDG's through an engaging digital experience.",
    },
    {
      url1: "/Drish.png",
      name: "DRISHTI",
      type: "Mobile App",
      event: "Define 2022",
      date: "2022",
      view: "https://github.com/fal3n-4ngel/Drishti-Client",
      description:
        "Drishti simplifies hazard reporting and notifications, focusing on incidents like snapped powerlines or broken pipelines. Developed for Define Hack 2022, it enables users to report hazards, receive alerts, and track report status, while admins manage responses through a web service.",
    },
    {
      url1: "/Ctrack.png",
      name: "C-TRACKER",
      type: "Java | Swing",
      event: "College Project",
      date: "2023",
      view: "https://github.com/fal3n-4ngel/CTracker",
      description:
        "A Java Swing GUI application tailored as an academic-themed task manager. C-Tracker employs SQLite for efficient database management and features tools for adding, editing, deleting, and tracking academic tasks.",
    },
  ];


  // Skill Icons
export const skillIcons: Record<string, IconType> = {
  "Next.js": TbBrandNextjs,
  "Angular.js": SiAngular,
  "React.js": DiReact,
  "Tailwind CSS": SiTailwindcss,
  "TypeScript": SiTypescript,
  ".NET": SiDotnet,
  "Python": DiPython,
  "Blockchain": SiBlockchaindotcom,
  "Solidity": SiSolidity,
  C: SiC,
  Java: DiJava,
  "C#": SiCsharp,
  MongoDB: DiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Firebase: DiFirebase,
  Kotlin: SiKotlin,
  Flutter: SiFlutter,
};



// Project skills Mapping
export const projectSkills: Record<string, string[]> = {
  "FLASH DRIVE": ["Next.js", "Firebase", "Python","Stable Diffusion"],
  "STREAM OWN YOUR OWN": ["Next.js", "TypeScript", "Tailwind CSS"],
  "SMART CERTIFY": ["React.js", "TypeScript", "Blockchain","Solidity","Firebase"],
  "BETTER FUNDS": ["Next.js", "Blockchain","Solidity", "Tailwind CSS", "MongoDB"],
  "SUS GOALS": ["Next.js", "Firebase", "Tailwind CSS","TypeScript"],
  "DRISHTI": ["Flutter", "Firebase","MongoDB"],
  "C-TRACKER": ["Java", "MySQL"],
};
