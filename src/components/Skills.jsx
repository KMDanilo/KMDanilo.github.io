// Mostra minhas habilidades separadas por categoria
export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <p className="section-command">// CAT HABILIDADES.TXT</p>

      {/* Cada linha guarda a categoria e suas habilidades */}
      <div className="skills-list">
        <div className="skill-row">
          <span className="skill-category">Linguagens</span>
          <p>C · C++ · Python · Java · JavaScript · SQL</p>
        </div>

        <div className="skill-row">
          <span className="skill-category">Back-end e Dados</span>
          <p>Spring Boot · PostgreSQL · APIs REST · gRPC</p>
        </div>

        <div className="skill-row">
          <span className="skill-category">IA e Segurança</span>
          <p>
            RAG · LLMs locais e em nuvem · OpenCV · Pentest de APIs REST ·
            OWASP API Security Top 10 · NIST SP 800-115 · CVSS v3.1
          </p>
        </div>

        <div className="skill-row">
          <span className="skill-category">Mobile</span>
          <p>React Native · Expo</p>
        </div>

        <div className="skill-row">
          <span className="skill-category">Ferramentas</span>
          <p>Docker · Git · GitHub · LaTeX</p>
        </div>

        <div className="skill-row">
          <span className="skill-category">Idiomas</span>
          <p>Português (Nativo) · Inglês (Avançado)</p>
        </div>
      </div>
    </section>
  );
}
