import {
    ArrowRight,
    Brain,
    BriefcaseBusiness,
    Code2,
    Database,
    Download,
    ExternalLink,
    GitBranch,
    GraduationCap,
    Mail,
    MapPin,
    Network,
    Phone,
    Server,
    ShieldCheck,
    Smartphone,
    Wrench,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
    FaReact,
    FaPython,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaDocker,
    FaGitAlt,
} from "react-icons/fa6";

import { Link } from "react-router-dom";


function About({ profile }) {

    /* =====================================================
       TECHNICAL CATEGORIES
    ===================================================== */

    const skillCategories = [
        {
            name: "Frontend",
            icon: Code2,
            technologies: [
                { name: "React", icon: FaReact },
                { name: "JS", icon: FaJs },
                { name: "HTML", icon: FaHtml5 },
                { name: "CSS", icon: FaCss3Alt },
            ],
        },

        {
            name: "Backend",
            icon: Server,
            technologies: [
                { name: "Python", icon: FaPython },
                { name: "Django", text: "DJ" },
                { name: "Node", icon: FaNodeJs },
                { name: "API", text: "API" },
            ],
        },

        {
            name: "Database",
            icon: Database,
            technologies: [
                { name: "SQL", text: "SQL" },
                { name: "PostgreSQL", text: "PG" },
                { name: "MySQL", text: "MY" },
                { name: "SQLite", text: "SQ" },
            ],
        },

        {
            name: "Tools",
            icon: Wrench,
            technologies: [
                { name: "Git", icon: FaGitAlt },
                { name: "GitHub", icon: FaGithub },
                { name: "VS Code", text: "VS" },
                { name: "Postman", text: "PM" },
            ],
        },

        {
            name: "AI / ML",
            icon: Brain,
            technologies: [
                { name: "Python", icon: FaPython },
                { name: "AI", text: "AI" },
                { name: "ML", text: "ML" },
                { name: "DL", text: "DL" },
            ],
        },

        {
            name: "DevOps",
            icon: Network,
            technologies: [
                { name: "Docker", icon: FaDocker },
                { name: "Git", icon: FaGitAlt },
                { name: "Linux", text: "LIN" },
                { name: "CI/CD", text: "CI" },
            ],
        },

        {
            name: "Mobile",
            icon: Smartphone,
            technologies: [
                { name: "React Native", icon: FaReact },
                { name: "Flutter", text: "FL" },
                { name: "Android", text: "AD" },
                { name: "Mobile", text: "M" },
            ],
        },
    ];


    /* =====================================================
       EDUCATION
    ===================================================== */

    const education = [
        {
            year: "2018",
            level: "Grade 8",
            title: "Primary School Leaving Certificate",
            description:
                "Completed Grade 8 education and obtained the Primary School Leaving Certificate, establishing a strong foundation for secondary education.",
            icon: GraduationCap,
        },

        {
            year: "2023",
            level: "Grade 12",
            title: "Ethiopian Secondary School Leaving Certificate Examination",
            description:
                "Completed secondary education and took the Ethiopian Secondary School Leaving Certificate Examination, preparing for higher education in computer science.",
            icon: GraduationCap,
        },

        {
            year: "2026",
            level: "Bachelor's Degree",
            title: "BSc in Computer Science",
            institution: "University of Gondar",
            description:
                "Completed a Bachelor of Science degree in Computer Science with a foundation in software engineering, web development, databases, networking, algorithms, and computer systems.",
            icon: GraduationCap,
        },
    ];


    /* =====================================================
       EXPERIENCE
    ===================================================== */

    const experience = [
        {
            year: "2025",
            type: "INTERNSHIP",
            title: "Networking Intern",
            organization: "University of Gondar Data Center",
            description:
                "Gained practical experience in computer networking, network administration, infrastructure, troubleshooting, IT support, and data center operations.",
            icon: Network,
        },

        {
            year: "2026",
            type: "FINAL YEAR PROJECT",
            title: "AI-Based E-Learning and Remote Education System",
            organization: "University of Gondar",
            description:
                "Designed and developed an AI-based web platform for online learning and remote education. The system supports course management, assignment submission, virtual learning, and an AI assistant to support students and instructors.",
            icon: Brain,
        },

        {
            year: "2026 — PRESENT",
            type: "PERSONAL PROJECT",
            title: "Ethiora — Ethiopian Online Marketplace",
            organization: "In Progress",
            description:
                "Building a modern Ethiopian online marketplace that connects customers and local businesses through digital commerce. The platform focuses on local products, modern shopping experiences, product discovery, and scalable full-stack architecture.",
            icon: BriefcaseBusiness,
        },
    ];


    /* =====================================================
       SOCIAL LINKS
    ===================================================== */

    const socialLinks = [
        profile?.github && {
            label: "GitHub",
            href: profile.github,
            icon: FaGithub,
        },

        profile?.linkedin && {
            label: "LinkedIn",
            href: profile.linkedin,
            icon: FaLinkedin,
        },

        profile?.email && {
            label: "Email",
            href: `mailto:${profile.email}`,
            icon: Mail,
        },

        profile?.phone && {
            label: "Phone",
            href: `tel:${profile.phone}`,
            icon: Phone,
        },
    ].filter(Boolean);


    return (
        <main className="about-page">


            {/* =====================================================
                ABOUT INTRO
            ===================================================== */}

            <section className="section about-intro-section">

                <div className="container">

                    <div className="about-intro-grid">


                        {/* PROFILE PHOTO */}

                        <div className="about-photo-area">

                            <div className="about-photo-glow"></div>

                            <div className="about-photo-frame">

                                {profile?.profile_image ? (

                                    <img
                                        src={profile.profile_image}
                                        alt={
                                            profile.name ||
                                            "Tadesse Belay"
                                        }
                                        className="about-profile-image"
                                    />

                                ) : (

                                    <div className="about-photo-placeholder">
                                        TB
                                    </div>

                                )}

                            </div>


                            <div className="about-photo-decoration decoration-one"></div>

                            <div className="about-photo-decoration decoration-two"></div>

                            <div className="about-photo-status">

                                <span></span>

                                Available for opportunities

                            </div>

                        </div>


                        {/* INTRODUCTION */}

                        <div className="about-intro-content">

                            <p className="about-eyebrow">
                                ABOUT ME
                            </p>

                            <h1>
                                {profile?.name ||
                                    "Tadesse Belay"}
                            </h1>

                            <h2>
                                {profile?.professional_title ||
                                    "Software Developer"}
                            </h2>


                            <div className="about-location">

                                <MapPin size={15} />

                                <span>
                                    {profile?.location ||
                                        "Addis Ababa"}
                                </span>

                            </div>


                            <p className="about-intro-text">
                                Computer Science graduate focused on
                                building practical, modern and
                                user-focused software solutions.
                            </p>


                            <div className="about-intro-actions">

                                {profile?.resume && (

                                    <a
                                        href={profile.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="about-download"
                                    >

                                        <Download size={16} />

                                        Download CV

                                    </a>

                                )}


                                <Link
                                    to="/projects"
                                    className="about-project-link"
                                >
                                    Explore Projects
                                    <ArrowRight size={16} />
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* =====================================================
                PROFESSIONAL PROFILE
            ===================================================== */}

            <section className="section about-profile-section">

                <div className="container">

                    <div className="about-profile-grid">


                        <div className="about-profile-label">

                            <p className="about-eyebrow">
                                PROFESSIONAL PROFILE
                            </p>

                            <h2>
                                Turning ideas into practical software.
                            </h2>

                        </div>


                        <div className="about-profile-content">

                            <p>
                                {profile?.bio ||
                                    "Computer Science graduate with a strong foundation in software development, web technologies, computer networking, and databases. I build modern full-stack applications using React, Django, Python, and PostgreSQL, with a growing interest in artificial intelligence, machine learning, and cybersecurity."}
                            </p>

                        </div>

                    </div>

                </div>

            </section>



            {/* =====================================================
                TECHNICAL SKILLS
            ===================================================== */}

            <section className="section about-skills-section">

                <div className="container">

                    <div className="about-section-heading">

                        <div>

                            <p className="about-eyebrow">
                                TECHNICAL SKILLS
                            </p>

                            <h2>
                                Technologies I use.
                            </h2>

                        </div>

                        <p>
                            Explore my technical skills by category.
                        </p>

                    </div>


                    <div className="about-skill-orbit-grid">

                        {skillCategories.map(
                            (category, categoryIndex) => {

                                const CategoryIcon =
                                    category.icon;

                                return (

                                    <article
                                        key={category.name}
                                        className="about-skill-orbit"
                                    >

                                        <div className="skill-orbit-ring"></div>

                                        <div className="skill-orbit-ring ring-two"></div>


                                        <div className="skill-orbit-center">

                                            <CategoryIcon size={22} />

                                            <strong>
                                                {category.name}
                                            </strong>

                                        </div>


                                        {category.technologies.map(
                                            (technology, index) => {

                                                const TechIcon =
                                                    technology.icon;

                                                return (

                                                    <div
                                                        key={technology.name}
                                                        className={`skill-floating-logo logo-${index + 1}`}
                                                    >

                                                        {TechIcon ? (

                                                            <TechIcon
                                                                size={17}
                                                            />

                                                        ) : (

                                                            <span>
                                                                {
                                                                    technology.text
                                                                }
                                                            </span>

                                                        )}

                                                        <small>
                                                            {
                                                                technology.name
                                                            }
                                                        </small>

                                                    </div>

                                                );

                                            }
                                        )}

                                    </article>

                                );

                            }
                        )}

                    </div>

                </div>

            </section>



            {/* =====================================================
                EDUCATION
            ===================================================== */}

            <section className="section about-education-section">

                <div className="container">

                    <div className="about-section-heading">

                        <div>

                            <p className="about-eyebrow">
                                EDUCATION
                            </p>

                            <h2>
                                Academic background.
                            </h2>

                        </div>

                    </div>


                    <div className="about-timeline">

                        {education.map((item) => {

                            const Icon = item.icon;

                            return (

                                <article
                                    key={item.year}
                                    className="about-timeline-item"
                                >

                                    <div className="timeline-year">
                                        {item.year}
                                    </div>


                                    <div className="timeline-line">

                                        <span className="timeline-dot">

                                            <Icon size={15} />

                                        </span>

                                    </div>


                                    <div className="timeline-content">

                                        <span className="timeline-type">
                                            {item.level}
                                        </span>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        {item.institution && (

                                            <h4>
                                                {item.institution}
                                            </h4>

                                        )}

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>

                                </article>

                            );

                        })}

                    </div>

                </div>

            </section>



            {/* =====================================================
                EXPERIENCE
            ===================================================== */}

            <section className="section about-experience-section">

                <div className="container">

                    <div className="about-section-heading">

                        <div>

                            <p className="about-eyebrow">
                                EXPERIENCE
                            </p>

                            <h2>
                                Practical experience.
                            </h2>

                        </div>

                    </div>


                    <div className="about-timeline experience-timeline">

                        {experience.map((item) => {

                            const Icon = item.icon;

                            return (

                                <article
                                    key={item.title}
                                    className="about-timeline-item"
                                >

                                    <div className="timeline-year">
                                        {item.year}
                                    </div>


                                    <div className="timeline-line">

                                        <span className="timeline-dot">

                                            <Icon size={15} />

                                        </span>

                                    </div>


                                    <div className="timeline-content">

                                        <span className="timeline-type">
                                            {item.type}
                                        </span>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <h4>
                                            {item.organization}
                                        </h4>

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>

                                </article>

                            );

                        })}

                    </div>

                </div>

            </section>



            {/* =====================================================
    CONNECT
===================================================== */}

<section className="section about-connect-section">

    <div className="container">

        <div className="about-connect">

            {/* LEFT SIDE */}
            <div className="about-connect-intro">

                <p className="about-eyebrow">
                    CONNECT
                </p>

                <h2>
                    Let's build something together.
                </h2>

                <p>
                    I'm interested in connecting with developers,
                    companies, recruiters, and people working on
                    interesting technology projects.
                </p>

            </div>


            {/* RIGHT SIDE — SOCIAL LINKS */}
            <div className="about-connect-links">

                {/* GitHub */}
                {profile?.github && (
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-social-card"
                    >

                        <span className="about-social-icon">
                            <FaGithub size={21} />
                        </span>

                        <span className="about-social-info">
                            <strong>GitHub</strong>
                            <small>View my projects</small>
                        </span>

                        <ExternalLink
                            size={15}
                            className="about-social-arrow"
                        />

                    </a>
                )}


                {/* LinkedIn */}
                {profile?.linkedin && (
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-social-card"
                    >

                        <span className="about-social-icon">
                            <FaLinkedin size={21} />
                        </span>

                        <span className="about-social-info">
                            <strong>LinkedIn</strong>
                            <small>Connect with me</small>
                        </span>

                        <ExternalLink
                            size={15}
                            className="about-social-arrow"
                        />

                    </a>
                )}


                {/* Email */}
                {profile?.email && (
                    <a
                        href={`mailto:${profile.email}`}
                        className="about-social-card"
                    >

                        <span className="about-social-icon">
                            <Mail size={21} />
                        </span>

                        <span className="about-social-info">
                            <strong>Email</strong>
                            <small>{profile.email}</small>
                        </span>

                        <ArrowUpRight
                            size={15}
                            className="about-social-arrow"
                        />

                    </a>
                )}


                {/* Phone */}
                {profile?.phone && (
                    <a
                        href={`tel:${profile.phone}`}
                        className="about-social-card"
                    >

                        <span className="about-social-icon">
                            <Phone size={21} />
                        </span>

                        <span className="about-social-info">
                            <strong>Phone</strong>
                            <small>{profile.phone}</small>
                        </span>

                        <ArrowUpRight
                            size={15}
                            className="about-social-arrow"
                        />

                    </a>
                )}

            </div>

        </div>

    </div>

</section>

        </main>
    );
}


export default About;