import { useState } from "react";
import { useForm } from "@formspree/react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xrbpdwjd");  // Your Form ID

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900/20 to-slate-900 opacity-50" />
      
      <div className="px-6 w-full max-w-2xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center drop-shadow">
          Get In Touch
        </h2>

        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
          {state.succeeded ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <p className="text-green-400 text-xl font-semibold mb-2">Message Sent Successfully!</p>
              <p className="text-gray-300">Thanks for reaching out! We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="Your Name"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-400/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-400 focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-400/20 resize-none"
                  placeholder="Your Message..."
                />
              </div>

              {/* Check if state.errors is an array before accessing length */}
              {Array.isArray(state.errors) && state.errors.length > 0 && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <ul className="text-red-400 space-y-1">
                    {state.errors.map((error, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">⚠️</span>
                        {error.message}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
