import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yourwebsite.com",
  location: "Your City",
  locationLink: "https://www.google.com/maps/place/yourcity",
  description:
    "A passionate developer and student exploring web technologies and building cool things.",
  summary:
    "Write your personal story here. Share your background, interests, and what drives you. This is your chance to tell visitors who you are and what you care about.",
  avatarUrl: "/me.jpeg",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/showcase", icon: SparklesIcon, label: "Showcase" },
  ],
  contact: {
    email: "your.email@example.com",
    tel: "+1-XXX-XXX-XXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yrnrkv",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:your.email@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  technicalExperience: [
    {
      company: "Company Name",
      href: "https://example.com",
      badges: [],
      location: "City, Country",
      title: "Your Role / Position",
      logoUrl: "/company-logo.png",
      start: "Month Year",
      end: "Present",
      bullets: [
        "Describe what you did here. Replace with your actual experience.",
        "Add more bullet points as needed.",
      ],
    },
  ],
  education: [
    {
      school: "Your University",
      href: "https://university.edu",
      degree: "Your Degree Program",
      logoUrl: "/university-logo.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Project Name",
      href: "https://github.com/yrnrkv/project",
      dates: "2025 - Present",
      active: true,
      description:
        "Describe your project here. What does it do? What problem does it solve?",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yrnrkv/project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
