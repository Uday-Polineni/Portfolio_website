export const profile = {
  name: "Uday Kiran Polineni",
  shortName: "Uday",
  title: "Software Engineer",
  tagline: "Distributed Systems · Backend · Cloud",
  footerTagline: "Distributed Systems · APIs · Cloud Platforms",
  headline:
    "I build scalable backend services and event-driven systems that stay reliable under load.",
  email: "udaypolinenik@gmail.com",
  phone: "+1 689-280-8131",
  github: "https://github.com/Uday-Polineni/",
  linkedin: "https://www.linkedin.com/in/uday-polineni/",
};

export const about = `Backend Software Engineer with experience building scalable distributed systems, RESTful APIs, and event-driven architectures. I work across Python, FastAPI, Java, .NET, Kafka, PostgreSQL, SQL Server, Redis, and AWS — with a focus on throughput, reliability, and production backend design.`;

export const skillMap: { category: string; skills: string[] }[] = [
  {
    category: "languages",
    skills: ["Python", "C#", "Java", "JavaScript"],
  },
  {
    category: "frameworks",
    skills: [
      "FastAPI",
      "Spring Boot",
      ".NET",
      "REST APIs",
      "Apache Kafka",
      "Microservices",
      "Alembic",
      "Flyway",
    ],
  },
  {
    category: "databases",
    skills: ["PostgreSQL", "SQL Server", "Redis"],
  },
  {
    category: "cloud",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "Aurora",
      "React",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "CI/CD",
      "Git",
    ],
  },
  {
    category: "ai",
    skills: [
      "RAG",
      "LLM APIs",
      "pytest",
      "Data Structures & Algorithms",
      "System Design",
      "Linux",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Saayam",
    period: "Feb 2026 — Present",
    yearLabel: "NOW",
    highlights: [
      "Developed Python FastAPI microservices and 15+ REST APIs for workflow automation, with modular service boundaries, input validation, and centralized error handling in production.",
      "Engineered Apache Kafka event pipelines processing 10K+ activity events daily across microservices, replacing synchronous inter-service calls for asynchronous workflow automation.",
      "Operated 4+ production microservices on AWS (EC2, Aurora, RDS, S3) with GitHub Actions CI/CD, sustaining 99%+ uptime and supporting weekly production releases.",
      "Built React workflow UI modules integrated with FastAPI REST APIs, delivering production dashboards and form flows for operations teams.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Florida Institute of Technology",
    period: "Aug 2025 — Dec 2025",
    yearLabel: "2025",
    highlights: [
      "Built Python scripts with LLM-based rubric evaluation to automate assignment grading, reducing manual review time ~50% while maintaining ~90%+ agreement with instructor scores across 100+ submissions per term.",
      "Developed prompt regression and guardrail tests in Python for the grading agent, validating structured rubric outputs and blocking hallucinated feedback on edge-case submissions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Ramco Systems",
    period: "Mar 2022 — Aug 2024",
    yearLabel: "2022",
    highlights: [
      "Developed .NET backend services and REST APIs for aircraft maintenance MRO work orders, maintenance tasks, and operational workflows used by airline maintenance teams in production.",
      "Maintained large-scale production backend infrastructure across REST APIs, batch workers, and relational data stores, supporting 5K+ daily records across multiple enterprise customers under peak load.",
      "Improved database performance ~30–35% on critical maintenance paths by optimizing 15+ stored procedures and SQL queries across SQL Server.",
      "Accelerated heavy maintenance batch workloads using multithreading and parallel processing, reducing batch job runtime ~30–40% while managing throughput vs lock contention tradeoffs.",
    ],
  },
];

export const whatIDo = [
  {
    title: "Backend Engineering",
    description:
      "Designing and shipping scalable backend services — REST APIs, microservices, and event-driven pipelines that stay reliable under production load.",
    bullets: [
      "FastAPI, Spring Boot & .NET service development",
      "Apache Kafka event streaming & async processing",
      "Auth, rate limiting & API design patterns",
    ],
  },
  {
    title: "Database Systems",
    description:
      "Modeling data layers for performance and consistency — from schema design and indexing to caching strategies that cut latency on hot paths.",
    bullets: [
      "PostgreSQL & SQL Server query optimization",
      "Redis caching & session management",
      "Alembic, Flyway migrations & data integrity",
    ],
  },
  {
    title: "Full Stack Delivery",
    description:
      "End-to-end ownership from API contracts to deployed UIs — integrating React frontends with backend services and cloud infrastructure.",
    bullets: [
      "React frontend integration with FastAPI APIs",
      "Docker, AWS & GitHub Actions deployment pipelines",
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
      "Built multi-tenant knowledge assistant with JWT/RBAC, hybrid RAG retrieval (vector + Postgres FTS + RRF), and async PDF ingest via ARQ workers; deployed on AWS EC2 with Docker Compose and GitHub Actions CI/CD.",
      "Improved grounded Q&A accuracy from 85/100 to 95/100 on a 100-question regression suite across 3 isolated orgs; verified tenant isolation with 0 cross-tenant answer leaks.",
      "Implemented Redis exact/semantic caching for ~50 ms repeat-query responses, SSE streaming chat with inline PDF citations, and RBAC-scoped document library.",
    ],
    tech: ["FastAPI", "PostgreSQL", "Alembic", "Redis", "ChromaDB", "React"],
    link: "https://github.com/Uday-Polineni/Multi-Tenant-Enterprise-Knowledge-Platform-RAG-",
    demoUrl: "http://ec2-3-141-104-224.us-east-2.compute.amazonaws.com/login",
    previewImage: "/projects/knowledge-assistant.png",
  },
  {
    title: "Scalable URL Shortener",
    subtitle: "Production URL Shortener",
    highlight: true,
    category: "Backend · Java",
    bullets: [
      "Built production-style URL shortener with cache-first 302 redirects, per-user link ownership, Spring Security auth, SHA-256 API keys, and Redis rate limiting; deployed on AWS EC2 with Docker Compose.",
      "Managed PostgreSQL schema through Flyway migrations; kept redirect hot path DB-free via Redis URL cache and click counters, flushing analytics to Postgres every 30s with scheduled background jobs.",
      "Load-tested cache-hit redirects at ~820 req/s (p95 93 ms); exposed Prometheus metrics via Spring Actuator and WebSocket-driven live analytics dashboards.",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Flyway", "Redis", "Docker"],
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
