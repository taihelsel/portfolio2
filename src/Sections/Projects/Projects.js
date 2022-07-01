import "./Projects.css";
import { projects } from "../../portfolioInfo";
function Projects() {
    const loadProjects = (projects) => {
        return projects.map((project, index) => {
            const { name, desc, tech, github, link } = project;
            return (
                <div className="project-content" key={`project-${name}-${index}`}>
                    <div className="project-left">
                        <div className="project-preview">
                        </div>
                    </div>
                    <div className="project-right">
                        <div className="project-details">
                            <h2 className="project-title">{name}</h2>
                            <p className="project-text">
                                {desc}
                            </p>
                            <h2 className="project-title">Tech</h2>
                            <p className="project-text" >
                                {tech}
                            </p>
                            <hr />
                            <div className="project-links">
                                {github.length ? (
                                    <a href={github} target="_blank">GitHub</a>
                                ) : null}
                                {link.length ? (
                                    <a href={link} target="_blank">Live Site</a>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="project-divider"></div>
                </div>
            )
        });
    }
    return (
        <section id="Projects">
            <div className="section-content">
                <div className="section-title">
                    <h1>Projects</h1>
                    <hr />
                </div>
                {loadProjects(projects)}
            </div>
        </section>
    )
}
export default Projects;