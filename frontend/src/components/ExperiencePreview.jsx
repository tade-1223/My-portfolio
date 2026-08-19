import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


function ExperiencePreview() {

    return (
        <section className="section experience-preview">

            <div className="container">

                <div className="experience-heading">

                    <div>

                        <p className="section-eyebrow">
                            EXPERIENCE & EDUCATION
                        </p>

                        <h2>
                            My professional journey.
                        </h2>

                    </div>

                    <Link
                        to="/about"
                        className="experience-more-link"
                    >
                        View Full Profile
                        <ArrowRight size={18} />
                    </Link>

                </div>


                <div className="timeline">

                    {/* Experience */}

                    <div className="timeline-item">

                        <div className="timeline-year">
                            2025
                        </div>

                        <div className="timeline-line">
                            <span className="timeline-dot" />
                        </div>

                        <div className="timeline-content">

                            <span className="timeline-type">
                                INTERNSHIP
                            </span>

                            <h3>
                                Networking Intern
                            </h3>

                            <h4>
                                University of Gondar Data Center
                            </h4>

                            <p>
                                Gained practical experience in computer
                                networking, infrastructure, troubleshooting,
                                and data center operations.
                            </p>

                        </div>

                    </div>


                    {/* Education */}

                    <div className="timeline-item">

                        <div className="timeline-year">
                            2026
                        </div>

                        <div className="timeline-line">
                            <span className="timeline-dot" />
                        </div>

                        <div className="timeline-content">

                            <span className="timeline-type">
                                EDUCATION
                            </span>

                            <h3>
                                BSc in Computer Science
                            </h3>

                            <h4>
                                University of Gondar
                            </h4>

                            <p>
                                Built a strong foundation in software
                                engineering, databases, algorithms,
                                networking, web development, and
                                computer systems.
                            </p>

                        </div>

                    </div>


                    {/* Final Year Project */}

                    <div className="timeline-item">

                        <div className="timeline-year">
                            2026
                        </div>

                        <div className="timeline-line">
                            <span className="timeline-dot" />
                        </div>

                        <div className="timeline-content">

                            <span className="timeline-type">
                                PROJECT
                            </span>

                            <h3>
                                AI-Based E-Learning System
                            </h3>

                            <h4>
                                University Final Year Project
                            </h4>

                            <p>
                                Developed an AI-based e-learning and
                                remote education platform combining
                                software development with intelligent
                                learning technologies.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}


export default ExperiencePreview;