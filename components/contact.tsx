"use client";

import dynamic from "next/dynamic";
import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

const ParticleBackground = dynamic(() => import("./googleParticles"), { ssr: false });

export default function Contact() {
  return (
    <section className="relative min-h-[80vh] text-white flex items-center px-6 py-12 overflow-hidden" id="contact">
      <ParticleBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left md:ml-[120px] mb-4 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Let’s Connect</h2>
        <p className="text-gray-300 text-base md:text-lg mb-6">
          I'd love to get in touch!
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start justify-center md:justify-start">
          <Link
            href="mailto:sdchampaneri@uwaterloo.ca"
            target="_blank"
            className="group flex items-center gap-2 text-sm font-medium py-3 px-6 rounded-xl transition-all duration-300
              bg-[#1a1a1a] border border-white/50 
              hover:scale-110 hover:shadow-[0_0_25px_5px_rgba(66,133,244,0.4)]"
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#4285F4]" />
            sdchampaneri@uwaterloo.ca
          </Link>

          <Link
            href="https://linkedin.com/in/shreeya-champaneri"
            target="_blank"
            className="group flex items-center gap-2 text-sm font-medium py-3 px-6 rounded-xl transition-all duration-300
              bg-[#1a1a1a] border border-white/50 
              hover:scale-110 hover:shadow-[0_0_25px_5px_rgba(66,133,244,0.4)]"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-[#4285F4]" />
            LinkedIn
          </Link>
        </div>

        <p className="text-gray-400 text-sm md:text-base mt-8">&copy; 2025 <span className="text-white">Shreeya C.</span></p>
      </div>
    </section>
  );
}