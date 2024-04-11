/* eslint-disable react/prop-types */
import '../styles/components/projects.sass'

const ProjectCard = ({title, description, possibilities, technologies, link, preview} ) => {
  return (

    <article className="project">
      <h3>{title}</h3>
      <div className="project-info">
        <p>{description}</p>
        <p>Esse projeto lhe permite:</p>
        <ul>
          {
            possibilities.map((possibility, index) => (
              <li key={index}>{possibility}</li>
            ))
          }
        </ul>
        <p><strong>Tecnologias usadas: {technologies.join(', ')}</strong></p>
        <p className='git-page'>🔗 Clique na imagem para ver o projeto</p>

        <a href={link} target="_blank" rel="noreferrer">
          <img src={preview} alt="Preview do projeto" /></a>
      </div>
    </article>
  )
}

export { ProjectCard }