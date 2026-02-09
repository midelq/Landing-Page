import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main>
        <Hero />

        {/* Projects Section - placeholder */}
        <section id="projects" className="py-20">
          <h2 className="text-2xl font-bold text-center">Projects</h2>
        </section>

        {/* Experience Section - placeholder */}
        <section id="experience" className="py-20">
          <h2 className="text-2xl font-bold text-center">Experience</h2>
        </section>

        {/* Contact Section - placeholder */}
        <section id="contact" className="py-20">
          <h2 className="text-2xl font-bold text-center">Contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
