import { Project, Skill, Experience } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MySQL",
    technologies: ["React", "Node.js", "MySQL", "Express"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://yourapp.com",
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/yourusername/taskapp",
    liveUrl: "https://taskapp.com",
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    image: "/project3.jpg"
  }
];

export const skills: Skill[] = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "PHP", level: 85, category: "Backend" },
  { name: "MySQL", level: 88, category: "Database" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Git", level: 90, category: "Tools" }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    position: "Full Stack Developer",
    duration: "2022 - Present",
    description: [
      "Developed and maintained web applications using React and PHP",
      "Implemented responsive designs and optimized performance",
      "Collaborated with cross-functional teams to deliver high-quality software"
    ],
    technologies: ["React", "PHP", "MySQL", "JavaScript"]
  },
  {
    id: 2,
    company: "Digital Innovations",
    position: "Frontend Developer",
    duration: "2021 - 2022",
    description: [
      "Built user interfaces with React and modern CSS frameworks",
      "Integrated with RESTful APIs and handled state management",
      "Participated in code reviews and agile development processes"
    ],
    technologies: ["React", "JavaScript", "CSS", "REST APIs"]
  }
];