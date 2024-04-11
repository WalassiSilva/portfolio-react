

import pokeapi from '../img/projects/poke-api.gif'
import githubApi from '../img/projects/github-api.gif';
import portfolio from '../img/projects/portfolio.gif';
import '../styles/components/projects.sass'
const ProjectContainer = () => {

    return (
        <section>

            <h2>Projetos</h2>
            <div className="container-projects container">
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
            </div>
        </section>
    );
};

export default ProjectContainer;