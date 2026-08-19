import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


function AboutPreview({ profile }) {

    return (
        <section className="section about-preview">

            <div className="container">

                <div className="about-preview-grid">

                    <div className="about-preview-heading">

                        <p className="section-eyebrow">
                            ABOUT ME
                        </p>

                        <h2>
                            Building useful software
                            with modern technology.
                        </h2>

                    </div>


                    <div className="about-preview-content">

                        <p>
                            {profile?.bio ||
                                "I am a Computer Science graduate passionate about software engineering, web development, and building practical digital solutions."}
                        </p>

                        <p>
                            I enjoy working across the frontend and
                            backend to create applications that are
                            reliable, responsive, and easy to use.
                        </p>


                        <Link
                            to="/about"
                            className="about-more-link"
                        >
                            More About Me
                            <ArrowRight size={18} />
                        </Link>

                    </div>

                </div>


                <div className="focus-grid">

                    <div className="focus-card">

                        <span className="focus-number">
                            01
                        </span>

                        <h3>
                            Web Development
                        </h3>

                        <p>
                            Modern responsive interfaces and
                            full-stack web applications.
                        </p>

                    </div>


                    <div className="focus-card">

                        <span className="focus-number">
                            02
                        </span>

                        <h3>
                            Backend Development
                        </h3>

                        <p>
                            APIs, databases, authentication,
                            and scalable backend systems.
                        </p>

                    </div>


                    <div className="focus-card">

                        <span className="focus-number">
                            03
                        </span>

                        <h3>
                            AI & Emerging Technology
                        </h3>

                        <p>
                            Exploring AI, machine learning,
                            and intelligent software solutions.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}


export default AboutPreview;