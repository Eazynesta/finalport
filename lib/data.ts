import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blockchain from "@/public/blockchain.jpg";
import vector from "@/public/vector.jpg";
import adblock from "@/public/adblock.jpg";

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
    title: "Custom Blockchain Implementation",
    description:
      "Developed a decentralized blockchain platform using JavaScript with an Angular-based user interface for secure and transparent transaction management.",
    tags: ["Javascript", "Angular", "Express", "Node"],
    imageUrl: blockchain,
  },
  {
    title: "Vector Space Indexing Engine",
    description:
      "Developed a scalable and resilient e-commerce platform  and enhanced communication between fronted and backend system improving system performance and speeds.",
    tags: ["Python", "Django", "Next.js", "DRF", "SQLite", "Docker"],
    imageUrl: vector,
  },
  {
    title: " Ad Blocking Extension",
    description:
      "Implemented an immersive movie filtering animation feature using React.",
    tags: ["React", "Next.js", "RESTful API", "Framer"],
    imageUrl: adblock,
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