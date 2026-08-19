import {
    Code2,
    Database,
    Brain,
    Server,
    Globe,
    Terminal,
    Mail,
    Phone,
    Download,
    ArrowRight,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import { Link } from "react-router-dom";


function Hero({ profile }) {

    const skills = [
        {
            name: "React",
            icon: Code2,
            position: "skill-react",
        },
        {
            name: "Python",
            icon: Terminal,
            position: "skill-python",
        },
        {
            name: "Django",
            icon: Server,
            position: "skill-django",
        },
        {
            name: "PostgreSQL",
            icon: Database,
            position: "skill-postgresql",
        },
        {
            name: "AI / ML",
            icon: Brain,
            position: "skill-ai",
        },
        {
            name: "Web",
            icon: Globe,
            position: "skill-web",
        },
    ];


    return (
        <section className="hero">

            {/* Animated background particles */}
            <div className="hero-particles">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>


            <div className="container hero-container">


                {/* =========================
                    LEFT CONTENT
                ========================== */}

                <div className="hero-content">

                    <p className="hero-intro">
                        Hello, I'm
                    </p>


                    <h1 className="hero-name">

                        {profile?.name || "TADESSE BELAY"}

                    </h1>


                    <h2 className="hero-title">

                        {profile?.professional_title ||
                            "Software Developer"}

                    </h2>


                    <p className="hero-description">

                        {profile?.bio ||
                            "I build modern full-stack applications using React, Django, Python and PostgreSQL."}

                    </p>


                    {/* Buttons */}

                    <div className="hero-buttons">

                        <Link
                            to="/projects"
                            className="hero-button primary"
                        >
                            View My Projects

                            <ArrowRight size={18} />

                        </Link>


                        {profile?.resume && (

                            <a
                                href={profile.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-button secondary"
                            >

                                <Download size={18} />

                                Download CV

                            </a>

                        )}

                    </div>


                    {/* Social links */}

                    <div className="hero-socials">

                        {profile?.github && (

                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                            <FaGithub size={20} />                            
                            </a>

                        )}


                        {profile?.linkedin && (

                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>

                        )}


                        {profile?.email && (

                            <a
                                href={`mailto:${profile.email}`}
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>

                        )}


                        {profile?.phone && (

                            <a
                                href={`tel:${profile.phone}`}
                                aria-label="Phone"
                            >
                                <Phone size={20} />
                            </a>

                        )}

                    </div>

                </div>



                {/* =========================
                    ORBITAL PROFILE SYSTEM
                ========================== */}

                <div className="hero-visual">

                    <div className="orbit-system">


                        {/* Orbit rings */}

                        <div className="orbit orbit-outer"></div>

                        <div className="orbit orbit-middle"></div>

                        <div className="orbit orbit-inner"></div>



                        {/* Orbiting skills */}

                        {skills.map((skill) => {

                            const Icon = skill.icon;

                            return (

                                <div
                                    key={skill.name}
                                    className={`orbit-skill ${skill.position}`}
                                >

                                    <Icon size={20} />

                                    <span>
                                        {skill.name}
                                    </span>

                                </div>

                            );

                        })}



                        {/* Center glowing circle */}

                        <div className="profile-orb">

                            <div className="profile-glow"></div>


                            {profile?.profile_image ? (

                                <img
                                    src={profile.profile_image}
                                    alt={
                                        profile.name ||
                                        "Tadesse Belay"
                                    }
                                    className="profile-orb-image"
                                />

                            ) : (

                                <div className="profile-placeholder">

                                    TB

                                </div>

                            )}

                        </div>



                        {/* Floating particles */}

                        <span className="floating-particle particle-1"></span>

                        <span className="floating-particle particle-2"></span>

                        <span className="floating-particle particle-3"></span>

                        <span className="floating-particle particle-4"></span>

                        <span className="floating-particle particle-5"></span>

                        <span className="floating-particle particle-6"></span>


                    </div>

                </div>

            </div>

        </section>
    );
}


export default Hero;