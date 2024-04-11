

import pokeapi from '../img/projects/poke-api.gif'
import githubApi from '../img/projects/github-api.gif';
import portfolio from '../img/projects/portfolio.gif';
import passIn from "../img/projects/pass-in.gif";
import moneyManager from "../img/projects/money-manager.gif";

import '../styles/components/projects.sass'
const ProjectContainer = () => {

    return (
        <section>

            <h2>Projetos</h2>
            <div className="container-projects container">
                <div className="project">
                    <h3>Money Manager</h3>
                    <div className="project-info">
                        <p>Money Manager é um projeto fullstack criado do zedo para gerenciar gastos e receitas de forma simples e eficiente através de gráficos e calendarios.</p>
                        <p>Esse projeto lhe permite:</p>
                        <ul>
                            <li>Criar transações.</li>
                            <li>Listrar por data, nome, categoria.</li>
                            <li>Altera e remover transações.</li>
                            <li>Acompanhar o patrimônio.</li>
                            <li>Visualizar graficamente o suas despensas.</li>
                            <li>Pesquisar por transações pelo nome</li>
                        </ul>

                        <p> <strong>Tecnologias usadas:</strong> React, TypeScript TailwindCss, Express, Prisma ORM, PostGreSQL, Node.js. </p>
                        <p className='git-page'>🔗 Clique na imagem para ver o projeto</p>
                    </div>
                    <a href="https://github.com/WalassiSilva/money-manager" target='_blank' rel="noreferrer">
                        <img src={moneyManager} alt="nome do projeto" />
                    </a>
                </div>                
                <div className="project">
                    <h3>Pass.in </h3>
                    <div className="project-info">
                        <p>Pass.in é uma API criada para gerencimento de evento presenciais. </p>
                        <p>Esse projeto lhe permite:</p>
                        <ul>
                            <li>Criar um evento com nome descrição e limite de participantes.</li>
                            <li>Cadastrar os participantes.</li>
                            <li>Listar todos os participantes de dado evento.</li>
                            <li>Fazer checkin dos participantes.</li>
                            <li>Gerar um badge para cada participante.</li>
                        </ul>

                        <p> <strong>Tecnologias usadas:</strong> TypeScript, Fastify, Zod, Prisma, Swagger, SQLite. </p>
                        <p className='git-page'>🔗 Clique na imagem para ver o projeto</p>
                    </div>
                    <a href="https://pass-in-api-fpob.onrender.com/docs/static/index.html" target='_blank' rel="noreferrer">
                        <img src={passIn} alt="nome do projeto" />
                    </a>
                </div>
                <div className="project">
                    <h3>Portfólio</h3>
                    <div className="project-info">
                        <p>Portfólio que resume minha jornada com foco na área de desenvolvimento web.
                        </p>
                        <p>Nele é possível saber um pouco sobre quem sou, minhas redes de contato, o que estudei e alguns dos projetos feitos</p>
                        <p><strong>Tecnologias usadas:</strong> React + Vite, Sass</p>
                        <p className='git-page'>🔗 Clique na imagem para ver o projeto</p>
                    </div>
                    <a href="#">
                        <img src={portfolio} alt="nome do projeto" />
                    </a>
                </div>
                <div className="project">
                    <h3>PokeApi</h3>
                    <div className="project-info">
                        <p>PokeApi é um projeto de busca de dados dos pokemons. Os dados são fornecidos pela Api do Pokemon.</p>
                        <p>Esse projeto lhe permite:</p>
                        <ul>
                            <li>Pesquisar por pokemons através do número ou nome.</li>
                            <li>Acessar página interna com detalhes do pokemon.</li>
                            <li>Filtrar pokemon pelo tipo ou nome.</li>
                            <li>Mudar entre tema claro e escuro.</li>
                        </ul>

                        <p> <strong>Tecnologias usadas:</strong> React, Styled Components, React Router Dom. </p>
                        <p className='git-page'>🔗 Clique na imagem para ver o projeto</p>
                    </div>
                    <a href="https://pokedex-api-chi-two.vercel.app" target='_blank' rel="noreferrer">
                        <img src={pokeapi} alt="nome do projeto" />
                    </a>
                </div>
                <div className="project">
                    <h3>GitHub User Api</h3>
                    <div className="project-info">
                        <p>GitHub User Api é um projeto feito para buscar a informações dos usuários da plataforma <strong>GitHub</strong> através da Api. </p>
                        <p>Ao fazer a busca, é retornado o nome, foto, bio, seguidores, seguindo, os repositórios em formato de link e informações dos mesmos</p>
                        <p><strong>Tecnologias usadas:</strong> HTML, CSS, JavaScript, Api do GitHub</p>
                        <p className='git-page'>🔗 Clique na imagem para ver o projeto</p>
                    </div>
                    <a href="https://walassisilva.github.io/github-users-api/" target='_blank' rel="noreferrer">
                        <img src={githubApi} alt="nome do projeto" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ProjectContainer;