import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiReact,
    DiGit,
    DiGithubBadge
} from 'react-icons/di';
import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: 'É uma linguagem de marcação, usada para definir a estrutura do seu conteúdo. HTML consiste de uma série de elementos, que você usa para delimitar ou agrupar diferentes partes do conteúdo para que ele apareça ou atue de determinada maneira.' },

    { id: "css", name: "CSS3", icon: <DiCss3 />, description: 'É uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.' },

    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: 'É uma linguagem interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js, Apache CouchDB e Adobe Acroba' },

    {id: "ts", name: "TypeScript", icon: <DiJsBadge />, description: 'É uma linguagem de programação fortemente tipada, que se baseia em JavaScritp. TypeScript nos ajuda a evitar erros, ajuda no entendimento e na manutenção do código'},

    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: 'Node.js é um ambiente de execução multi-plataforma em JavaScript que permite aos desenvolvedores produzirem aplicações para rede e server-side usando o JavaScript.' },



    { id: "react", name: "React", icon: <DiReact />, description: 'É uma biblioteca para construção de interfaces de usuário. É utilizado com outras bibliotecas para renderização em certos ambientes.' },

    { id: "git", name: "Git", icon: <DiGit />, description: 'É um sistema de controle de versões distribuído, usado para controlar o histórico de alterações de arquivos e principalmente de projetos de desenvolvimento de software. Ele permite mais flexibilidade no fluxo de trabalho, segurança e desempenho.' },

    { id: "github", name: "Github", icon: <DiGithubBadge />, description: 'É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.' }
]

const TecnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        <div className='tech-icon'>{tech.icon}</div>
                        
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TecnologiesContainer;