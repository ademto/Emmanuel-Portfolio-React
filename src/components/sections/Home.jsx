import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Emmanuel Adetoro
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-4xl mx-auto">
          I make computers do things you can’t possibly imagine. As a full-stack developer and cybersecurity professional, I build secure, scalable applications — and identify vulnerabilities before attackers can exploit them.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/ademto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-200"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-adetoro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition duration-200"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
