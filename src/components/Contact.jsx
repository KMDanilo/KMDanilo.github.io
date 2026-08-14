// Pega o ícone do email e os ícones do GitHub e LinkedIn
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

// Mostra os três contatos
export default function Contact() {
  return (
    <section id="contato" className="section">
      <p className="section-command">// contact --gmail --linkedin --github</p>

      {/* Guarda os contatos em grid */}
      <div className="contact-links">
        {/* Clica e abre o email com meu endereço */}
        <a className="contact-link" href="mailto:kmdanilo1@gmail.com">
          <Mail size={15} aria-hidden="true" />
          kmdanilo1@gmail.com
        </a>

        {/* Clica e abre meu LinkedIn */}
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/kmdanilo/"
        >
          <LinkedinIcon />
          linkedin.com/in/kmdanilo
        </a>

        {/* Clica e abre meu GitHub */}
        <a className="contact-link" href="https://github.com/KMDanilo">
          <GithubIcon />
          github.com/KMDanilo
        </a>
      </div>
    </section>
  );
}
