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
            : `https://my-portfolio-backend-046t.onrender.com${project.image}`
        : null;


    return (
        <article className="project-card">

            {/* =========================
                PROJECT IMAGE
            ========================== */}

            <Link
                to={`/projects/${project.id}`}
                className="project-image-link"
                aria-label={`View ${project.title} project`}
            >

                <div className="project-image">

                    {imageUrl ? (

                        <img
                            src={imageUrl}
                            alt={`${project.title} project preview`}
                            loading="lazy"
                        />

                    ) : (

                        <div className="project-placeholder">
                            {project.title?.charAt(0)}
                        </div>

                    )}


                    {/* FUNCTIONAL OVERLAY */}

                    <div className="project-image-overlay">

                        <span>
                            View Project
                        </span>

                        <ArrowUpRight size={20} />

                    </div>

                </div>

            </Link>


            {/* =========================
                PROJECT CONTENT
            ========================== */}

            <div className="project-content">

                <div className="project-number">
                    SELECTED PROJECT
                </div>


                <h3>
                    {project.title}
                </h3>


                {/* PROJECT DESCRIPTION */}

                <p className="project-description">

                    {project.description ||
                        "A practical software project focused on solving real-world problems through modern technology, thoughtful system design, and a user-centered experience."}

                </p>


                {/* TECHNOLOGIES */}

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

                            )
                        )}

                    </div>
                )}


                {/* =========================
                    PROJECT LINKS
                ========================== */}

                <div className="project-links">


                    {/* INTERNAL PROJECT DETAILS */}

                    <Link
                        to={`/projects/${project.id}`}
                        className="project-details-link"
                    >

                        <span>
                            View Details
                        </span>

                        <ArrowUpRight size={17} />

                    </Link>


                    {/* EXTERNAL LINKS */}

                    <div className="project-external-links">


                        {project.github_url && (

                            <a
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} GitHub repository`}
                                title="GitHub Repository"
                            >

                                <FaGithub size={18} />

                            </a>

                        )}


                        {project.live_url && (

                            <a
                                href={project.live_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.title} live demo`}
                                title="Live Demo"
                            >

                                <ExternalLink size={18} />

                            </a>

                        )}

                    </div>

                </div>

            </div>


            {/* =========================
                DECORATIVE GLOW
            ========================== */}

            <div
                className="project-card-glow"
                aria-hidden="true"
            />

        </article>
    );
}


export default ProjectCard;