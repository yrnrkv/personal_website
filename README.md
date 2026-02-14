# Yernur Kuandykov — Personal Website

**BAI4010 Web Programming for e-Business — Individual Assignment 1**

A personal portfolio website built with Next.js 14, React, and TypeScript. Deployed on Vercel.

🔗 **Live Site:** [your-deployed-url.vercel.app](https://your-deployed-url.vercel.app)


---

## 📋 Site Structure Overview

The website consists of **3+ HTML pages** rendered via Next.js App Router:

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Main portfolio page with all sections |
| **Blog** | `/blog` | Blog posts and articles |
| **Showcase** | `/showcase` | Interactive demos and showcases |

### Sections on the Home Page

1. **Hero** — Introduction with avatar, name, and description
2. **About** — Personal background and story (expandable)
3. **Ethics & Values** — Rotating quotes on ethics and philosophy
4. **Work Experience** — Places I worked at with timeline
5. **Education** — Academic background with timeline
6. **Tech Stack** — Technical skills and tools
7. **Projects** — Portfolio of projects (expandable grid)
8. **GitHub Contributions** — Live GitHub contribution graph
9. **Contact Form** — HTML form with validation and inline messages
10. **Contact** — Orbiting contact links (email, GitHub, LinkedIn)


---

## ✅ Assignment Requirements Checklist

### I) Site Structure

- [x] **At least 3 HTML pages** — Home (`/`), Blog (`/blog`), Showcase (`/showcase`)
- [x] **Meaningful sections/headings/paragraphs** — Uses `h1`, `h2`, `h3` appropriately across all sections
- [x] **Navigation**
  - [x] Nav links in order: Home, Blog, Showcase, GitHub, LinkedIn
  - [x] Active state indicated (highlighted icon)
  - [x] At least 1 dropdown menu (expandable About, Projects sections)
  - [x] Responsive (dock-style navbar adapts to screen size)
- [x] **Embedded Media** — Avatar image, project images/GIFs, GitHub contribution graph
- [x] **HTML Forms**
  - [x] Contact/Subscribe form with at least two input types (text, email, textarea)
  - [x] Inline message showing what is submitted (alert + on-page thank-you message)
  - [x] Error handling with inline messages
  - [x] Successful submission shows thank-you message and resets form


### II) Styling and Template Changes (CSS)

- [x] **External CSS** — `globals.css` with Tailwind CSS + custom styles
- [x] **Internal CSS** — `<style>` tags in component files
- [x] **Inline CSS** — `style={{...}}` attributes on elements (e.g., dot patterns, ambient background)
- [x] **Customizations covering 5+ areas:**
  1. **Colors** — Custom color scheme with CSS variables, gradients, glassmorphism
  2. **Borders** — Glass-card borders with opacity, rounded corners
  3. **Spacing** — Custom spacing scale (`py-section-lg`, `space-y-content-md`)
  4. **Text** — Custom font sizes, weights, tracking, gradient text
  5. **Tables** — Timeline/resume card layouts with divide borders
  6. **Float** — Flexbox and grid-based layouts throughout
  7. **Advanced CSS** — Glassmorphism (`backdrop-blur`, `bg-white/60`), CSS animations (`@keyframes`), CSS custom properties, dark mode with `dark:` variants



### III) Optional Advanced (Bonus)

- [x] **Responsive Design** — Fully responsive with Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- [x] **JavaScript enhancements** — Interactive particle system (Cosmic Dust/Fireflies), expandable sections with Framer Motion animations, D3.js knowledge graph, form validation
- [x] **Additional frameworks/tools:**
  - Next.js 14 (React framework)
  - Tailwind CSS (utility-first CSS)
  - Framer Motion (animations)
  - D3.js (data visualization / knowledge graph)
  - shadcn/ui (UI component library)
  - Lucide React (icon library)
  - TypeScript

---


## 🚀 How to Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Animations:** Framer Motion
- **Visualization:** D3.js
- **UI Components:** shadcn/ui
- **Deployment:** Vercel

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   ├── blog/             # Blog page
│   └── showcase/         # Showcase page
├── components/           # React components
│   ├── navbar.tsx        # Navigation dock
│   ├── particle-system.tsx # Interactive particle system
│   ├── contact-form.tsx  # Contact form with validation
│   ├── home-graph.tsx    # D3.js knowledge graph
│   └── ...
├── data/
│   └── resume.tsx        # Personal data (edit this!)
└── lib/
    └── utils.ts          # Utility functions
```

---

*Built by Yernur Kuandykov for BAI4010 Web Programming for e-Business, February 2026.*

## License

MIT License.
