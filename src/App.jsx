import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero";
import Technologies from "./componets/Technologies";
import Projects from "./componets/Projects";
import Experience from "./componets/Experiance";
import Contact from "./componets/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-slate-100 antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(251,191,36,0.16),_transparent_20%),linear-gradient(180deg,_rgba(5,8,22,0.96),_rgba(5,8,22,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_88%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
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
