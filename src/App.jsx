// Monta a página
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";

// Organiza a ordem das seções na página
export default function App() {
  return (
    // Pega o site inteiro para usar o estilo .app
    <div className="app">
      <Header />

      {/* Guarda apresentação habilidades stats projetos e contatos nessa ordem */}
      <main className="main-content">
        <Hero />
        <Skills />
        <Stats />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
