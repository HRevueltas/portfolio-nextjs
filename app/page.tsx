"use client";
import AnimatedGreeting from "./components/AnimatedGreeting";
import { motion } from "motion/react";
import LabIcon from "./components/LabIcon";
import AnimatedLightbulb from "./components/AnimatedLightbulb";
import { useState } from "react";
import ImageCarousel from "./components/ImageCarousel";
import { Clock } from "lucide-react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full min-h-screen bg-[var(--color-bg)] text-[var(--color-high-contrast)]">
      {/* Hero Section */}
      
      <main className="max-w-[720px] mx-auto px-6">
        
        {/* Hero Container - Centered without carousel */}
        <div className="min-h-screen flex flex-col justify-center py-12">

        {/* Main Content - Centered */}
        <div className="flex flex-col justify-center space-y-8">
        {/* Main Heading */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-[3.5rem] font-800 leading-tight mb-4">
            Hi, I'm Harold <AnimatedGreeting />
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-gray-12 tracking-wide mb-4">
            Full Stack Developer · Systems Engineer
          </h2>

          <p className="text-base text-gray-11 max-w-2xl leading-relaxed">
            Crafting scalable, intuitive applications with modern technologies
            to bring ideas to life.
          </p>
        </div>

        {/* Skills Description */}
        <div className="mb-8">
          <p className="text-16 text-gray-11 leading-7 max-w-3xl">
            Passionate about creating exceptional digital experiences with
            expertise in{" "}
            <code data-tech="Next.js" data-type="tech">
              Next.js
            </code>{" "}
            <code data-tech="React" data-type="tech">
              React
            </code>{" "}
            <code data-tech="Node.js" data-type="tech">
              Node.js
            </code>{" "}
            <code data-tech="TypeScript" data-type="tech">
              TypeScript
            </code>
            , and databases like{" "}
            <code data-tech="PostgreSQL" data-type="tech">
              PostgreSQL
            </code>{" "}
            and{" "}
            <code data-tech="MongoDB" data-type="tech">
              MongoDB
            </code>
            . Currently expanding into{" "}
            <code data-tech="Go" data-type="tech">
              Go
            </code>{" "}
            and{" "}
            <code data-tech="Python" data-type="tech">
              Python
            </code>
            .
          </p>
        </div>

         {/* Social Links & Contact */}
        <div className="space-y-4">
          <div className="flex gap-6 pt-8 border-t border-gray-6">
            <a
              href="https://github.com/Hrevueltas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-11 hover:text-blue-11 transition-colors duration-200"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/harold-revueltas-gomez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-11 hover:text-blue-11 transition-colors duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:haroldrevueltas@outlook.com"
              className="text-gray-11 hover:text-blue-11 transition-colors duration-200"
            >
              <span className="sr-only">Email</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          
          {/* Contact Info Text */}
          <div className="text-sm text-gray-10">
            <p>Let's connect and build something amazing together!</p>
          </div>
        </div>
        </div>
        
        </div>
        

        {/* Projects Section */}
        <section className="py-20">
          {/* <h2 className="text-[1.5rem] font-700 text-[var(--color-high-contrast)] mb-8">
            Featured Projects
          </h2> */}

          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-end gap-1 mb-8 w-fit">
            <h2 className="text-[1.5rem] font-700 text-[var(--color-high-contrast)]">
              Featured projects
            </h2>
            <AnimatedLightbulb isHovered={isHovered} setIsHovered={setIsHovered} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="bg-[var(--color-gray-2)] border border-[var(--color-gray-6)] rounded-xl p-0 hover:border-[var(--color-gray-8)] transition-all duration-300 overflow-hidden">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-[var(--color-gray-4)] flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <path
                    d="m21 15-3.086-3.086a2 2 0 00-2.828 0L6 21"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                </svg>
              </div>

              {/* Content */}
              <motion.div
                className="p-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <h3 className="text-20 font-600 text-[var(--color-high-contrast)] mb-3">
                  Task Manager Pro
                </h3>
                <p className="text-14 text-gray-11 leading-relaxed">
                  A full-stack task management application with real-time
                  collaboration, built with Next.js and PostgreSQL.
                </p>
              </motion.div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-[var(--color-gray-2)] border border-[var(--color-gray-6)] rounded-xl p-0 hover:border-[var(--color-gray-8)] transition-all duration-300 overflow-hidden">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-[var(--color-gray-4)] flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <path
                    d="m21 15-3.086-3.086a2 2 0 00-2.828 0L6 21"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-20 font-600 text-[var(--color-high-contrast)] mb-3">
                  E-Commerce API
                </h3>
                <p className="text-14 text-gray-11 leading-relaxed">
                  RESTful API for e-commerce platform with authentication,
                  payment processing, and inventory management.
                </p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-[var(--color-gray-2)] border border-[var(--color-gray-6)] rounded-xl p-0 hover:border-[var(--color-gray-8)] transition-all duration-300 overflow-hidden">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-[var(--color-gray-4)] flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <path
                    d="m21 15-3.086-3.086a2 2 0 00-2.828 0L6 21"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-20 font-600 text-[var(--color-high-contrast)] mb-3">
                  Analytics Dashboard
                </h3>
                <p className="text-14 text-gray-11 leading-relaxed">
                  Real-time analytics dashboard with interactive charts and data
                  visualization using React and D3.js.
                </p>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="bg-[var(--color-gray-2)] border border-[var(--color-gray-6)] rounded-xl p-0 hover:border-[var(--color-gray-8)] transition-all duration-300 overflow-hidden">
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-[var(--color-gray-4)] flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <circle
                    cx="8.5"
                    cy="8.5"
                    r="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                  <path
                    d="m21 15-3.086-3.086a2 2 0 00-2.828 0L6 21"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-20 font-600 text-[var(--color-high-contrast)] mb-3">
                  DevTools CLI
                </h3>
                <p className="text-14 text-gray-11 leading-relaxed">
                  Command-line tool for developers to automate project setup,
                  code formatting, and deployment workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Lab Section */}
        <section className="mb-16">
          <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-end gap-1 mb-4 w-fit">
            <h2 className="text-[1.5rem] font-700 text-[var(--color-high-contrast)] ">
              Lab
            </h2>
            <LabIcon isHovered={isHovered} setIsHovered={setIsHovered} />
          </div>
          <p className="text-14 text-gray-11 mb-8">
            Experimental components, prototypes, and learning notes
          </p>

          {/* Coming Soon Content */}
          <div className="flex flex-col items-center justify-center py-20 px-6">
            <div className="text-center max-w-md">
              {/* Coming Soon Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-[var(--color-gray-3)] rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-gray-9" />
              </div>
              
              {/* Coming Soon Text */}
              <h3 className="text-xl font-600 text-[var(--color-high-contrast)] mb-3">
                Coming Soon
              </h3>
              <p className="text-14 text-gray-11 leading-relaxed">
                I'm currently working on some exciting experiments and prototypes. 
                Check back soon to see what's cooking in the lab!
              </p>
            </div>
          </div>
        </section>
       
      </main>
    </div>
  );
}
