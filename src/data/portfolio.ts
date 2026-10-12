export const profile = {
  name: "Janine Ubal",
  title: "Full-Stack Software Engineer",
  location: "Cebu City, Philippines",
  employer: "Sprobe Inc.",
  // Leave empty until real personal details are available.
  email: "janineubal9@gmail.com",
  github: "https://github.com/ninbal",
  linkedin: "https://www.linkedin.com/in/janine-ubal-a586372b0/",
  resume: "/resume/janine-ubal-resume.pdf",
  photo: "/images/myphoto.png",
  openToOpportunities: true,
  description:
    "I build reliable, responsive, and user-focused web applications using React, Next.js, TypeScript, and modern backend technologies.",
  about:
    "I'm a software engineer based in Cebu City, Philippines, with professional experience since July 2024 developing and maintaining enterprise web applications. My primary focus is frontend development using React, Next.js, and TypeScript, while also contributing to backend functionality, API integrations, and complex business workflows.",
};

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  year: string;
  summary: string;
  technologies: string[];
  role: string;
  contributions: string[];
  challenges: { title: string; problem: string; solution: string }[];
  kind: "workforce" | "training";
}
export const projects: Project[] = [
  {
    slug: "workforce-management",
    kind: "workforce",
    shortTitle: "People, processes,\nand everything in between.",
    title: "Foreign-Worker Recruitment & Immigration Management Platform",
    year: "2025 – Present",
    summary:
      "An enterprise web application supporting personnel management, recruitment, affiliated workplaces, and immigration-related document workflows.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Ant Design",
      "Node.js",
      "ArangoDB",
      "REST APIs",
      "Docker",
      "Git",
    ],
    role: "Contributed to frontend features, API-integrated workflows, document accuracy, and ongoing maintenance based on QA and UAT feedback.",
    contributions: [
      "Developed and maintained personnel and affiliated-workplace management features.",
      "Implemented role-based user and sub-account management workflows.",
      "Worked on create, edit, detail, validation, searching, and filtering functionality.",
      "Improved PDF and Excel document-generation accuracy.",
      "Fixed autofill and field-mapping issues.",
      "Improved synchronization of updated personnel information across existing forms.",
      "Implemented Japanese and multilingual UI and document-related fixes.",
      "Worked on notification behavior and read-state handling.",
      "Investigated QA/UAT feedback and implemented regression fixes.",
    ],
    challenges: [
      {
        title: "Keeping personnel details consistent",
        problem:
          "Updated personnel information needed to remain synchronized across existing application forms.",
        solution:
          "Improved synchronization and fixed autofill and field-mapping issues to keep personnel information consistent across forms.",
      },
      {
        title: "Accuracy across documents and languages",
        problem:
          "PDF and Excel generation and multilingual interfaces required corrections identified during QA and UAT.",
        solution:
          "Improved document-generation accuracy, implemented Japanese and multilingual fixes, and addressed regression feedback.",
      },
      {
        title: "Reliable notification states",
        problem:
          "Notification behavior and read-state handling needed maintenance.",
        solution:
          "Worked on notification behavior and read-state handling as part of ongoing application fixes.",
      },
    ],
  },
  {
    slug: "bcp-training",
    kind: "training",
    shortTitle: "Preparing teams\nfor the unexpected.",
    title: "AI-Assisted Business Continuity Training Platform",
    year: "2024 - 2025",
    summary:
      "An enterprise platform that helps organizations conduct emergency-preparedness training through scenario-based exercises, evaluations, and reporting.",
    technologies: [
      "React",
      "JavaScript",
      "Material UI",
      "Laravel",
      "PHP",
      "MySQL",
      "i18next",
      "Docker",
      "MailHog",
      "Git",
    ],
    role: "Developed responsive frontend interfaces and contributed Laravel backend and API changes. Participated in AWS EC2 deployment under technical-lead guidance.",
    contributions: [
      "Developed responsive interfaces for training lists, training plans, evaluations, results, and modals.",
      "Improved PDF exports by fixing page breaks, text overflow, margins, images, and missing responses.",
      "Implemented English/Japanese localization.",
      "Developed Group Admin and company-management functionality across frontend and backend.",
      "Improved dashboards and organizational filtering.",
      "Enhanced training-session usability with image zoom, resizable inputs, timers, and validation messages.",
      "Implemented Laravel backend and API changes.",
      "Improved API security by preventing password hashes from being included in responses.",
      "Participated in AWS EC2 deployment under technical-lead guidance.",
    ],
    challenges: [
      {
        title: "Readable dynamic PDF reports",
        problem:
          "Exported reports had page-break, text-overflow, margin, image, and missing-response issues.",
        solution:
          "Fixed these PDF export issues so dynamic training content could be represented more accurately.",
      },
      {
        title: "Usability across languages and sessions",
        problem:
          "Training interfaces needed English/Japanese localization and improvements to session interactions.",
        solution:
          "Implemented localization and enhanced image zoom, resizable inputs, timers, and validation messages.",
      },
      {
        title: "Appropriate API response content",
        problem: "Password hashes were being included in API responses.",
        solution:
          "Implemented API changes to prevent password hashes from being returned.",
      },
    ],
  },
];
export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
      "Ant Design",
    ],
  },
  { title: "Backend", items: ["Laravel", "PHP", "Node.js", "REST APIs"] },
  { title: "Databases", items: ["MySQL", "ArangoDB"] },
  { title: "Tools", items: ["Git", "GitHub", "Docker", "VS Code"] },
  {
    title: "Other experience",
    items: [
      "Responsive Web Design",
      "i18n / Localization",
      "PDF Generation",
      "Excel Generation",
      "Form Validation",
      "Role-Based Access Control",
      "AWS EC2 deployment exposure",
    ],
  },
];
