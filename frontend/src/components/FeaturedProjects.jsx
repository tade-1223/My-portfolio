import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import { getProjects } from "../services/projectService";


function FeaturedProjects() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadProjects = async () => {

            try {

                const data = await getProjects();

                // Show only the first 3 projects
                setProjects(data.slice(0, 3));

            } catch (error) {

                console.error(
                    "Failed to load featured projects:",
                    error
                );

            } finally {

                setLoading(false);

            }

        };

        loadProjects();

    }, []);


    return (
        <section className="section featured-projects">

            <div className="container">

                <div className="featured-projects-heading">

                    <div>

                        <p className="section-eyebrow">
                            SELECTED WORK
                        </p>

                        <h2>
                            Featured Projects
                        </h2>

                    </div>


                    <Link
                        to="/projects"
                        className="projects-more-link"
                    >
                        View All Projects
                        <ArrowRight size={18} />
                    </Link>

                </div>


                {loading ? (

                    <p>
                        Loading projects...
                    </p>

                ) : projects.length === 0 ? (

                    <p>
                        No projects available yet.
                    </p>

                ) : (

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
    );
}


export default FeaturedProjects;