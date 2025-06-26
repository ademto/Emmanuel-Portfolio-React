import { RevealOnScroll } from "../RevealOnScroll";

const featuredProjects = [
  {
    title: "Cyber Glossary",
    description: "A comprehensive cybersecurity knowledge platform featuring 80+ clearly explained terms and definitions. Designed to help professionals advance their skills and career with career-focused learning and security-first practices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "GitHub", "Vercel"],
    link: "https://www.cyberglossary.study/",
  },
  {
    title: "WordPress CVE-2024-10924 Penetration Testing",
    description: "Comprehensive penetration testing report for a critical 2FA bypass vulnerability (CVE-2024-10924) in the Really Simple SSL plugin. Successfully exploited and documented with detailed remediation guidance.",
    tech: ["Python", "Penetration Testing", "WordPress", "Security Research", "GitHub", "Documentation"],
    link: "https://github.com/ademto/wordpress-cve-2024-10924-pentest",
  },
  {
    title: "Cyber Cheatsheet",
    description: "A curated cybersecurity knowledge platform featuring categorized tools, commands, and techniques. Designed to help pentesters and defenders quickly access useful info.",
    tech: ["React", "Tailwind CSS", "Markdown", "Netlify", "GitHub"],
    link: "https://cyberref.netlify.app",
  },
  {
    title: "Active Directory Security Lab",
    description: "A lab environment built with Windows Server and clients to simulate and audit AD environments. Focus on enumeration, privilege escalation, and securing AD infrastructures.",
    tech: ["Windows Server", "AD", "PowerShell", "VMware", "Kali Linux"],
    link: "https://github.com/ademto",
  },
  {
    title: "WpFortress – WordPress Vulnerability Scanner CLI",
    description: "Python-based CLI tool leveraging WPScan API to identify WordPress core, plugin, and theme vulnerabilities. Features upcoming AI and password audit support.",
    tech: ["Python", "WPScan", "API", "Git", "GitHub", "Terminal"],
    link: "https://github.com/ademto",
  },
  {
    title: "WordPress Custom Theme & CI/CD Integration",
    description: "Custom Devthing theme with Gutenberg blocks and GitHub Actions-based CI/CD for Docker deployment. Prioritizes speed, accessibility, and maintainability.",
    tech: ["WordPress", "PHP", "HTML", "CSS", "Gutenberg", "Docker", "GitHub Actions", "GCP"],
    link: "https://github.com/ademto",
  },
  {
    title: "CheqPro – Financial Web App",
    description: "A secure financial web app for managing transactions with user auth, real-time updates, and analytics dashboard. Built for scalability and performance.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "GCP", "Netlify"],
    link: "https://cheqpro.tech/",
  },
  {
    title: "Fitness Web App",
    description: "Modern React app for workout tracking, progress monitoring, and custom fitness plans. Built for speed and mobile responsiveness.",
    tech: ["React", "Tailwind CSS", "GitHub", "Netlify", "Git", "Vite"],
    link: "https://github.com/ademto/FitJourney-Website",
  },
  {
    title: "REST Countries API with Theme Switcher",
    description:
      "A responsive web app that displays country data from the REST Countries API. Features include region filtering, dark/light mode, search, and detailed routing for each country.",
    tech: ["React", "Tailwind CSS", "REST API", "React Router", "Vite"],
    link: "https://rest-countries-ademto.netlify.app",
  },  
  {
    title: "Bethel Apostolic Church Website",
    description: "Modern church website built with Next.js featuring calendars, donation features, and tools to foster church community engagement.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub", "Vercel"],
    link: "https://bethelapostolicchurch.ca",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 opacity-50" />
      
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center drop-shadow">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/30 transition-all duration-500 hover:-translate-y-3 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 py-1.5 px-3 rounded-full text-xs font-medium border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/30 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a 
                    target="_blank"
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-all duration-300 hover:scale-105 flex items-center group"
                  >
                    View Project 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      
      {/* Staggered animation styles */}
      <style>{`
        .grid > div {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
