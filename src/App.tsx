import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main>
        <Hero />

        <Projects />

        <Experience />

        {/* Contact Section - placeholder */}
        <section id="contact" className="py-20">
          <h2 className="text-2xl font-bold text-center">Contact</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
