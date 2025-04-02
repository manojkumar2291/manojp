// src/projectsData.js

import manoj from './assets/manoj.jpg'; 
import ecommerce from './assets/projects/ecommerce.jpeg'
import interest from './assets/projects/interest.jpeg'
import mail from './assets/projects/mail.jpeg'
import weather from './assets/projects/weather.png'
import todo from './assets/projects/todo.jpeg' // Adjust the path to your image

export const projects = [
  
  {
    id: '1',
    name: "E-Commerce Application",
    description: "A fully functional e-commerce platform built using the MERN stack with JWT authentication.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    image: ecommerce,  // Add the image
    source_code_link: "https://github.com/manojkumar2291/vibe",
    live_demo_link: "https://vibe-nine-omega.vercel.app/",
  },
  {
    id: '2',
    name: "Interest Calculator",
    description: "I developed a Simple & Compound Interest Calculator web app to help users instantly calculate interest with a detailed breakdown for each year, month, and day. The app provides a clean, responsive UI and allows users to download the calculation as a PDF for future reference.",
    techStack: [, "Reactc.js","Tailwind.css","vite","jsPDF"],
    image: interest,  // Add the image
    source_code_link: "https://github.com/manojkumar2291/interest_calculator",
    live_demo_link: "https://interest-calculator-ecru.vercel.app",
  },
  {
    id: '3',
    name: "Todo App",
    description: "A task management mobile app built with React Native for managing to-do lists and reminders.",
    techStack: ["React.js", "MongoDB", "Node.js"],
    image: todo,  // Add the image
    source_code_link: "https://github.com/manojkumar2291/todo-mern",
    live_demo_link: "https://todo-mern-beryl.vercel.app",
  },
  {
    id: '4',
    name: "Weather Forecast App",
    description: "A weather forecasting app built using React, providing real-time weather updates via an API.",
    techStack: ["React", "API", "JavaScript"],
    image: weather,  // Add the image
    source_code_link: "https://github.com/manojkumar2291/weather_application/tree/main/weather",
    live_demo_link: "https://github.com/manojkumar2291/weather_application/tree/main/weather",
  },
  
  {
    id: '5',
    name: "Mail-System",
    description: "Mail-System is an email management system that enables users to send and organize emails efficiently. Built using SMTP for email handling, SQL for data storage, and React for a modern frontend, this project ensures reliable email communication with a user-friendly interface.",
    techStack: ["React.js", "SQL", "SMTP", "Node.js","Express.js"],
    image: mail,  // Add the image
    source_code_link: "https://github.com/manojkumar2291/Mail-System",
    live_demo_link: "https://github.com/manojkumar2291/Mail-System",
  },
];
