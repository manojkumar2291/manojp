export const profile = {
  name: "Podapati Manoj Kumar",
  displayName: "Manoj Kumar",
  email: "podapatimanoj22@gmail.com",
  github: "https://github.com/manojkumar2291",
  linkedin: "https://www.linkedin.com/in/podapati-manoj-kumar-2718a1249/",
  // Replace public/resume.pdf to update the download; no component changes needed.
  // Set to null to show the unavailable placeholder. See docs/CONTENT_UPDATES.md.
  resume: "/resume.pdf",
};
export const heroTitles = [
  "AI / GenAI Engineer",
  "Full-Stack Software Developer",
  "Python & FastAPI Developer",
  "React.js & Node.js Developer",
  "LLM & RAG Enthusiast",
];
export const skillGroups = [
  {
    name: "Languages",
    icon: "code",
    skills: ["Python", "JavaScript", "Java", "SQL"],
  },
  {
    name: "Frontend",
    icon: "frontend",
    skills: ["React.js", "HTML5", "CSS3", "Material UI", "Ant Design"],
  },
  {
    name: "Backend",
    icon: "backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  },
  { name: "Database", icon: "database", skills: ["MySQL", "Redis"] },
  {
    name: "Tools & Deployment",
    icon: "tools",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "CloudPanel",
      "PM2",
      "Vercel",
      "Coolify",
      "Postman",
    ],
  },
  {
    name: "AI & Generative AI",
    icon: "ai",
    label: "HANDS-ON PROJECT EXPERIENCE",
    skills: [
      "Retrieval-Augmented Generation",
      "LangChain",
      "Ollama",
      "Chroma",
      "Hugging Face Embeddings",
      "Sentence Transformers",
      "Multi-Agent Workflows",
      "Prompt Engineering",
      "MFCC / Speech Processing",
    ],
  },
  {
    name: "AI / ML — Continued Learning",
    icon: "workflow",
    learning: true,
    skills: [
      "LangGraph",
      "LLM Fine-Tuning",
      "scikit-learn",
      "Tool-Using AI Agents",
    ],
  },
];
export const focusAreas = [
  {
    title: "Retrieval-Augmented Generation",
    icon: "database",
    status: "PROJECT EXPERIENCE",
    description:
      "Built document ingestion, chunking, retrieval, and source-backed question answering in a FastAPI RAG prototype.",
  },
  {
    title: "LLM Applications",
    icon: "ai",
    status: "PROJECT EXPERIENCE",
    description:
      "Connected local Ollama models to LangChain roles for query planning, answer writing, and review.",
  },
  {
    title: "LangChain & LangGraph",
    icon: "workflow",
    status: "BUILDING & EXPLORING",
    description:
      "Implemented a sequential LangChain workflow. Continuing to explore explicit state and orchestration with LangGraph.",
  },
  {
    title: "AI Agents",
    icon: "code",
    status: "BUILDING & EXPLORING",
    description:
      "Built planner, writer, and reviewer roles in a service-controlled pipeline. Exploring tool-using agents next.",
  },
  {
    title: "Vector Search",
    icon: "search",
    status: "PROJECT EXPERIENCE",
    description:
      "Used Hugging Face embeddings and persistent Chroma similarity search, including document-scoped retrieval.",
  },
  {
    title: "LLM Fine-Tuning",
    icon: "tools",
    description:
      "Learning how task-specific training data and evaluation can adapt model behavior.",
  },
];
// Project-based responsibilities: no employer, dates, or tenure are asserted.
export const experience = [
  {
    title: "Multi-agent RAG & document intelligence",
    context: "FastAPI · LangChain · Ollama · Chroma",
    points: [
      "Built a local document question-answering prototype with planning, retrieval, writing, and review stages.",
      "Implemented validated uploads, persistent vector search, document deduplication, and source metadata.",
      "Designed offline integration tests for API workflows and storage using model replacements.",
    ],
  },
  {
    title: "Full-stack applications & healthcare systems",
    context: "Mindspectrum · Diagnostic Lab Booking · EIRA Care",
    points: [
      "Built React-based administrative dashboards and multi-role workflows.",
      "Developed and integrated RESTful APIs; designed MySQL schemas and queries.",
      "Implemented JWT authentication, role-based access, and multi-tenant workflows.",
    ],
  },
  {
    title: "Integrations & deployed services",
    context: "Payments · Communications · AI applications",
    points: [
      "Integrated Razorpay payments and MSG91 OTP and SMS services.",
      "Developed scheduling, reporting, referral, and lead management workflows.",
      "Debugged and deployed applications on Linux servers, including AI services using Coolify.",
    ],
  },
];
