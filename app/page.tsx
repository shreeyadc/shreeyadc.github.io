"use client";

import Navbar from "../components/navbar";
import Homepage from "../components/homepage";
import Projects from "../components/projects";
import Contact from "../components/contact";
import EducationExperience from "@/components/eduexp";

export default function Home() {
  return (
    <main className="min-h-screen text-white flex flex-col justify-center relative glow-background">
      <Navbar />
      <Homepage /> {/* Fixed the component name */}
      <Projects />
      <EducationExperience />
      <Contact />
    </main>
  );
}
