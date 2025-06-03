import { RevealOnScroll } from "../RevealOnScroll";

const featuredProjects = [
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
    title: "Church Website",
    description: "WordPress-powered site with calendars, donation features, and tools to foster church community engagement.",
    tech: ["React", "Tailwind CSS", "GitHub", "Netlify", "Git", "Vite"],
    link: "http://bethelapostolic.ca/",
  },
  {
    title: "E-commerce Website with Shopify",
    description: "Shopify-based store with payment processing, product listings, and inventory management for seamless online sales.",
    tech: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    link: "https://echoemberco.com/",
  },
];


export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map(project =>  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a target="_blank"
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>)}


          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
