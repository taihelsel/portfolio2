import "./Projects.css";
import Project from "../../Components/Project/Project";
import { additionalProjects, resumeProjects } from "../../portfolioInfo";
const projects = [...resumeProjects, ...additionalProjects];
function Projects() {
    const loadProjects = (projects) => {
        return projects.map((project, index) => {
            const { name, desc, tech, github, link, img } = project;
            return <Project name={name} desc={desc} tech={tech} github={github} link={link} img={img} key={`project-${name}-${index}`} />;
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