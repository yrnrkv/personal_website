import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yourwebsite.com",
  location: "Your City",
  locationLink: "https://www.google.com/maps/place/yourcity",
  description:
    "A short description about yourself — edit this to reflect your background and interests.",
  summary:
    "Write your personal story here. Talk about your background, what drives you, your hobbies, and what makes you unique.\n\nThis is your About section — make it personal and engaging.",
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
        url: "https://github.com/yourusername",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
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
      href: "https://company.com",
      badges: [],
      location: "City, Country",
      title: "Your Role / Job Title",
      logoUrl: "/company-logo.png",
      start: "Month Year",
      end: "Present",
      bullets: [
        "Describe what you did at this company. Be specific about technologies used and impact.",
        "Add more bullet points as needed."
      ],
    },
    {
      company: "Another Company",
      href: "https://anothercompany.com",
      badges: [],
      location: "City, Country",
      title: "Your Role",
      logoUrl: "/company2-logo.png",
      start: "Month Year",
      end: "Month Year",
      bullets: [
        "Describe your responsibilities and achievements here."
      ],
    },
  ],
  education: [
    {
      school: "Your University",
      href: "https://university.edu",
      degree: "Bachelor of Science in Your Major",
      logoUrl: "/university-logo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Your High School or Previous Education",
      href: "https://school.edu",
      degree: "Diploma / Certificate details",
      logoUrl: "/school-logo.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Project One",
      href: "https://github.com/yourusername/project-one",
      dates: "2024 - Present",
      active: true,
      description:
        "Describe your project here. What does it do? What problem does it solve?",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yourusername/project-one",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Project Two",
      href: "https://github.com/yourusername/project-two",
      dates: "2024",
      active: true,
      description:
        "Another project description. Highlight the tech stack and your role.",
      technologies: [
        "Python",
        "Flask",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yourusername/project-two",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
