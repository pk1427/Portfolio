import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Technologies from "./componets/Technologies";
import Projects from "./componets/Projects";
import Experience from "./componets/Experiance";
import Contact from "./componets/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#090a08] text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(20,184,166,0.16),_transparent_34%),linear-gradient(225deg,_rgba(245,158,11,0.12),_transparent_30%),linear-gradient(180deg,_rgba(9,10,8,0.94),_#090a08_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.055)_1px,transparent_1px)] bg-[size:80px_80px] opacity-70" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-3 min-[420px]:px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="pb-16">
          <Hero />
          <Technologies />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
