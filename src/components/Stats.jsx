// Mostra os dois cards do GitHub Readme Stats
export default function Stats() {
  return (
    // id stats faz o link do cabeçalho parar aqui
    <section id="stats" className="section">
      {/* Mostra o comando acima dos stats */}
      <p className="section-command">// cat stats.txt</p>

      {/* Guarda as img em grid */}
      <div className="stats-grid">
        <img
          src="https://github-readme-stats-seven-mocha-12.vercel.app/api?username=KMDanilo&show_icons=true&theme=nord&hide_border=true"
          alt="Estatísticas do perfil KMDanilo no GitHub"
          height="150"
        />
        <img
          src="https://github-readme-stats-seven-mocha-12.vercel.app/api/top-langs/?username=KMDanilo&layout=compact&theme=nord&hide_border=true"
          alt="Linguagens mais usadas nos repositórios de KMDanilo"
          height="150"
        />
      </div>
    </section>
  );
}
