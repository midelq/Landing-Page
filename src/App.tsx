import Header from "./components/layout/Header";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <main>
        {/* Hero Section - placeholder */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <h1 className="text-4xl font-bold">Hero Section</h1>
        </section>

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
