import React from 'react'

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
                    <a href="https://pokedex-api-chi-two.vercel.app" target='_blank'>
                        <img src={pokeapi} alt="nome do projeto" />
                        <div className="project-info">
                            <p>PokeApi é um projeto de busca de dados dos pokemons. Os dados são fornecidos pela Api do Pokemon.</p>
                            <p>Esse projeto lhe permite:</p>
                            <li>Pesquisar por pokemons através do número ou nome.</li>
                            <li>Acessar página interna com detalhes do pokemon</li>
                            <li>Filtrar pokemon pelo tipo ou nome</li>
                            <li>Mudar entre tema claro e escuro</li>

                            <p>Tecnologias usadas: React, Styled Components, React Router Dom. </p>
                            <p className='git-page'>🔗 Clique para ver o projeto</p>
                        </div>
                    </a>
                </div>
                <div className="project">
                    <h3>GitHub User Api</h3>
                    <a href="https://walassisilva.github.io/github-users-api/" target='_blank'>
                        <img src={githubApi} alt="nome do projeto" />
                        <div className="project-info">
                            <p>GitHub User Api é um projeto feito para buscar a informações dos usuários da plataforma "GitHub" através da Api. </p>
                            <p>Ao fazer a busca, é retornado nome, foto, bio, seguidores, seguindo, os repositórios em formato de link e informações dos mesmos</p>
                            <p>Tecnologias usadas: HTML, CSS, JavaScript, Api do GitHub</p>
                            <p className='git-page'>🔗 Ver no Github Page</p>
                        </div>
                    </a>
                </div>
                <div className="project">
                    <h3>Portfólio</h3>
                    <a href="#">
                        <img src={portfolio} alt="nome do projeto" />
                        
                        <div className="project-info">
                            <p>Esse projeto é uma forma de reúnir minhas habilidades, competências . </p>
                            <p>Tecnologias usadas: React + Vite, Sass</p>
                            <p className='git-page'>🔗 Ver no Github Page</p>
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ProjectContainer;