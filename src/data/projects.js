// Lista com os projetos principais
export const projects = [
  {
    // Primeira linha do card com método caminho e estado
    method: "GET",
    path: "/tcc/pentest-api-ia",
    status: "200 OK",
    statusType: "success",

    // Nome e descrição do projeto
    title: "Pentest de APIs REST Assistido por IA — TCC",
    description:
      "Trabalho de Conclusão de Curso que investiga o uso de IA para auxiliar pentests de APIs REST. A pesquisa estrutura uma metodologia baseada no OWASP API Security Top 10 e no NIST SP 800-115, aplicada de forma controlada ao sistema ConsistencIA, comparando a identificação, a classificação e a documentação de vulnerabilidades obtidas por análise manual e com apoio de IA.",

    // Tecnologias mostradas em tags
    tags: ["Python", "OWASP API Top 10", "NIST SP 800-115", "Pesquisa"],

    // Mostra que o código e os detalhes não são públicos
    accessNote: "acesso restrito — detalhes protegidos",
  },
  {
    method: "GET",
    path: "/projetos/lab-prog-uel",
    status: "200 OK",
    statusType: "success",
    title: "Aplicações Web e Mobile — Laboratório de Programação",
    description:
      "Coleção formada por um aplicativo mobile para acompanhamento de hábitos e dois sistemas web: cadastro de produtos e gerenciamento de tarefas. Os projetos incluem operações CRUD, validação de formulários, filtros de pesquisa, controle de tarefas e navegação entre telas.",
    tags: [
      "Java",
      "JavaScript",
      "Spring Boot",
      "Thymeleaf",
      "React Native",
      "Expo",
      "React Navigation",
      "Maven",
    ],
    href: "https://github.com/KMDanilo/lab-prog-uel",
  },
  {
    method: "GET",
    path: "/projetos/c-algorithms",
    status: "200 OK",
    statusType: "success",
    title: "Algoritmos e Estruturas de Dados em C",
    description:
      "Coleção de implementações desenvolvidas durante a graduação, abrangendo fundamentos da linguagem C, manipulação de memória, álgebra linear e estruturas como listas, filas, pilhas, árvores AVL, grafos, heaps e tabelas hash.",
    tags: ["C", "Estruturas de Dados", "Grafos", "Árvores AVL"],
    href: "https://github.com/KMDanilo/c-algorithms-and-data-structures",
  },
  {
    method: "GET",
    path: "/projetos/ia-ml-uel",
    status: "200 OK",
    statusType: "success",
    title: "Inteligência Artificial e Machine Learning",
    description:
      "Implementações do zero de algoritmos de inteligência artificial e aprendizado de máquina, incluindo algoritmo genético, busca em largura, sistema especialista, K-Means, KNN, Naive Bayes, Perceptron e modelos de regressão.",
    tags: ["Python", "Machine Learning", "NumPy", "Pandas"],
    href: "https://github.com/KMDanilo/ia-ml-uel",
  },
  {
    method: "GET",
    path: "/projetos/pentest-ia-relatorio",
    status: "200 OK",
    statusType: "success",
    title: "Gerador de Relatórios de Pentest com IA",
    description:
      "Sistema que transforma anotações e evidências de pentests em relatórios estruturados. Utiliza agentes de IA e RAG, possui versões local e em nuvem e gera documentos a partir de templates Markdown ou LaTeX.",
    tags: ["Python", "RAG", "CrewAI", "LangChain", "LaTeX"],
    href: "https://github.com/KMDanilo/pentest-ia-relatorio",
  },
];

// Lista dos projetos feitos coletivamente
export const collectiveProjects = [
  {
    method: "GET",
    path: "/coletivos/assessment-system",
    status: "200 OK",
    statusType: "success",
    title: "Sistema de Avaliações Acadêmicas",
    description:
      "Sistema para gerenciar turmas, disciplinas, professores, estudantes, bancos de questões e avaliações. Inclui modelagem relacional e consultas para produzir relatórios sobre notas, desempenho e evolução acadêmica.",
    tags: ["Java", "Servlets/JSTL", "PostgreSQL", "SQL"],
    href: "https://github.com/KMDanilo/assessment-system-db1",
  },
  {
    method: "GET",
    path: "/coletivos/sdwb",
    status: "200 OK",
    statusType: "success",
    title: "SDWB — Quadro Branco Distribuído",
    description:
      "Quadro branco coletivo distribuído no qual vários nós compartilham alterações em tempo real, sem depender de um servidor central permanente. Implementa descoberta de serviços, replicação de estado, exclusão mútua, heartbeat e eleição automática de um novo coordenador após falhas.",
    tags: ["Python", "gRPC", "Protocol Buffers", "Sistemas Distribuídos"],
    href: "https://github.com/MarcoHenryz/Trabalho-SistDist/tree/main/trabalhofinal",
  },
];
