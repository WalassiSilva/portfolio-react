import passInGif from "../img/projects/pass-in.gif";
import pokeApiGif from "../img/projects/poke-api.gif";
import portfolioGif from "../img/projects/portfolio.gif";
import moneyManagerGif from "../img/projects/money-manager.gif";
import githubApiGif from "../img/projects/github-api.gif";
import templateSite from "../img/projects/template-site.gif";

export const dataProjects = [
  {
    id: 0,
    title: "Site Template",
    description:
      "Este template é uma versão de demonstração, totalmente customizável para atender às necessidades específicas de cada cliente.",
    possibilities: [
      "Header fixo;",
      "Links para suas redes sociais;",
      "Design responsivo;",
      "Opções de tema claro e escuro;",
      "Animações de entrada em cada seção;",
      "Slider interativo para navegação de itens;",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "AOS(Animate on Scroll",
      "React Router Dom",
      "Swiper",
    ],
    link: "https://template-git-template-walassisilvas-projects.vercel.app",
    preview: templateSite,
  },
  {
    id: 1,
    title: "Money Manager",
    description:
      "Money Manager é um projeto fullstack criado do rezo (Frontend, Backend, Database) para gerenciar gastos e receitas de forma simples e eficiente através de gráficos e calendarios, filtros e buscas.",
    possibilities: [
      "Criação de transações;",
      "Listagem de transações por data, nome e categoria;",
      "Alteração e remoção de transações;",
      "Acompanhar o patrimônio;",
      "Visualizar graficamente suas despesas;",
      "Pesquisar por transações pelo nome;",
    ],
    technologies: [
      "React",
      "typescript",
      "React Router Dom",
      "Node",
      "Express",
      "PostgreSQL",
      "Prima ORM",
      "ESLint",
      "Tailwind",
    ],
    link: "https://github.com/WalassiSilva/money-manager",
    preview: moneyManagerGif,
  },

  {
    id: 2,
    title: "Pass in",
    description:
      "Pass.in é um API em Node.js para gerenciamento de eventos presenciais com cadastro de participantes, check-in, geração de badges.",
    possibilities: [
      "Criar um evento com nome descrição e limite de participantes;",
      "Cadastrar os participantes;",
      "Listar todos os participantes de dado evento;",
      "Fazer checkin dos participantes;",
      "Gerar um badge para cada participante;",
    ],
    technologies: [
      "TypeScript",
      "Fastify",
      "Zod",
      "Prisma",
      "Swagger",
      "SQLite",
    ],
    link: "https://pass-in-api-fpob.onrender.com/docs/static/index.html",
    preview: passInGif,
  },

  {
    id: 3,
    title: "Portfólio",
    description:
      "Portfólio que resume minha jornada com foco na área de desenvolvimento web. Nele é possível saber um pouco sobre quem sou, minhas redes de contato, o que estudei e alguns dos projetos feitos.",
    possibilities: [
      "Saber um pouco sobre mim;",
      "Saber o que estou aprendendo;",
      "Ver meus projetos mais relevantes;",
    ],
    technologies: ["React", "SASS", "Vite", "React-icons"],
    link: "https://github.com/WalassiSilva/portfolio",
    preview: portfolioGif,
  },
  {
    id: 4,
    title: "PokeApi",
    description:
      "PokeApi é um projeto de busca de dados dos pokemons. Os dados são fornecidos pela Api do Pokemon.",
    possibilities: [
      "Pesquisar por pokemons através do número ou nome;",
      "Acessar página interna com detalhes do pokemon;",
      "Filtrar pokemon pelo tipo ou nome;",
      "Mudar entre tema claro e escuro;",
    ],
    technologies: [
      "React",
      "Styled Components",
      " React Router Dom",
      "PokeAPI",
      "Context API",
    ],
    link: "https://pokedex-api-chi-two.vercel.app",
    preview: pokeApiGif,
  },
  {
    id: 5,
    title: "GitHub User Api",
    description:
      "GitHub User Api é um projeto feito para buscar a informações dos usuários da plataforma GitHub através da Api.",
    possibilities: [
      "Pesquisar por um usuario;",
      "Visualizar o perfil do usuario;",
      "Direcionar para Repositorios;",
      "Visualizar detalhes dos repositorios;",
      "Visualizar bio, seguidores e seguindo;",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "GitHub API"],
    link: "https://walassisilva.github.io/github-users-api/",
    preview: githubApiGif,
  },
];
