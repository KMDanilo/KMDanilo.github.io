// Pega a função que escreve o whoami letra por letra
import { useTypewriter } from "../hooks/useTypewriter";

// Mostra o terminal meu nome curso e formatura
export default function Hero() {
  // typed guarda a parte do whoami que já apareceu
  const typed = useTypewriter("whoami");

  return (
    <section className="hero">
      {/* Caixa que parece uma janela de terminal */}
      <div className="terminal-window">
        {/* Barra com três bolinhas decorativas */}
        <div className="terminal-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        {/* aria-label mostra o whoami completo */}
        <div className="terminal-command" aria-label="$ whoami">
          <span className="terminal-prompt">$</span> {typed}
          {/* span vazio que vira o cursor no CSS */}
          <span className="cursor-blink" aria-hidden="true" />
        </div>
      </div>

      {/* Mostra meu nome como título principal */}
      <h1>Danilo Kotaka Marana</h1>
      <p className="hero-course">Estudante de Ciência da Computação — UEL</p>
      <p className="hero-details">Formatura em dez/2026</p>
    </section>
  );
}
