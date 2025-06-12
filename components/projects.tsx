"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NourishNet",
    image: "/nourishnet.png",
    tech: ["Python", "Flask", "MongoDB"],
    description:
      "An application that helps reduce food waste and fight hunger in our communities by connecting restaurants and grocery stores with surplus food to local food banks. \n★ Hack Canada 2025",
    link: "https://dorahacks.io/buidl/23114/",
    github: "https://github.com/maxtmiller/NourishNet",
    images: ["/nourishnet-prj.png"],
    keyFeatures: [
      "Item database with items available to give to food banks",
      "Portal to review and manage donor and receiver applications",
      "Business member profiles to manage the details of your current employees",
      "Chatbot to review food requests and manage delivery/pickup",
      "Map for businesses to locate food banks accepting donations near them"
    ],
  },
  {
    title: "EchoMind",
    image: "/echomind.png",
    tech: ["Python", "Gemini", "React", "Typescript", "Docker"],
    description:
      "An Inside Out movie-inspired voice journal calendar transforming spoken words into AI-generated art and music to aid individuals with emotional expression. \n★ GenAI Genesis 2025",
    link: "https://devpost.com/software/echomind-zgb25h",
    github: "https://github.com/shreeyadc/echomind-genAI-genesis",
    images: ["/echomind-prj.png"],
    keyFeatures: [
      "Voice-to-text feature using Google Cloud's speech-to-text API",
      "Emotion detector using Gemini's natural language processing",
      "AI-generated art and music to visualize your emotions",
      "Personalized affirmations, summaries, and creative prompts",
      "Calendar to track journal entries",
      "Journaling helps the mind. Art soothes the heart. Music heals the soul. But EchoMind does it all."
    ],
  },
  {
    title: "FaceMelody",
    image: "/facemelody.png",
    tech: ["HTML", "CSS", "JS", "Python"],
    description:
      "A web application that analyzes a user's facial expressions to distinguish their mood and play a corresponding song. \n🏅 Citro Hacks 2023",
    link: "https://shreeyadc.github.io/facemelody/",
    github: "https://github.com/OmarDajani70/FaceMelody",
    images: ["/facemelody-prj.png"],
    keyFeatures: [
      "Front camera facial expression recognition",
      "Current mood detection data plotted on a live emotion chart",
      "A song displayed and updated every 15 seconds to match the user's mood",
    ],
  },
  {
    title: "Library System Store",
    image: "/library-system.png",
    tech: ["C++"],
    description:
      "A program simulating a real Library System that allows managing a collection of books and library users with the functionality to add, remove, and advanced search, along with storing and displaying user information. \n★ SYDE 121 final project",
    link: "",
    github: "https://github.com/19prishpat/Library-System-Store/",
    images: [""],
    keyFeatures: [
      "Perform advanced book searches by title, author, or genre",
      "Display a list of all books and student + teacher user details",
      "Add and remove books from the system",
    ],
  },
  {
    title: "CyberStop",
    image: "/cyberstop.png",
    tech: ["Swift", "SwiftUI", "Xcode"],
    description:
      "An interactive app that aims to stop cyberbullying. \n🥇 1st place for UWaterloo's Hi5 Health Informatics Challenge, and turned the idea into an app during a co-op course in partnership with Apple Canada!",
    link: "https://shreeyadc.github.io/hi5-challenge/",
    github: "https://github.com/shreeyadc/Cyber-Stop",
    images: ["/cyberstopapp.png"],
    keyFeatures: [
      "A report tool to report cyberbullying incidents",
      "Resources to educate users about online safety and early issue identification",
      "Mindfulness activities to reduce physical symptoms of anxiety and boost mental well-being",
    ],
  },
  {
    title: "EmpowerAbility",
    image: "/empowerability.png",
    tech: ["Swift", "SwiftUI", "Xcode"],
    description:
      "Created an EdTech app aiming to help students with learning disabilities. \n🥇 1st place for A Midsummer's Hack",
    link: "https://shreeyac.notion.site/EmpowerAbility-0ea2a5520bbf456c8fa7691ba26ff78c",
    github: "https://github.com/shreeyadc/empowerability",
    images: ["/empowerapp.png"],
    keyFeatures: [
      "Text-to-speech feature using AVSpeechSynthesizer",
      "Interactive resources to make the learning experience engaging, enjoyable, and less stressful",
      "Built-in sign language chart",
    ],
  },
  {
    title: "\"Mario Launcher\" Game",
    image: "/mario.png",
    tech: ["HTML", "CSS", "Javascript", "Phaser"],
    description:
      "A twist to the game Super Mario, where Mario must collect and launch turtle shells at flying opponents to score points! \n★ ICS2O Summative Project",
    link: "https://shreeyadc.github.io/mario-launcher/",
    github: "https://github.com/shreeyadc/mario-launcher-game",
    images: ["/mario-prj.png"],
    keyFeatures: [
      "Home page with rules and Help page for step-by-step instructions on how to play",
      "A web video game implementing complex mechanics like character sprite animations, velocity movements, collision detection, and gravity",
      "Sound effects and background music for an immersive audio-visual user experience"
    ],
  },
  {
    title: "Modular Programming: Objects and Classes CAI",
    image: "/CAIapp.png",
    tech: ["Java", "Swing"],
    description:
      "A Computer-Aided-Instruction (CAI) Project to educate students about Objects and Classes in programming. \n★ ICS3U final project",
    link: "",
    github: "https://github.com/shreeyadc/CAI-objects-classes",
    images: ["/CAIapp-prj.png"],
    keyFeatures: [
      "Learning modules with examples and diagrams to teach students",
      "Two interactive activities: \"Guess the Word\" and a Mario True or False game to apply your learning",
      "A quiz to test the user's knowledge and a personalized certificate upon completion",
    ],
  },
  {
    title: "BOSS Computer Store",
    image: "/compstore.png",
    tech: ["Java", "Swing"],
    description:
      "A laptop store GUI app that matches users with curated recommendations through a survey feature and allows them to add laptops to their cart for purchase. \n★ ICS3U project",
    link: "",
    github: "https://github.com/shreeyadc/computer-store",
    images: ["/compstore-prj.png"],
    keyFeatures: [
      "Customer survey for personalized product recommendations",
      "Shopping cart feature to optimize the purchasing process",
    ],
  },
  {
    title: "Charizzma.tech",
    image: "/charizzmatech.png",
    tech: ["Python", "Cohere", "Taipy"],
    description:
      "A personal assistant that helps users improve communication, confidence and charisma by providing instant, personalized feedback on voice prompts. \n★ Hack the North 2023",
    link: "https://devpost.com/software/rizz-bot",
    github: "",
    images: ["/rizzbot.png"],
    keyFeatures: [
      "Voice-to-text using the Python Speech Recognition library",
      "Cohere for personalized feedback on your opening line"
    ],
  },
  {
    title: "Art Gallery",
    image: "/shreeya-art.png",
    tech: ["HTML", "CSS"],
    description:
      "A website showcasing acrylic paintings I've created over the years.",
    link: "https://shreeyadc.github.io/art-gallery/",
    github: "",
    images: ["/paintings.png"],
    keyFeatures: [
      "A carousel and short description of all of my favourite art pieces"
    ],
  },
];


export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 text-white">
      <h2 className="text-5xl font-semibold tracking-tight mb-12 text-center text-white font-sans sm:px-8 md:px-16 xl:px-28">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="relative">
            <motion.div
              className="rounded-xl bg-white hover:bg-[#fafafa] text-black overflow-hidden border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.15)] transition-all duration-300"
              whileHover={{ scale: 1.04 }}
            >
              <div className="relative overflow-hidden h-70">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transform transition-all duration-500 ease-out hover:scale-107"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, i) => {
                      const googleColors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];
                      const hoverColor = googleColors[i % googleColors.length];
                      const hoverTextColor = hoverColor === "#F4B400" ? "black" : "white";

                      return (
                        <span
                          key={i}
                          className="bg-gray-300 text-sm px-3 py-1 rounded-full text-black transition-colors duration-300 cursor-default"
                          style={{ transition: "all 0.3s ease" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = hoverColor;
                            e.currentTarget.style.color = hoverTextColor;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#D1D5DB"; // Tailwind gray-300
                            e.currentTarget.style.color = "black";
                          }}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-sm text-neutral-900 whitespace-pre-line text-gray-400">{project.description}</p>
                </div>
                <div className="flex justify-end mt-4">

                  <button
                    onClick={() =>
                      setExpandedProject(idx === expandedProject ? null : idx)
                    }
                    className="text-sm px-4 py-2 border border-gray-300 rounded-md text-black bg-white 
                  hover:bg-blue-500 hover:text-white hover:border-blue-500 
                  transition-all duration-100 cursor-pointer hover:scale-106"
                  >
                    Learn more →
                  </button>

                </div>
              </div>
            </motion.div>

            {expandedProject === idx && (
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white text-black rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6 space-y-4">
                  <button
                    onClick={() => setExpandedProject(null)}
                    className="absolute top-4 right-4 text-black text-xl font-semibold border border-gray-300 rounded-md px-3 py-1 bg-white hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    ×
                  </button>

                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  {project.images[0] && (
                    <div className="w-full flex justify-center">
                      <div className="w-[80%] max-w-[500px] h-auto overflow-hidden rounded-lg border border-gray-200">
                        <Image
                          src={project.images[0]}
                          alt="Project Screenshot"
                          width={610}
                          height={350}
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc list-inside text-sm text-neutral-700 space-y-1">
                      {project.keyFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="text-sm px-4 py-2 border border-gray-300 rounded-md hover:bg-blue-500 hover:text-white hover:scale-106 hover:border-white transition"
                      >
                        Visit Site
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-sm px-4 py-2 border border-gray-300 rounded-md hover:bg-blue-500 hover:text-white hover:scale-106 hover:border-white transition"
                      >
                        GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}
