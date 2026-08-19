import {
    ArrowUpRight,
    ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";


function ProjectCard({ project }) {

    const imageUrl = project.image
        ? project.image.startsWith("http")
            ? project.image
            : `http://127.0.0.1:8000${project.image}`
        : null;


    return (
        <article className="project-card">

            {/* =========================
                PROJECT IMAGE
            ========================== */}

            <div className="project-image">

                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={project.title}
                    />
                ) : (
                    <div className="project-placeholder">
                        {project.title?.charAt(0)}
                    </div>
                )}

                <div className="project-image-overlay">

                    <span>
                        View Project
                    </span>

                    <ArrowUpRight size={20} />

                </div>

            </div>


            {/* =========================
                PROJECT CONTENT
            ========================== */}

            <div className="project-content">

                <div className="project-number">
                    PROJECT
                </div>


                <h3>
                    {project.title}
                </h3>


                <p>
                    {project.description}
                </p>


                {/* Technologies */}

                {project.technologies &&
                    project.technologies.length > 0 && (

                    <div className="project-technologies">

                        {project.technologies.map(
                            (technology, index) => (

                            <span
                                key={
                                    technology.id ||
                                    index
                                }
                            >
                                {typeof technology === "string"
                                    ? technology
                                    : technology.name}
                            </span>

                        ))}

                    </div>
                )}


                {/* =========================
                    LINKS
                ========================== */}

                <div className="project-links">

                    <Link
                        to={`/projects/${project.id}`}
                        className="project-details-link"
                    >

                        View Details

                        <ArrowUpRight size={17} />

                    </Link>


                    <div className="project-external-links">

                        {project.github_url && (

                            <a
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >

                                <FaGithub size={18} />

                            </a>

                        )}


                        {project.live_url && (

                            <a
                                href={project.live_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Live Demo"
                            >

                                <ExternalLink size={18} />

                            </a>

                        )}

                    </div>

                </div>

            </div>


            {/* Decorative glow */}

            <div className="project-card-glow"></div>

        </article>
    );
}


export default ProjectCard;