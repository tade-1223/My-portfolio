import { useEffect, useState } from "react";
import SkillIcon from "../components/SkillIcon";
import {
    ArrowLeft,
    ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
    Link,
    useParams,
} from "react-router-dom";

import { getProject } from "../services/projectService";


function ProjectDetails() {

    const { id } = useParams();

    const [project, setProject] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchProject = async () => {

            try {

                const data = await getProject(id);

                setProject(data);

            } catch (err) {

                console.error(
                    "Project details error:",
                    err
                );

                setError(
                    "Unable to load this project."
                );

            } finally {

                setLoading(false);

            }

        };


        fetchProject();

    }, [id]);


    /* =====================================================
       LOADING
    ===================================================== */

    if (loading) {

        return (
            <main className="section">

                <div className="container project-details-state">

                    <div className="loading-orb"></div>

                    <p>
                        Loading project...
                    </p>

                </div>

            </main>
        );

    }


    /* =====================================================
       ERROR
    ===================================================== */

    if (error || !project) {

        return (
            <main className="section">

                <div className="container project-details-state">

                    <div className="project-error-icon">
                        !
                    </div>

                    <h1>
                        Project Not Found
                    </h1>

                    <p>
                        {error ||
                            "This project could not be loaded."}
                    </p>

                    <Link
                        to="/projects"
                        className="back-link"
                    >
                        <ArrowLeft size={18} />
                        Back to Projects
                    </Link>

                </div>

            </main>
        );

    }


    /* =====================================================
       IMAGE URL
    ===================================================== */

    const imageUrl = project.image
    ? project.image.startsWith("http")
        ? project.image
        : `https://my-portfolio-backend-046t.onrender.com${project.image}`
    : null;


    return (

        <main className="section project-details-page">

            <div className="container project-details">


                {/* =================================================
                    BACK
                ================================================= */}

                <Link
                    to="/projects"
                    className="back-link"
                >

                    <ArrowLeft size={18} />

                    Back to Projects

                </Link>


                {/* =================================================
                    HERO IMAGE
                ================================================= */}

                {imageUrl && (

                    <div className="project-details-image">

                        <img
                            src={imageUrl}
                            alt={project.title}
                        />

                        <div className="project-image-shine"></div>

                    </div>

                )}


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="project-details-content">


                    <div className="project-details-header">

                        <p className="project-details-label">
                            FEATURED PROJECT
                        </p>

                        <h1>
                            {project.title}
                        </h1>

                        <p className="project-details-description">
                            {project.description}
                        </p>

                    </div>


                    {/* =================================================
    TECHNOLOGIES
================================================= */}

{project.technologies &&
    project.technologies.length > 0 && (

    <div className="project-details-technologies">

        <p className="project-details-label">
            TECHNOLOGIES
        </p>

        <div className="project-details-tech-list">

            {project.technologies.map((technology) => (

                <div
                    key={technology.id}
                    className="project-tech-badge"
                    title={`${technology.name} • ${technology.category}`}
                >

                    {technology.icon && (
                        <span className="project-tech-icon">
                            {/* Your SkillIcon can render the technology icon */}
                            <SkillIcon
                                name={technology.icon}
                                size={18}
                            />
                        </span>
                    )}

                    <span className="project-tech-name">
                        {technology.name}
                    </span>

                </div>

            ))}

        </div>

    </div>

)}

                    {/* =================================================
                        ACTIONS
                    ================================================= */}

                    <div className="project-detail-buttons">


                        {project.github_url && (

                            <a
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-action github-action"
                            >

                                <FaGithub size={19} />

                                <span>
                                    View on GitHub
                                </span>

                            </a>

                        )}


                        {project.live_url && (

                            <a
                                href={project.live_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-action live-action"
                            >

                                <ExternalLink size={18} />

                                <span>
                                    Live Demo
                                </span>

                            </a>

                        )}

                    </div>


                </div>

            </div>


            {/* =====================================================
                BACKGROUND PARTICLES
            ===================================================== */}

            <div className="project-details-particles">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>

        </main>

    );

}


export default ProjectDetails;