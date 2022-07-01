import "./Projects.css";
import Project from "../../Components/Project/Project";
import { projects } from "../../portfolioInfo";
function Projects() {
    const loadProjects = (projects) => {
        return projects.map((project, index) => {
            const { name, desc, tech, github, link } = project;
            return <Project name={name} desc={desc} tech={tech} github={github} link={link} key={`project-${name}-${index}`}/>;
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