export const profile = {
  name: "Uday Kiran Polineni",
  shortName: "Uday",
  title: "Software Engineer",
  tagline: "Distributed Systems · Backend · Cloud",
  footerTagline: "Distributed Systems · APIs · Cloud Platforms",
  headline:
    "I build scalable backend services and event-driven systems that stay reliable under load.",
  email: "udayk.polineni@gmail.com",
  phone: "+1 689-280-8131",
  github: "https://github.com/Uday-Polineni/",
  linkedin: "https://www.linkedin.com/in/uday-polineni/",
};

export const about = `Backend Software Engineer with 3+ years of experience designing scalable distributed systems, RESTful APIs, and event-driven architectures in cloud-native environments. I work across Python, Java, Kafka, PostgreSQL, Redis, and AWS — with a focus on throughput, reliability, and clean service design. Passionate about system design, performance optimization, and AI-integrated backend engineering.`;

export const skillMap: { category: string; skills: string[] }[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C#", "JavaScript", "Go", "Bash"],
  },
  {
    category: "Backend Systems",
    skills: ["FastAPI", "Spring Boot", "REST APIs", "Microservices", "Kafka"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    category: "Cloud Platforms",
    skills: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    category: "DevOps & CI/CD",
    skills: ["Terraform", "Jenkins", "CI/CD", "Git", "Azure DevOps"],
  },
  {
    category: "Observability",
    skills: ["Prometheus", "Grafana", "Linux", "System Design"],
  },
  {
    category: "AI / ML",
    skills: ["TensorFlow", "Keras", "CNN", "Transformer NLP", "Generative AI"],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Saayam",
    period: "Feb 2026 — Present",
    yearLabel: "NOW",
    highlights: [
      "Built backend APIs and internal services with Python, FastAPI, and PostgreSQL for workflow automation.",
      "Cut API response latency ~25% via query optimization and Redis caching for hot paths.",
      "Deployed and monitored services on AWS (EC2, S3, RDS) with 99%+ production uptime.",
      "Partnered with frontend and cross-functional teams on features, incidents, and CI/CD via Git and Azure DevOps.",
    ],
  },
  {
    role: "Teaching Assistant (Database Systems)",
    company: "Florida Institute of Technology",
    period: "Aug 2025 — Dec 2025",
    yearLabel: "2025",
    highlights: [
      "Assisted in teaching Database Systems for graduate and undergraduate students.",
      "Held office hours and supported students with assignments, projects, and exams.",
      "Graded coursework and provided feedback to improve student learning outcomes.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Ramco Systems",
    period: "Mar 2022 — Aug 2024",
    yearLabel: "2022",
    highlights: [
      "Architected distributed backend services handling thousands of requests per minute.",
      "Reduced production latency 30–35% through schema redesign and query optimization across PostgreSQL and SQL Server.",
      "Built event-driven pipelines with Kafka for responsiveness and fault tolerance under high load.",
      "Owned full service lifecycle and on-call support, sustaining 99.9% uptime.",
      "Improved CI/CD with Git and Azure DevOps, cutting deployment failures ~60%.",
    ],
  },
];

export const whatIDo = [
  {
    title: "Backend Engineering",
    description:
      "Designing and shipping scalable backend services — REST APIs, microservices, and event-driven pipelines that stay reliable under production load.",
    bullets: [
      "FastAPI & Spring Boot service development",
      "Kafka event streaming & async processing",
      "Auth, rate limiting & API gateway patterns",
    ],
  },
  {
    title: "Database Systems",
    description:
      "Modeling data layers for performance and consistency — from schema design and indexing to caching strategies that cut latency on hot paths.",
    bullets: [
      "PostgreSQL schema design & query optimization",
      "Redis caching & session management",
      "Migrations, replication & data integrity",
    ],
  },
  {
    title: "Full Stack Delivery",
    description:
      "End-to-end ownership from API contracts to deployed UIs — integrating React frontends with backend services and cloud infrastructure.",
    bullets: [
      "React + TypeScript frontend integration",
      "Docker, AWS & CI/CD deployment pipelines",
      "Live demos, monitoring & production hardening",
    ],
  },
];

export const education = [
  {
    degree: "Master's, Computer Science",
    school: "Florida Institute of Technology",
    period: "Aug 2024 — Dec 2025",
    yearLabel: "2024",
    detail: "GPA 3.7 / 4.0",
    heroLine: "MS Computer Science · Florida Tech",
  },
  {
    degree: "Bachelor's, Electronics & Communication",
    school: "Amrita School of Engineering",
    period: "Jul 2018 — Jun 2022",
    yearLabel: "2018",
    detail: "",
    heroLine: "",
  },
];

export type CareerTimelineItem = {
  kind: "work" | "education";
  yearLabel: string;
  role: string;
  organization: string;
  period: string;
  highlights?: string[];
  detail?: string;
};

/** Chronological career + education timeline (oldest → newest). */
export const careerTimeline: CareerTimelineItem[] = [
  {
    kind: "education",
    yearLabel: education[1].yearLabel,
    role: education[1].degree,
    organization: education[1].school,
    period: education[1].period,
  },
  {
    kind: "work",
    yearLabel: experience[2].yearLabel,
    role: experience[2].role,
    organization: experience[2].company,
    period: experience[2].period,
    highlights: experience[2].highlights,
  },
  {
    kind: "education",
    yearLabel: education[0].yearLabel,
    role: education[0].degree,
    organization: education[0].school,
    period: education[0].period,
    detail: education[0].detail,
  },
  {
    kind: "work",
    yearLabel: experience[1].yearLabel,
    role: experience[1].role,
    organization: experience[1].company,
    period: experience[1].period,
    highlights: experience[1].highlights,
  },
  {
    kind: "work",
    yearLabel: experience[0].yearLabel,
    role: experience[0].role,
    organization: experience[0].company,
    period: experience[0].period,
    highlights: experience[0].highlights,
  },
];

export const projects = [
  {
    title: "Enterprise Knowledge Assistant",
    subtitle: "Multi-Tenant RAG Platform",
    highlight: true,
    category: "AI · Full Stack",
    bullets: [
      "Multi-tenant knowledge assistant with JWT + RBAC, org-scoped vectors, and citation-backed SSE chat.",
      "Hybrid retrieval merges Chroma embeddings with PostgreSQL FTS via reciprocal rank fusion.",
      "Redis exact and semantic answer caching with org-wide invalidation on document changes.",
      "Async PDF ingestion through ARQ workers, structure-aware chunking, and GitHub Actions deploy to EC2.",
    ],
    tech: ["FastAPI", "PostgreSQL", "ChromaDB", "Redis", "React"],
    link: "https://github.com/Uday-Polineni/Multi-Tenant-Enterprise-Knowledge-Platform-RAG-",
    demoUrl: "http://ec2-3-141-104-224.us-east-2.compute.amazonaws.com/login",
    previewImage: "/projects/knowledge-assistant.png",
  },
  {
    title: "LinkForge",
    subtitle: "Scalable URL Shortener",
    highlight: true,
    category: "Backend · Java",
    bullets: [
      "Cache-first redirects with Redis on the hot path; PostgreSQL only on cache miss.",
      "Per-user link ownership with session login, SHA-256 API keys, and Redis rate limiting.",
      "Async click analytics via Redis counters and an event queue, flushed to Postgres every 30s.",
      "Live WebSocket analytics dashboard, QR codes, and Prometheus metrics via Spring Actuator.",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Flyway"],
    link: "https://github.com/Uday-Polineni/scalable-url-shortener",
    demoUrl: "http://ec2-52-15-177-183.us-east-2.compute.amazonaws.com/login",
    previewImage: "/projects/linkforge.png",
  },
  {
    title: "Stock Market Kafka Pipeline",
    subtitle: "Event Streaming",
    highlight: false,
    category: "Event Streaming",
    bullets: [
      "Streams live stock market prices through Apache Kafka for real-time processing.",
      "Decouples producers and consumers for scalable, fault-tolerant event delivery.",
      "Processes and persists tick data for downstream analytics and storage.",
      "Demonstrates event-driven architecture patterns for high-throughput data pipelines.",
    ],
    tech: ["Python", "Kafka", "Data Pipeline"],
    link: "https://github.com/Uday-Polineni/Stock_Market_Kafka_Project",
  },
];

export const navLinks = [
  { label: "What I Do", href: "#what-i-do" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
