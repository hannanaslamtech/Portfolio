# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme switching, and a comprehensive showcase of projects and skills.

## 🌐 Live Demo

**[View Live Website] https://abdulhannanaslam.netlify.app **

## ✨ Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Interactive Navigation** - Smooth scrolling with active section highlighting
- **Project Showcase** - Beautiful project cards with live demos and GitHub links
- **Skills Section** - Visual representation of technical skills
- **GitHub Activity** - Integration with GitHub API to show contribution activity
- **Contact Form** - Functional contact modal with form validation
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **Performance Optimized** - Lazy loading images and code splitting

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Headless UI primitives
- **Framer Motion** - Production-ready motion library for React
- **Lucide React** - Beautiful & consistent icon toolkit

### State Management & Data Fetching
- **TanStack Query** - Powerful data synchronization for React
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Routing & Navigation
- **React Router DOM** - Declarative routing for React
- **React Scrollspy** - Auto-highlight navigation items

### Additional Libraries
- **React Icons** - Popular icon packs
- **React GitHub Calendar** - GitHub contribution graph
- **React Helmet Async** - Document head manager
- **Sonner** - Toast notifications
- **Recharts** - Composable charting library
- **Date-fns** - Modern JavaScript date utility library

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── HeroSection.tsx # Landing section
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── data/               # Static data files
│   ├── projects.ts     # Project information
│   ├── skills.ts       # Skills data
│   └── links.ts        # Social links
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Application entry point
```

## 🎨 Customization

### Adding Projects
Edit `src/data/projects.ts` to add your projects:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    image: "/imgs/project-image.png",
    technologies: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/username/project",
    liveUrl: "https://project-demo.com"
  }
]
```

### Updating Skills
Edit `src/data/skills.ts` to modify your skills:

```typescript
export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS"]
  }
]
```

### Personal Information
Update your personal information in the respective component files:
- `src/components/HeroSection.tsx` - Name, title, bio
- `src/components/AboutSection.tsx` - About content
- `src/components/Footer.tsx` - Social links

## 🌙 Theme Customization

The website supports dark and light themes. Customize colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      // Add your custom colors
    }
  }
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Add `"homepage": "https://username.github.io/repo-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/yourusername)

---

⭐ If you found this portfolio helpful, please give it a star! 