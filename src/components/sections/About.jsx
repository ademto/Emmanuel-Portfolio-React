import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Wordpress",
  ];

  const backendSkills = ["Node.js", "Express", "Python", "Flask", "PHP", "MongoDB", "PostgreSQL"];
  const cyberSkills = ["Penetration Testing", "Ethical Hacking", "Web Application Security", "Network Security", "Cryptography"];
  const tools = ["Git/GitHub", "Docker", "AWS", "GCP", "Azure", "Unit Testing", "Cloudfare", "Continuous Integration", "Linux"]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 opacity-50" />
      
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center drop-shadow">
            About Me
          </h2>

          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 mb-12">
            <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed font-medium">
              Passionate full-stack developer and cybersecurity professional with expertise in building scalable web applications and implementing robust security solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-white">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 py-2 px-4 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/30 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-white">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 py-2 px-4 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/30 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-white">Cybersecurity</h3>
                <div className="flex flex-wrap gap-3">
                  {cyberSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-300 py-2 px-4 rounded-full text-sm font-medium border border-red-500/30 hover:border-red-400/50 hover:bg-red-500/30 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-4 text-white">Tools</h3>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 py-2 px-4 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-cyan-500/30 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="text-3xl mr-3">🏫</span>
                Education
              </h3>
              <div className="space-y-4 text-gray-200">
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-bold text-lg text-white mb-2">Diploma in Cybersecurity</h4>
                  <p className="text-purple-300 font-medium">Toronto School Of Management</p>
                  <p className="text-sm text-gray-400">May 2024 - April 2025</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Penetration Testing, Network Security, Ethical Hacking, Secure Software Development, Cloud Security, Web Application Security
                  </p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="text-3xl mr-3">💼</span>
                Work Experience
              </h3>
              <div className="space-y-6 text-gray-200">
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-bold text-lg text-white mb-2">IT & Cybersecurity Specialist</h4>
                  <p className="text-orange-300 font-medium">Orange Model Management Inc.</p>
                  <p className="text-sm text-gray-400">Jul 2024 - May 2025 · 11 mos</p>
                  <ul className="text-sm text-gray-300 mt-2 space-y-1">
                    <li>• Managed and optimized security for company websites, deploying Web Application Firewalls for protection</li>
                    <li>• Configured and maintained firewalls like pfSense to secure internal networks effectively</li>
                    <li>• Conducted vulnerability assessments following NIST standards and provided responsive IT support</li>
                    <li>• Provided IT support for on-site and remote teams across Windows, macOS, and Ubuntu systems</li>
                    <li>• Administered Google Workspace and Slack, enhancing communication and productivity</li>
                    <li>• Managed automated backup systems and led disaster recovery planning</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-bold text-lg text-white mb-2">Cyber Security Analyst</h4>
                  <p className="text-blue-300 font-medium">World Wireless Solutions Inc.</p>
                  <p className="text-sm text-gray-400">Feb 2025 - Apr 2025 · 3 mos</p>
                  <ul className="text-sm text-gray-300 mt-2 space-y-1">
                    <li>• Implemented IAM controls using Microsoft Entra ID to enhance security measures</li>
                    <li>• Monitored network traffic with Darktrace to detect and mitigate potential threats</li>
                    <li>• Supported MFA policies to strengthen security posture and protect sensitive data</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h4 className="font-bold text-lg text-white mb-2">IT & Web Development</h4>
                  <p className="text-cyan-300 font-medium">Bethel Apostolic Church</p>
                  <p className="text-sm text-gray-400">2024 - Present</p>
                  <ul className="text-sm text-gray-300 mt-2 space-y-1">
                    <li>• Developed and maintain the church website using Next.js and modern web technologies</li>
                    <li>• Manage IT infrastructure, cybersecurity, and software development for the church</li>
                    <li>• Developed and maintained custom software solutions for operational use</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
