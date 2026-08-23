
import { ArrowRight, Code2, Brain, Globe } from "lucide-react";
import { Link } from "react-router-dom";


function AboutPreview({ profile }) {

    return (
        <section className="section about-preview">

            <div className="container">

                {/* =========================
                    INTRODUCTION
                ========================== */}

                <div className="about-preview-grid">

                    <div className="about-preview-heading">

                        <p className="section-eyebrow">
                            ABOUT ME
                        </p>

                        <h2>
                            From learning the basics
                            to building real-world
                            software.
                        </h2>

                    </div>


                    <div className="about-preview-content">

                        <p>
                            {profile?.bio ||
                                "I am a Computer Science graduate and software developer focused on building practical, modern, and user-centered digital solutions."
                            }
                        </p>

                        <p>
                            My journey started in a rural community and
                            continued through school and university, where
                            I developed a strong interest in technology,
                            programming, and problem solving. Today, I am
                            focused on turning what I have learned into
                            software that can solve real problems.
                        </p>

                        <p>
                            I enjoy working across the full development
                            process — from designing responsive interfaces
                            with React to building APIs, databases, and
                            backend systems with Python, Django, and
                            PostgreSQL.
                        </p>


                        <Link
                            to="/about"
                            className="about-more-link"
                        >
                            Discover My Journey
                            <ArrowRight size={18} />
                        </Link>

                    </div>

                </div>


                {/* =========================
                    AREAS OF FOCUS
                ========================== */}

                <div className="focus-grid">

                    {/* WEB DEVELOPMENT */}

                    <div className="focus-card">

                        <span className="focus-number">
                            01
                        </span>

                        <div className="focus-icon">
                            <Globe size={22} />
                        </div>

                        <h3>
                            Full-Stack Development
                        </h3>

                        <p>
                            Building responsive and accessible web
                            applications with React, JavaScript,
                            Python, Django, REST APIs, and PostgreSQL.
                        </p>

                    </div>


                    {/* SOFTWARE ENGINEERING */}

                    <div className="focus-card">

                        <span className="focus-number">
                            02
                        </span>

                        <div className="focus-icon">
                            <Code2 size={22} />
                        </div>

                        <h3>
                            Practical Software Engineering
                        </h3>

                        <p>
                            Turning ideas into maintainable software
                            through clean architecture, reusable
                            components, databases, APIs, testing,
                            and problem-solving.
                        </p>

                    </div>


                    {/* AI */}

                    <div className="focus-card">

                        <span className="focus-number">
                            03
                        </span>

                        <div className="focus-icon">
                            <Brain size={22} />
                        </div>

                        <h3>
                            AI & Emerging Technology
                        </h3>

                        <p>
                            Exploring artificial intelligence,
                            machine learning, and intelligent
                            applications while continuously
                            expanding my technical skills.
                        </p>

                    </div>

                </div>


                {/* =========================
                    SHORT CLOSING STATEMENT
                ========================== */}

                <div className="about-preview-footer">

                    <p>
                        Currently learning, building, and looking for
                        opportunities to contribute to meaningful
                        technology projects.
                    </p>

                    <Link
                        to="/projects"
                        className="about-preview-project-link"
                    >
                        Explore My Projects
                        <ArrowRight size={17} />
                    </Link>

                </div>

            </div>

        </section>
    );
}


export default AboutPreview;

