import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "CodeKenya mentor",
    location: "Nairobi, Kenya",
    description:
      "Mentored young programmers at codeKenya by teaching them data structures and algorithms through leetcode.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Sovren Fx",
    location: "Nairobi, Kenya",
    description:
      "I developed a comprehensive and robust financial model for the commodities markets, enabling accurate forecasting and strategic decision-making for trading and risk management.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Computer Science | University of Nairobi",
    location: "Nairobi, Kenya",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science at the University of Nairobi.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Lizza-Chatbot",
    description:
      "Developed an interactive AI-powered pizza ordering chatbot using NLP, enhancing userengagements and providing real-time assistance.",
    tags: ["Typescript", "Vue.js", "PostgreSQL", "DialogFlow"],
    imageUrl: corpcommentImg,
  },
  {
    title: "E-commerce website",
    description:
      "Developed a scalable and resilient e-commerce platform  and enhanced communication between fronted and backend system improving system performance and speeds.",
    tags: ["Python", "Django", "Next.js", "DRF", "SQLite", "Docker"],
    imageUrl: rmtdevImg,
  },
  {
    title: " Movie filter animation",
    description:
      "Implemented an immersive movie filtering animation feature using React.",
    tags: ["React", "Next.js", "RESTful API", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "RESTful API",
  "MongoDB",
  "Springboot",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;