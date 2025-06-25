import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-700 via-cyan-500 to-purple-600 opacity-80 blur-sm" />
      {/* Animated Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-blob1" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-cyan-400 opacity-30 rounded-full filter blur-3xl animate-blob2" />
      <RevealOnScroll>
        <div className="text-center z-10 px-4 animate-fadein">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
            Hi, I&apos;m Emmanuel Adetoro
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-4xl mx-auto font-medium drop-shadow">
            I make computers do things you can&apos;t possibly imagine. As a full-stack developer and cybersecurity professional, I build secure, scalable applications — and identify vulnerabilities before attackers can exploit them.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500/90 text-white py-3 px-8 rounded-lg font-semibold text-lg shadow-lg transition-all duration-200 relative overflow-hidden hover:scale-105 hover:shadow-blue-400/40 hover:bg-blue-600/90 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-400/60 text-blue-100 py-3 px-8 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-blue-200/30 hover:bg-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://github.com/ademto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-200 hover:scale-125"
            >
              <FaGithub size={34} />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-adetoro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-400 transition duration-200 hover:scale-125"
            >
              <FaLinkedin size={34} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
      {/* Custom Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease-in-out infinite;
        }
        @keyframes blob1 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(30px, -20px); }
          66% { transform: scale(0.9) translate(-20px, 30px); }
        }
        .animate-blob1 { animation: blob1 12s infinite ease-in-out; }
        @keyframes blob2 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(-30px, 20px); }
          66% { transform: scale(0.9) translate(20px, -30px); }
        }
        .animate-blob2 { animation: blob2 14s infinite ease-in-out; }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: fadein 1.2s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </section>
  );
};
