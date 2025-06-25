import { useEffect } from "react";
import PropTypes from "prop-types";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(18,18,28,0.85)] backdrop-blur-xl border-b border-white/10 shadow-xl transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-2xl font-extrabold text-white tracking-tight drop-shadow">
            Emmanuel<span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">.tech</span>
          </a>

          <div
            className="w-8 h-6 relative cursor-pointer z-50 md:hidden flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block w-8 h-1 bg-white rounded-full transition-all duration-300" />
            <span className="block w-8 h-1 bg-white rounded-full mt-1 transition-all duration-300" />
            <span className="block w-8 h-1 bg-white rounded-full mt-1 transition-all duration-300" />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-lg font-semibold text-gray-200 hover:text-white transition-colors px-2 py-1 group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Custom underline animation */}
      <style>{`
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </nav>
  );
};

Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
