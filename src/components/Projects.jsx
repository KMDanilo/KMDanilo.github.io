// Monta a seção dos projetos
// Pega as listas e o card usado para cada projeto
import { collectiveProjects, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

// Mostra os projetos principais e depois os coletivos
export default function Projects() {
  return (
    <section id="projetos" className="section">
      <h2 className="section-command">// GET /projetos</h2>

      {/* Mostra a mensagem e o link para todos os repositórios */}
      <p className="projects-intro">
        Aqui estão alguns projetos que desenvolvi. Para ver outros, acesse meu{" "}
        <a
          className="projects-intro-link"
          href="https://github.com/KMDanilo"
        >
          GitHub
        </a>
        .
      </p>

      {/* Pega cada projeto e cria um ProjectCard */}
      {projects.map((project) => (
        <ProjectCard
          // Usa o path para o React saber qual card é qual
          key={project.path}
          // Manda os dados para montar o card
          project={project}
        />
      ))}

      {/* Mostra que os próximos projetos foram feitos coletivamente */}
      <h2 className="section-command collective-command">
        // GET /projetos/coletivos
      </h2>

      {/* Pega cada projeto coletivo e usa o mesmo card */}
      {collectiveProjects.map((project) => (
        <ProjectCard
          key={project.path}
          project={project}
        />
      ))}
    </section>
  );
}
