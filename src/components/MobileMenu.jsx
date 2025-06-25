import PropTypes from "prop-types";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full backdrop-blur-xl bg-[rgba(18,18,28,0.95)] z-50 flex flex-col items-center justify-center
                     transition-all duration-500 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-8 right-8 text-white text-4xl focus:outline-none cursor-pointer hover:text-blue-400 transition-colors duration-300"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {[
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ].map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className={`text-3xl font-bold text-white my-6 transform transition-all duration-500 hover:text-blue-400 hover:scale-110
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }
                      `}
          style={{ transitionDelay: `${index * 0.1}s` }}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
