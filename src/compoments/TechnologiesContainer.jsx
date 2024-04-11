import {
    DiGit,
    DiSass,
    DiCss3,
    DiHtml5,
    DiReact,
    DiJsBadge,
    DiNodejsSmall,
    DiGithubBadge,
} from 'react-icons/di';
import { SiExpress, SiPrisma, SiReactrouter, SiStyledcomponents, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import '../styles/components/technologiescontainer.sass';

const technologies = [
    { id: "react", name: "React", icon: <DiReact />, description: 'É uma biblioteca para construção de interfaces de usuário. É utilizado com outras bibliotecas para renderização em certos ambientes.' },

    { id: "react-router", name: "React Router Dom", icon: <SiReactrouter />, description: "Biblioteca de rotas do React. Permite que os desenvolvedores construam rotas de maneira eficiente e de forma dinâmica. " },

    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: 'É uma linguagem interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js, Apache CouchDB e Adobe Acroba' },

    { id: "ts", name: "TypeScript", icon: <BiLogoTypescript />, description: 'É uma linguagem de programação fortemente tipada, que se baseia em JavaScritp. TypeScript nos ajuda a evitar erros, ajuda no entendimento e na manutenção do código' },

    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: 'Node.js é um ambiente de execução multi-plataforma em JavaScript que permite aos desenvolvedores produzirem aplicações para rede e server-side usando o JavaScript.' },


    { id: "tailwind", name: "Tailwind", icon: <SiTailwindcss />, description: 'Tailwind CSS é um framework de CSS utilitário que permite criar interfaces web rapidamente por meio da aplicação de classes diretamente no HTML. Ele oferece uma abordagem baseada em utilitários, onde cada classe representa um estilo específico.  ' },

    { id: "styled", name: "Styled Components", icon: <SiStyledcomponents />, description: 'Styled Components é uma biblioteca para React e React Native que permite escrever estilos CSS diretamente dentro dos componentes JavaScript usando a sintaxe de template literals. Com Styled Components, os estilos são definidos de forma modular e encapsulada, o que ajuda a evitar conflitos de nomenclatura e torna o código mais legível e fácil de manter.' },

    { id: "sass", name: "Sass", icon: <DiSass />, description: 'Sass é uma linguagem que compila para CSS, oferecendo recursos adicionais como variáveis, aninhamento de seletores, mixins e herança. Esses recursos ajudam a tornar o código CSS mais modular, reutilizável e fácil de manter.' },

    { id: "css", name: "CSS3", icon: <DiCss3 />, description: 'É uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.' },

    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: 'É uma linguagem de marcação, usada para definir a estrutura do seu conteúdo. HTML consiste de uma série de elementos, que você usa para delimitar ou agrupar diferentes partes do conteúdo para que ele apareça ou atue de determinada maneira.' },

    { id: "pg", name: "postgreSQL", icon: <BiLogoPostgresql />, description: 'O PostgreSQL é um banco de dados relacional de software livre com suporte de 30 anos de desenvolvimento, sendo um dos bancos de dados relacionais mais estabelecidos disponíveis.' },

    { id: "prisma", name: "Prisma ORM", icon: <SiPrisma />, description: 'Prisma ORM é uma ferramenta de mapeamento objeto-relacional (ORM) para Node.js e TypeScript. Ele simplifica o acesso e a manipulação de bancos de dados relacionais, como PostgreSQL, MySQL e SQLite, permitindo que os desenvolvedores escrevam consultas de banco de dados usando uma sintaxe declarativa em vez de SQL puro. ' },

    { id: "express", name: "Express", icon: <SiExpress />, description: 'Express.js é um framework web minimalista e flexível para Node.js. Ele fornece uma infraestrutura robusta para construir aplicativos web e APIs de forma rápida e eficiente. Com Express, os desenvolvedores podem criar rotas para lidar com solicitações HTTP, gerenciar middlewares para processar solicitações e respostas.' },



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