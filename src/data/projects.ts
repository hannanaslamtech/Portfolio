export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Egency Eleva",
    description: "Developed a comprehensive marketing portal with secure login system that handles complete social media management through monthly subscriptions. The platform manages strategy, content creation, publishing, and artistic direction to ensure consistent and impactful communication. For one-time needs, I implemented 'one-shot' packages allowing clients to create extensive content in single sessions including photos, videos, and drone footage. The system also includes modern website design capabilities and services for visual identity, digital strategy, and marketing to refine company DNA and maximize online impact. Built with JWT authentication, form validation, and a robust backend API for managing user data and sessions.",
    image: "/imgs/p6.png",
    tags: ["React", "Node.js", "Express", "JWT", "MongoDB", "Tailwind css"],
    links: {
      github: "",
      live: "https://dev.agencyeleva.com/signin",
    },
  },

  {
    id: 2,
    title: "Value For Money (VFM) Analysis WWF - PAKISTAN",
    description: "Developed an internal system for WWF Pakistan's Value for Money project team to track progress and expenditure data across different regions. The role-based application allows team members to enter their project progress, spent expenditure, and analyze cost-benefit feasibility. Features include a dynamic dashboard with 15+ customizable reports, automated data processing, and regional project comparison tools. Built with Vite React (TypeScript), Node.js (Express), and MySQL, achieving 65% reduction in manual effort through automated scripts and streamlined data entry workflows.",
    image: "/imgs/p1.png",
    tags: ["React", "TypeScript", "Node", "Express", "MySQL", "Vite", "Restful API"],
    links: {
      github: "",
      live: "https://vfm.astlinks.com/auth/signin",
    },
  },
  {
    id: 2,
    title: "Zenav",
    description: "Developed a modern client marketing website using Next.js, Framer Motion, and Tailwind CSS. Created responsive and user-friendly interfaces for admin and user panels by replicating Figma designs with high accuracy. Implemented smooth animations and transitions using Framer Motion to enhance user experience. The website showcases Zenav's aviation services and includes a developer portal (zera.zenav.aero) with API access, documentation, and integration tools for aviation data and compliance information.",
    image: "/imgs/p4.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    links: {
      github: "",
      live: "https://zenav.aero/",
    },
  },
  {
    id: 3,
    title: "Rawalpindi Development Authority (RDA) - Pakistan",
    description: "Developed a comprehensive digital platform for Rawalpindi Development Authority to handle online society registration applications. The role-based application system allows users to submit registration applications online, which then go through multiple approval levels before final certification. Implemented secure authentication, document management, and workflow automation to streamline the registration process. Built with React, Node.js, Express, SQL, and Tailwind CSS to provide a modern, responsive interface for both applicants and administrative users.",
    image: "/imgs/p5.png",
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind css"],
    links: {
      github: "",
      live: "https://rda.ast.com.pk/auth/signin",
    },
  },
  {
    id: 4,
    title: "Maintained 'ADRS' (Punjab Government)",
    description: "Maintained and provided ongoing support for the Animal Disease Reporting System (ADRS), a comprehensive livestock management platform for the Punjab Government. Responsibilities included bug resolution, feature enhancements, system optimization, and ensuring smooth daily operations. Worked with existing jQuery, .NET, and Bootstrap codebase to improve system reliability and user experience while maintaining data integrity and compliance with government standards.",
    image: "/imgs/p3.png",
    tags: ["jQuery", ".NET", "Window Server", "Bootstrap"],
    links: {  
      github: "",
      live: "https://adrspunjab.gov.pk/Account/LogIn"
    },
  },
  {
    id: 5,
    title: "WAPDA Administrative Staff College, Islamabad",
    description: "A system for managing internal employee trainingand promotion tests, leveraging React JSX, Tailwind CSS, Node.js (Express), and MongoDB.",
    image: "/imgs/p2.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind css", "Restful API"],
    links: {
      github: "",
      live: "https://tms.astlinks.com/",
    },
  },
];
