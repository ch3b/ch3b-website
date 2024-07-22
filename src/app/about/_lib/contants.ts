export const summary = "Blah blah hello hello";

const awazeDesc: string[] = [
  "Developed a brand-agnostic search engine solution for high-traffic websites.",
  "Backend development with Kotlin and Quarkus for APIs; maintained legacy Clojure services for data transformation.",
  "Used Opensearch to store property and availability data, building and updating indexes with services written in Kotlin. Implemented a long-running task to process updates by consuming events from another internal team.",
  "Built infrastructure with Terraform and deployed APIs/services on AWS ECS and EC2.",
  "Automated deployments and tasks using GitHub Actions.",
  "Used collaborative practices such as mob and pair programming, with a strong focus on TDD to create thorough unit, integration, and end-to-end tests.",
  "Provided 24-hour on-call support to promptly address and resolve outages.",
];

const thgDesc: string[] = [
  "Contributed to various projects, including THG’s procurement management application.",
  "Engaged in full-stack development using Java/Spring Boot for backend and Typescript/Angular for responsive UIs.",
  "Reworked the application security, introducing endpoint and method level authorization.",
  "Served as Scrum Master, ensuring timely project delivery and effective team collaboration.",
  "Provided 24-hour on-call support to quickly address and resolve outages.",
  "Collaborated with multiple teams to ensure seamless system and application integration.",
];

const apadmiDesc: string[] = [
  "Developed a native Android app in three months, and added new features to existing iOS apps.",
  "Used MVVM design pattern for app development.",
  "Worked with cross-functional teams to define, design, and launch new features.",
  "Ensured apps were accessible and responsive.",
];

export const workExperiences = [
  {
    companyName: "Awaze",
    startDate: "Oct 2023",
    endDate: "Present",
    role: "Software Developer",
    description: awazeDesc,
    techStack: ["Kotlin", "OpenSearch", "AWS", "Docker", "Quarkus"],
  },
  {
    companyName: "THG",
    startDate: "Jun 2021",
    endDate: "Oct 2023",
    role: "Software Developer",
    description: thgDesc,
    techStack: [
      "Java",
      "Angular",
      "Spring",
      "Docker",
      "K8s",
      "Jenkins",
      "PostgreSQL",
    ],
  },
  {
    companyName: "Apadmi",
    startDate: "Jul 2020",
    endDate: "Jun 2020",
    role: "Graduate Software Developer",
    description: apadmiDesc,
    techStack: ["Kotlin", "Swift", "Android", "iOS", "Firebase"],
  },
];
