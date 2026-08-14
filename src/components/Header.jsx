// Mostra o prompt e os links no topo
export default function Header() {
  return (
    // Pega o cabeçalho inteiro para usar o fundo do .site-header
    <header className="site-header">
      {/* Guarda o prompt e os links na mesma linha */}
      <div className="header-content">
        {/* Mostra o prompt no canto do cabeçalho */}
        <span className="terminal-brand">danilo@portfolio:~$</span>

        {/* Cada # procura o id igual e leva até a seção */}
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#projetos">projetos</a>
          <a href="#stats">stats</a>
          <a href="#contato">contato</a>
        </nav>
      </div>
    </header>
  );
}
