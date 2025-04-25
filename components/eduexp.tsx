import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full px-4 sm:px-8 md:px-16 xl:px-28 py-24 font-sans text-black">
      <div
        className="w-full rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-101 transition-all duration-300"
        style={{
          borderTop: '6px solid #4285F4',
          borderRight: '6px solid #EA4335',
          borderBottom: '6px solid #FBBC05',
          borderLeft: '6px solid #34A853',
        }}
      >
        <div className="p-6 sm:p-10">
          <h1 className="text-5xl font-semibold mb-14 text-center text-gray-900 tracking-tight">
            Experience
          </h1>

          <div className="flex flex-col gap-5">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group flex items-center gap-6 py-6 px-5 sm:px-6 rounded-xl transition-all duration-300 bg-[#f5f5f5] hover:bg-[#e5f0fd] shadow-md"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-white shadow-md rounded-xl">
                  <img
                    src={exp.icon}
                    alt={exp.company}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-950">{exp.role}</h3>
                  <p className="text-sm text-gray-500">
                    {exp.company} • {exp.time}
                  </p>
                  <ul className="text-sm mt-2 text-gray-700 leading-relaxed list-disc list-inside space-y-1">
                    {exp.description.split('. ').map((sentence, index) => (
                      <li key={index}>
                        {sentence.trim()}
                      </li>
                    ))}
                  </ul>
                  {exp.link && (
                    <div className="flex justify-end mt-4">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-white text-black text-sm rounded-lg hover:bg-blue-500 hover:text-white transition-all shadow-sm"
                      >
                        View website →
                      </a>
                    </div>
                  )}
                  {exp.certificate && (
                    <div className="flex justify-end mt-4">
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-white text-black text-sm rounded-lg hover:bg-blue-500 hover:text-white transition-all shadow-sm"
                      >
                        View certificate (PDF) →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  return (
    <section
      id="education"
      className="w-full px-4 sm:px-8 md:px-16 xl:px-28 py-24 font-sans text-black"
    >
      <div
        className="w-full rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:scale-101 transition-all duration-300"
        style={{
          borderTop: '6px solid #4285F4',
          borderRight: '6px solid #EA4335',
          borderBottom: '6px solid #FBBC05',
          borderLeft: '6px solid #34A853',
        }}
      >
        <div className="p-6 sm:p-10">
          <h2 className="text-5xl font-semibold mb-14 text-center text-gray-900 tracking-tight">
            Education
          </h2>
          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <EducationCard key={idx} item={edu} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const googleColors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];

const EducationCard = ({ item, idx }: { item: any; idx: number }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="w-full rounded-2xl bg-[#f5f5f5] p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 hover:bg-[#e5f0fd] transition-all duration-300 shadow-md"
  >
    <div className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden shadow-md">
      <Image
        src={item.image}
        alt={item.institution}
        width={96}
        height={96}
        className="object-cover"
      />
    </div>
    <div className="text-center sm:text-left">
      <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
      <p className="text-sm text-gray-500">
        {item.institution} • {item.year}
      </p>
      <p className="mt-2 text-gray-700">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
        {item.skills.map((skill: string, i: number) => {
          const hoverColor = googleColors[i % googleColors.length];
          const hoverTextColor = hoverColor === "#F4B400" ? "black" : "white";

          return (
            <span
              key={i}
              className="bg-gray-300 text-gray-900 text-xs px-3 py-1 rounded-full transition-all duration-300 cursor-default"
              style={{
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverColor;
                e.currentTarget.style.color = hoverTextColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#d1d5db";
                e.currentTarget.style.color = "#111827";
              }}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  </motion.div>
);

export const experiences = [
  {
    role: "Ground Station Software Developer",
    company: "UW Orbital",
    time: "March 2025 - Present",
    description: "Backend Development: Implemented data validation and created POST/DELETE API endpoints for command management using FastAPI, ensuring structured data and improving API reliability. Logging & Monitoring: Developed logging middleware to capture API request details and execution time, enhancing debugging and system monitoring. Testing & Debugging: Ensured backend functionality with 100% test pass rate using Pytest, focusing on data validation and API response accuracy",
    icon: "/uworbital.jpeg",
  },
  {
    role: "Software Developer",
    company: "Reality Labs",
    time: "Feb 2025 - Present",
    description: "Game Development: Developed a Unity “Roll a Ball” game with C#, implementing custom functionality and UI for an interactive experience. Mahine Learning: Built a color classification neural network in PyTorch with 99.5% accuracy, using synthetic data and Binary Cross-Entropy loss. Backend Development: Designing API key generation and database integration for secure pairing token authentication for the Humanoid Robot Project",
    icon: "/realityLabs.jpeg",
  },
  {
    role: "eLearning Developer",
    company: "University of Waterloo",
    time: "Jan 2025 - Apr 2025",
    description: "Enhanced learning platforms for 250+ students by resolving 25+ web QA issues, optimizing JavaScript components, and co-leading web development workshops. Automated curriculum analysis by 40% with a Node.js/JavaScript tool tracking H5P activities, media metrics, and keywords across asynchronous courses. Built 10+ scalable UI components to modernize Microsoft and WIL programs, elevating accessibility, responsiveness, and interactivity across devices. Pioneered AI innovation, pitching an AI coach platform and piloting AI tools like InStage to advance digital learning experiences",
    icon: "/uwaterloo.png",
  },
  {
    role: "Founder & President",
    company: "A.C.E. The Future",
    time: "Jan 2022 - Jul 2024",
    description: "Established a student-led organization leading emerging technology talks, webinars, blogs, and workshops with guest speakers from Apple and Stanford that impacted youth across 20+ countries. Led and empowered a team of 16 individuals in content writing, event planning, external relations, and graphic design. Featured in Ignite Fair, Canada’s largest youth-run volunteer fair, with 900+ attendees",
    icon: "/A.C.E.png",
    link: "https://acethefuture.wixsite.com/acethefuture"
  },
  {
    role: "Podcast Co-host",
    company: "Project Tech Careers",
    time: "Dec 2022 - Aug 2024",
    description: "Interviewed guest speakers, capturing their journeys and experiences to create compelling podcast episodes released on Spotify; educated and inspired high school students aiming to pursue a career in tech",
    icon: "/ptclogo.jpeg",
  },
  {
    role: "Web Developer",
    company: "Prospective Medical Professionals",
    time: "Jan 2022 - Aug 2024",
    description: "Redesigned PuMP’s national website using HTML, CSS, and Javascript, increasing reach to 10,000+ site visitors",
    icon: "/pumplogo.jpeg",
  },
  {
    role: "iOS Developer",
    company: "Our Wave Hub x Apple Canada",
    time: "Summer 2022",
    description: "Developed an anti-cyberbullying iOS app using Swift and Xcode, implementing the Engineering Design Process and SDLC. Pitched to a panel of Apple executives and integrated their feedback to enhance features and improve user experience",
    icon: "/apple.jpg",
    certificate: "/pdf/Shreeya-Champaneri-iOS-Certificate.pdf"
  },
];

const educationData = [
  {
    title: "Bachelor of Applied Science (BASc) in Systems Design Engineering",
    institution: "University of Waterloo",
    year: "2025–2029 (Expected)",
    description: "President's Scholarship of Distinction",
    skills: ["Digital Computation (C++)", "SOLIDWORKS", "Data structures and algorithms"],
    image: "/uwaterloo.png",
  },
];

export default function CombinedSections() {
  return (
    <>
      <ExperienceSection />
      <EducationSection />
    </>
  );
}
