"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GitHubContributions = dynamic(() => import("@/components/github-contributions").then(mod => mod.GitHubContributions), { ssr: false });
const EthicsQuote = dynamic(() => import("@/components/ethics-quote").then(mod => mod.EthicsQuote), { ssr: false });
const TechStack = dynamic(() => import("@/components/tech-stack").then(mod => mod.TechStack), { ssr: false });
const TimelineItem = dynamic(() => import("@/components/resume-card").then(mod => mod.TimelineItem), { ssr: false });
const ContactOrbiting = dynamic(() => import("@/components/contact-orbiting").then(mod => mod.ContactOrbiting), { ssr: false });
const ContactForm = dynamic(() => import("@/components/contact-form").then(mod => mod.ContactForm), { ssr: false });

const BlurFade = dynamic(() => import("@/components/magicui/blur-fade").then(mod => mod.default), { ssr: false });
const BlurFadeText = dynamic(() => import("@/components/magicui/blur-fade-text").then(mod => mod.default), { ssr: false });
const ProjectCard = dynamic(() => import("@/components/project-card").then(mod => mod.ProjectCard), { ssr: false });
const ResumeCard = dynamic(() => import("@/components/resume-card").then(mod => mod.ResumeCard), { ssr: false });
const HomeGraph = dynamic(() => import("@/components/home-graph").then(mod => mod.HomeGraph), { ssr: false });
const UnifiedGraph = dynamic(() => import("@/components/unified-graph").then(mod => mod.UnifiedGraph), { ssr: false });
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

// Glassmorphism Bento Card Component
function GlassCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <BlurFade delay={delay}>
      <div className={`glass-card p-6 md:p-8 ${className}`}>
        {children}
      </div>
    </BlurFade>
  );
}

export default function Page() {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [showUnifiedGraph, setShowUnifiedGraph] = useState(false);

  return (
    <main className="flex flex-col min-h-[100dvh] py-section-lg space-y-6">
      {/* Hero Section - Apple-style elegant design */}
      <section id="hero">
        <GlassCard delay={BLUR_FADE_DELAY} className="hero-glass overflow-hidden">
          <div className="w-full py-8 md:py-12">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Avatar with elegant ring */}
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-full blur-md"></div>
                  <Avatar className="relative size-28 md:size-32 border-2 border-white/60 shadow-2xl">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </div>
              </BlurFade>

              {/* Main heading - Apple style large title */}
              <div className="space-y-4 max-w-3xl">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY * 3}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}.`}
                />
              </div>

              {/* Description - clean and elegant */}
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <p className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  {DATA.description}
                </p>
              </BlurFade>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Navigation Graph Section */}
      <section id="graph">
        <GlassCard delay={BLUR_FADE_DELAY * 7} className="p-4 md:p-6">
          <div className="relative">
            {showUnifiedGraph ? (
              <UnifiedGraph showBlogPosts={true} />
            ) : (
              <HomeGraph />
            )}
            <button
              onClick={() => setShowUnifiedGraph(!showUnifiedGraph)}
              className="absolute bottom-4 right-4 z-30 flex items-center gap-2 px-3 py-2 text-xs font-medium bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded-lg hover:scale-105 transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="whitespace-nowrap">
                {showUnifiedGraph ? "Sections Only" : "With Blog Posts"}
              </span>
            </button>
          </div>
        </GlassCard>
      </section>

      {/* About Section */}
      <section id="about">
        <GlassCard delay={BLUR_FADE_DELAY * 10}>
          <div className="space-y-content-md">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-2xl font-bold text-center">About.</h2>
              <button
                onClick={() => setAboutExpanded(!aboutExpanded)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground bg-white/50 dark:bg-white/10 hover:bg-white/70 dark:hover:bg-white/20 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                {aboutExpanded ? "Hide" : "Read more"}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <AnimatePresence>
              {aboutExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-content-sm pt-2">
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
                      Write your personal story here. Share your background, where you're from, and what shaped your journey. This is your space to tell visitors who you are.
                    </p>
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
                      Talk about your interests, what you're studying, and what excites you about technology and your field. What are your goals and aspirations?
                    </p>
                    <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
                      Share your hobbies and what you do outside of work and study. This helps visitors connect with you on a personal level.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </GlassCard>
      </section>

      {/* Ethics Quote Section */}
      <section id="ethics">
        <GlassCard delay={BLUR_FADE_DELAY * 15.5} className="p-4 md:p-6">
          <EthicsQuote delay={0} />
        </GlassCard>
      </section>

      {/* Work Experience Section */}
      <section id="work">
        <GlassCard delay={BLUR_FADE_DELAY * 17}>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Places I Worked At.</h2>
            <div className="divide-y divide-border/20">
              {DATA.technicalExperience.map((work, id) => (
                <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 18 + id * 0.02}>
                  <TimelineItem
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    bullets={work.bullets}
                    isLast={id === DATA.technicalExperience.length - 1}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Education Section */}
      <section id="education">
        <GlassCard delay={BLUR_FADE_DELAY * 19}>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Education.</h2>
            <div className="divide-y divide-border/20">
              {DATA.education.map((education, id) => (
                <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 20 + id * 0.02}>
                  <TimelineItem
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    href={education.href}
                    period={`${education.start} - ${education.end}`}
                    isLast={id === DATA.education.length - 1}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack">
        <GlassCard delay={BLUR_FADE_DELAY * 21} className="p-4 md:p-6">
          <TechStack delay={0} />
        </GlassCard>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <GlassCard delay={BLUR_FADE_DELAY * 22}>
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-center">
                  Check out my latest work.
                </h2>
                <p className="text-muted-foreground md:text-lg/relaxed max-w-lg mx-auto">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications.
                </p>
              </div>
            </div>

            {/* Expand button */}
            <div className="flex justify-center">
              <button
                onClick={() => setProjectsExpanded(!projectsExpanded)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-full transition-all duration-200 backdrop-blur-sm"
              >
                {projectsExpanded ? "Hide projects" : "View projects"}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${projectsExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {/* All Projects - Hidden by default */}
            <AnimatePresence>
              {projectsExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {DATA.projects.map((project, id) => (
                      <BlurFade
                        key={project.title}
                        delay={0.05 + id * 0.05}
                      >
                        <ProjectCard
                          href={project.href}
                          title={project.title}
                          description={project.description}
                          dates={project.dates}
                          tags={project.technologies}
                          image={project.image}
                          video={project.video}
                          links={project.links}
                        />
                      </BlurFade>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </GlassCard>
      </section>

      {/* GitHub Contributions Section */}
      <section id="github">
        <GlassCard delay={BLUR_FADE_DELAY * 24} className="p-4 md:p-6">
          <GitHubContributions username="yrnrkv" delay={0} />
        </GlassCard>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form">
        <GlassCard delay={BLUR_FADE_DELAY * 35}>
          <ContactForm />
        </GlassCard>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <GlassCard delay={BLUR_FADE_DELAY * 36} className="p-4 md:p-6">
          <ContactOrbiting delay={0} />
        </GlassCard>
      </section>
    </main>
  );
}
