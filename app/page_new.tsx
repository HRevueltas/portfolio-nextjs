import AnimatedGreeting from "./components/AnimatedGreeting";
import HandSvg from "./components/HandSvg";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-high-contrast)]">
      {/* Hero Section */}
      <main className="max-w-[720px] mx-auto px-6 py-20">
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-[3.5rem] font-800 leading-tight mb-4">
            Hi, I'm Harold <AnimatedGreeting/>
          </h1>

          <h2 className="text-24 font-600 text-gray-11 mb-2">
            Full Stack Developer & Systems Engineer
          </h2>
          <p className="text-16 text-gray-10 max-w-2xl">
            Building scalable, user-friendly applications with modern technologies
          </p>
        </div>

        {/* Skills Description */}
        <div className="mb-12">
          <p className="text-16 text-gray-11 leading-7 max-w-3xl">
            Passionate about creating exceptional digital experiences with expertise in{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-2 text-blue-11 font-600 rounded text-14">
              Next.js
            </span>{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-2 text-blue-11 font-600 rounded text-14">
              React
            </span>{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-2 text-green-11 font-600 rounded text-14">
              Node.js
            </span>{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-3 text-gray-12 font-600 rounded text-14">
              TypeScript
            </span>
            , and databases like{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-2 text-blue-12 font-600 rounded text-14">
              PostgreSQL
            </span>{' '}
            and{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-2 text-green-11 font-600 rounded text-14">
              MongoDB
            </span>
            . Currently expanding into{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-teal-2 text-teal-11 font-600 rounded text-14">
              Go
            </span>{' '}
            and{' '}
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-2 text-amber-11 font-600 rounded text-14">
              Python
            </span>
            .
          </p>
        </div>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-32 font-700 text-[var(--color-high-contrast)] mb-8">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <ProjectCard
              title="Task Manager Pro"
              description="A full-stack task management application with real-time collaboration."
              fullDescription="A comprehensive full-stack task management application with real-time collaboration features, built with Next.js, PostgreSQL, and WebSocket integration. Features include team collaboration, task assignment, progress tracking, time management, notifications, and advanced reporting capabilities."
              imageUrl="/api/placeholder/400/160"
              techStack={["Next.js", "React", "PostgreSQL", "TypeScript", "Socket.io", "Tailwind CSS", "Prisma"]}
              links={{
                code: "https://github.com/username/task-manager",
                demo: "https://task-manager-demo.vercel.app"
              }}
              color="blue"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />

            <ProjectCard
              title="E-Commerce API"
              description="RESTful API for e-commerce platform with authentication and payment processing."
              fullDescription="Comprehensive RESTful API for e-commerce platform featuring user authentication, payment processing with Stripe, inventory management, order tracking, admin dashboard, email notifications, and comprehensive API documentation with Swagger."
              imageUrl="/api/placeholder/400/160"
              techStack={["Node.js", "Express", "MongoDB", "JWT", "Stripe", "Redis", "Docker"]}
              links={{
                code: "https://github.com/username/ecommerce-api",
                docs: "https://api-docs.example.com"
              }}
              color="green"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />

            <ProjectCard
              title="Analytics Dashboard"
              description="Real-time analytics dashboard with interactive charts and data visualization."
              fullDescription="Advanced real-time analytics dashboard with interactive charts and comprehensive data visualization, built with React and D3.js. Features include customizable dashboards, real-time data updates, advanced filtering, export capabilities, user management, and mobile-responsive design."
              imageUrl="/api/placeholder/400/160"
              techStack={["React", "D3.js", "TypeScript", "Tailwind CSS", "Chart.js", "WebSocket"]}
              links={{
                code: "https://github.com/username/analytics-dashboard",
                demo: "https://analytics-demo.vercel.app"
              }}
              color="teal"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
            />

            <ProjectCard
              title="DevTools CLI"
              description="Command-line tool for developers to automate workflows."
              fullDescription="Powerful command-line tool for developers to automate project setup, code formatting, and deployment workflows. Built with Go for high performance. Features include project scaffolding, code generation, automated testing, deployment pipelines, configuration management, and extensible plugin system."
              imageUrl="/api/placeholder/400/160"
              techStack={["Go", "CLI", "Docker", "YAML", "GitHub Actions", "Cobra"]}
              links={{
                code: "https://github.com/username/devtools-cli",
                download: "https://github.com/username/devtools-cli/releases"
              }}
              color="amber"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        </section>

        {/* Social Links */}
        <div className="flex gap-6 mt-8 pt-8 border-t border-gray-6">
          <a href="#" className="text-gray-11 hover:text-blue-11 transition-colors duration-200">
            <span className="sr-only">GitHub</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-11 hover:text-blue-11 transition-colors duration-200">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-11 hover:text-blue-11 transition-colors duration-200">
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </main>

      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-2 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-2 rounded-full opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
}
