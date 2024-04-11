
import { ProjectCard } from './ProjectCard';
import { dataProjects } from '../utils/dataProjects';

const ProjectContainer = () => {

    return (
        <section>

            <h2>Projetos</h2>
            <div className="container-projects container">
                {dataProjects.map((project) => (

                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        possibilities={project.possibilities}
                        technologies={project.technologies}
                        link={project.link}
                        preview={project.preview}
                    />
                ))}



            </div>
        </section>
    );
};

export default ProjectContainer;