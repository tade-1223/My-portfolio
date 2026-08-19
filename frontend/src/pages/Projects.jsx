import { useEffect, useState } from "react";

import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

import { getProjects } from "../services/projectService";


function Projects() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {

        const loadProjects = async () => {

            try {

                const data = await getProjects();

                setProjects(data);

            } catch (error) {

                console.error(
                    "Failed to load projects:",
                    error
                );

                setError(
                    "Unable to load projects."
                );

            } finally {

                setLoading(false);

            }
        };


        loadProjects();

    }, []);


    return (
        <main>

            <section className="section">

                <div className="container">

                    <SectionTitle
                        eyebrow="Portfolio"
                        title="My Projects"
                    />


                    {loading && (
                        <p>
                            Loading projects...
                        </p>
                    )}


                    {error && (
                        <p>
                            {error}
                        </p>
                    )}


                    {!loading &&
                        !error &&
                        projects.length === 0 && (

                        <p>
                            No projects available yet.
                        </p>
                    )}


                    {!loading &&
                        !error &&
                        projects.length > 0 && (

                        <div className="projects-grid">

                            {projects.map((project) => (

                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />

                            ))}

                        </div>
                    )}

                </div>

            </section>

        </main>
    );
}


export default Projects;