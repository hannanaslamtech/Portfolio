import Scrollspy from "react-scrollspy";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import GithubActivitySection from "@/components/GithubActivitySection";

const sections = [
  "home",
  "about",
  "projects",
  "skills",
  "github-activity",
  "contact",
];

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleHashChange = (hash) => {
      if (window.location.hash !== `#${hash}`) {
        navigate(`#${hash}`, { replace: true });
      }
    };

    const observerCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          handleHashChange(entry.target.id);
          break;
        }
      }
    };

    const observer = new window.IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navbar activeSection={activeSection} />
      <Scrollspy items={sections} currentClassName="active" offset={-50}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GithubActivitySection />
      </Scrollspy>
      <Footer />
    </div>
  );
};

export default Index;
