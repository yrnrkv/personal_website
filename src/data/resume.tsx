import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, SparklesIcon } from "lucide-react";

export const DATA = {
  name: "Yernur Kuandykov",
  initials: "YK",
  url: "https://yourwebsite.com",
  location: "Hong Kong SAR",
  locationLink: "https://www.google.com/maps/place/Hong+Kong",
  description:
    "Undergrad student building cool things.",
  summary:
    "I was born in small village called Kulsary in Kazakhstan. Finished top-1 math school in Kazakhstan. Ranked 1% in class. Passionate about AI, Gambling and Football. ",
  avatarUrl: "/IMG_2482.jpg",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/showcase", icon: SparklesIcon, label: "Showcase" },
  ],
  contact: {
    email: "yernurkuandykov@gmail.com",
    tel: "+852-93522600",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yrnrkv",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yernur-kuandykov/",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:yernurkuandykov@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  technicalExperience: [
    {
      company: "Starry Craze Technologies",
      href: "https://starrycraze.com",
      badges: [],
      location: "Hong Kong SAR",
      title: "AI Engineer Intern",
      logoUrl: "/company-logo.png",
      start: "Feb 2026",
      end: "Present",
      bullets: [
        "building ML models",
        "redefining fandom with AI",
      ],
    },
  ],
  education: [
    {
      school: "Lingnan University",
      href: "https://www.ln.edu.hk/",
      degree: "Bachelor of Science in Data Science",
      logoUrl: "/university-logo.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "CareNest",
      href: "https://github.com/yrnrkv/CareNest",
      dates: "Jan 2025 - May 2025",
      active: false,
      description:
    "CareNest is an AI toolkit that keeps low-cost neonatal incubators running in remote clinics. It combines two complementary models.",
     
      technologies: [
        "Python",
        "Jupyter Notebook",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yrnrkv/CareNest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
