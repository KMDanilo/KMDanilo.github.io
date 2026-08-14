// Pega os dados do projeto e o ícone da seta
import { ArrowRight } from "lucide-react";

// Monta um card com os dados recebidos em project
export default function ProjectCard({ project }) {
  // Separa cada dado de project em uma variável
  const {
    method,
    path,
    status,
    statusType,
    title,
    description,
    tags,
    href,
    accessNote,
  } = project;

  return (
    // Monta o card inteiro
    <article className="project-card">
      <div className="project-header">
        <span className="project-method">{method}</span>
        <span className="project-path">{path}</span>

        {/* Junta as classes para mudar a cor do selo */}
        <span className={`project-status status-${statusType}`}>{status}</span>
      </div>

      <h3>{title}</h3>
      <p className="project-description">{description}</p>

      {/* Pega as tecnologias e cria uma tag para cada uma */}
      <div className="tag-list">
        {tags.map((tag) => (
          // Usa o nome para o React saber qual tag é qual
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Mostra o link quando o projeto tem repositório público */}
      {href ? (
        <a className="repository-link" href={href}>
          ver repositório <ArrowRight size={13} aria-hidden="true" />
        </a>
      ) : accessNote ? (
        // Se não tiver repositório mostra o motivo sem criar link
        <span className="repository-restricted">{accessNote}</span>
      ) : null}
    </article>
  );
}
