import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Matomo tracking integration (added here)
  useEffect(() => {
    // Initialize Matomo tracking array if it's not already created
    var _mtm = window._mtm = window._mtm || [];

    // Set the start time and trigger the 'mtm.Start' event
    _mtm.push({
      'mtm.startTime': new Date().getTime(),
      'event': 'mtm.Start'
    });

    // Dynamically load the Matomo tracking script
    var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = 'https://cdn.matomo.cloud/pastor.matomo.cloud/container_OH7WkSnb.js'; // Replace with your Matomo container URL
    s.parentNode.insertBefore(g, s);
  }, []); // The empty array ensures this runs only once, when the component is mounted

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
