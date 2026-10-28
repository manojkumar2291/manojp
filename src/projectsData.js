import ecommerce from "./assets/projects/ecommerce.jpeg";
import interest from "./assets/projects/interest.jpeg";
import lab from "./assets/projects/labbooking.webp";

// Add new projects here. Array order controls display order.
// featured: false keeps an older project in All projects and preserves its URL.
// published: false hides a draft from both the listing and its detail route.
// See docs/CONTENT_UPDATES.md for a copyable template and resume instructions.
// Only supplied or existing public URLs belong here. Client source stays private.
export const projects = [
  {
    id: "multi-agent-rag",
    name: "Multi-Agent RAG Document Assistant",
    subtitle: "Plan. Retrieve. Answer. Review.",
    category: "AI / RAG",
    categories: ["AI / ML"],
    featured: true,
    status: "Local prototype",
    icon: "workflow",
    artCaption: "DOCUMENTS → GROUNDED ANSWERS",
    description:
      "A document question-answering API that combines semantic retrieval with LangChain query planning, answer writing, and review. Upload PDF, TXT, or Markdown files and receive an answer with source excerpts, filenames, and page references.",
    techStack: [
      "Python",
      "FastAPI",
      "LangChain",
      "Ollama",
      "Chroma",
      "Hugging Face",
      "Sentence Transformers",
      "Pydantic",
    ],
    highlights: [
      "Three language-agent roles: query planner, answer writer, and reviewer",
      "Persistent Chroma retrieval with optional document-scoped search",
      "Source excerpts with filenames and page metadata",
      "Content-hash deduplication and validated multi-file uploads",
      "Offline integration tests with model replacements",
    ],
    workflow: [
      {
        title: "Ingest documents",
        description:
          "Validate PDF, TXT, or Markdown uploads, extract text, split pages into overlapping chunks, and persist embeddings and source metadata in Chroma. Identical file bytes are not indexed twice.",
      },
      {
        title: "Plan the query",
        description:
          "A LangChain planner uses the local Ollama model to rewrite the question into search terms. The service falls back to the original question if the planner returns empty text.",
      },
      {
        title: "Retrieve evidence",
        description:
          "A retrieval helper searches Chroma using Hugging Face embeddings, optionally restricting results to selected document IDs. This step does not call a language model.",
      },
      {
        title: "Draft and review",
        description:
          "The writer receives the question and labeled excerpts. A separate reviewer revises the draft against the same evidence. The API returns the reviewed answer alongside sources for inspection.",
      },
    ],
    details: [
      {
        title: "Engineering decisions",
        items: [
          "Separate API, configuration, service, and agent modules, with lazy service initialization.",
          "Pydantic request validation, bounded uploads, chunk overlap validation, and explicit API errors.",
          "SHA-256 document IDs, process-local locking, and cleanup after failed indexing batches.",
          "Persistent vector storage retains chunk text and metadata; original uploaded files are not retained.",
        ],
      },
      {
        title: "Testing approach",
        description:
          "The project guide documents offline integration tests using real Chroma storage and LangChain agents with deterministic embedding and model replacements.",
        items: [
          "Upload and question workflows, persistence, deduplication, and document-scoped retrieval.",
          "PDF page metadata, request validation, size limits, and empty-index behavior.",
          "Model-failure handling and cleanup of partially indexed documents.",
        ],
      },
      {
        title: "Current scope",
        items: [
          "A local learning prototype with a shared document collection; authentication and user isolation are not implemented.",
          "The service runs a fixed sequence of roles, rather than an autonomous supervisor or tool-selecting agent.",
          "Scanned PDFs require a separate OCR step. This implementation extracts existing text.",
          "Model review does not guarantee factual accuracy or citation correctness. Returned excerpts allow answers to be checked.",
        ],
      },
    ],
  },
  {
    id: "skin-hair-ai",
    name: "AI-Powered Skin & Hair Chatbot",
    category: "AI / Full Stack",
    categories: ["AI / ML", "Full Stack"],
    icon: "ai",
    description:
      "An AI-powered conversational application providing skin and hair-related assistance through image upload, intelligent question answering, and appointment booking integration.",
    techStack: ["Python", "FastAPI", "LLM Integration", "REST APIs"],
    highlights: [
      "LLM-based conversational assistance",
      "Image upload functionality",
      "FastAPI backend",
      "Appointment booking",
      "Deployment using Coolify",
    ],
  },
  {
    id: "voice-commerce",
    name: "Voice-Based E-Commerce Ordering",
    category: "AI / Machine Learning",
    categories: ["AI / ML"],
    icon: "voice",
    description:
      "A voice-based e-commerce ordering project exploring speech feature extraction and machine learning to provide a more natural shopping interaction.",
    techStack: ["Python", "Machine Learning", "MFCC", "Speech Processing"],
    highlights: [
      "Mel-Frequency Cepstral Coefficients",
      "Speech processing",
      "Voice-based interactions",
      "Machine learning concepts",
    ],
  },
  {
    id: "mindspectrum",
    name: "Mindspectrum",
    subtitle: "Therapy Management Platform",
    category: "Full Stack / Healthcare",
    categories: ["Full Stack", "Healthcare"],
    icon: "health",
    description:
      "A multi-tenant therapy management platform supporting clinic administration, therapist management, student records, appointment scheduling, and therapy session workflows.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    highlights: [
      "Multi-tenant architecture",
      "Role-based access control",
      "Therapist and student management",
      "Appointment and session scheduling",
      "Progress-tracking workflows",
    ],
  },
  {
    id: "6",
    name: "Diagnostic Lab Booking Platform",
    category: "Full Stack / Healthcare",
    categories: ["Full Stack", "Healthcare"],
    image: lab,
    description:
      "A diagnostic lab booking platform connecting users with laboratories and supporting test bookings, payments, reporting, and laboratory operations.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Razorpay",
      "MSG91",
    ],
    highlights: [
      "Lab and test discovery",
      "Online booking",
      "Razorpay integration",
      "OTP and SMS integration",
      "Role-based authentication",
      "Report management",
      "Pilot supporting more than 100 bookings",
    ],
  },
  {
    id: "eira-care",
    name: "EIRA Care",
    subtitle: "Healthcare CRM",
    category: "Full Stack / Healthcare",
    categories: ["Full Stack", "Healthcare"],
    icon: "crm",
    description:
      "A healthcare lead management platform supporting lead qualification, referrals, follow-ups, staff assignments, attachments, and patient service coordination.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL"],
    highlights: [
      "Lead management",
      "Role-based dashboards",
      "Referral workflows",
      "Follow-up scheduling",
      "Activity tracking",
      "Document management",
    ],
  },
  {
    id: "insurance-leads",
    name: "Insurance Leads Management Platform",
    category: "Full Stack",
    categories: ["Full Stack"],
    icon: "leads",
    description:
      "An admin and partner management platform for processing insurance leads, monitoring lead status, exporting data, and integrating external partners.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL"],
    highlights: [
      "Admin and partner dashboards",
      "Lead status management",
      "API key integrations",
      "Webhooks",
      "CSV export",
    ],
  },
  {
    id: "1",
    // featured: false,
    name: "E-Commerce Web Application",
    category: "Web Application",
    categories: ["Web Applications"],
    image: ecommerce,
    description:
      "A responsive e-commerce application with an intuitive shopping interface.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    highlights: ["Responsive shopping interface", "JWT authentication"],
    source_code_link: "https://github.com/manojkumar2291/vibe",
    live_demo_link: "https://vibe-nine-omega.vercel.app/",
  },
  {
    id: "2",
    // featured: false,
    name: "Interest Calculator",
    category: "Web Application",
    categories: ["Web Applications"],
    image: interest,
    description:
      "An interactive interest calculation application with a simple, responsive interface.",
    techStack: ["React.js", "Tailwind CSS", "Vite", "jsPDF"],
    highlights: [
      "Simple and compound interest",
      "Year, month, and day breakdowns",
      "Downloadable PDF calculations",
    ],
    source_code_link: "https://github.com/manojkumar2291/interest_calculator",
    live_demo_link: "https://interest-calculator-ecru.vercel.app/",
  },
];

// Defaults keep additions simple: a project is published and featured unless
// explicitly disabled. Derive categories so future additions need no UI changes.
export const publishedProjects = projects.filter(
  (project) => project.published !== false,
);
export const featuredProjects = publishedProjects.filter(
  (project) => project.featured !== false,
);
export function getProjectFilters(catalog) {
  return ["All", ...new Set(catalog.flatMap((project) => project.categories))];
}
