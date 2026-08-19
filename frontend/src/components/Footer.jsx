import {
    ArrowUpRight,
    GitBranch,
} from "lucide-react";

import { Link } from "react-router-dom";


function Footer({ profile }) {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-top">

                    <div className="footer-brand">

                        <Link
                            to="/"
                            className="footer-logo"
                        >
                            TB.
                        </Link>

                        <p>
                            Software Engineer building modern
                            and practical digital solutions.
                        </p>

                    </div>


                    <div className="footer-links">

                        <div>

                            <h4>
                                Navigation
                            </h4>

                            <Link to="/">
                                Home
                            </Link>

                            <Link to="/about">
                                About
                            </Link>

                            <Link to="/projects">
                                Projects
                            </Link>

                            <Link to="/blog">
                                Blog
                            </Link>

                            <Link to="/contact">
                                Contact
                            </Link>

                        </div>


                        <div>

                            <h4>
                                Connect
                            </h4>

                            {profile?.github_url && (
                                <a
                                    href={profile.github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Github size={16} />
                                    GitHub
                                </a>
                            )}

                            {profile?.linkedin_url && (
                                <a
                                    href={profile.linkedin_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Linkedin size={16} />
                                    LinkedIn
                                </a>
                            )}

                            {profile?.email && (
                                <a
                                    href={`mailto:${profile.email}`}
                                >
                                    <Mail size={16} />
                                    Email
                                </a>
                            )}

                        </div>

                    </div>

                </div>


                <div className="footer-bottom">

                    <p>
                        © {currentYear} Tadesse Belay.
                        All rights reserved.
                    </p>

                    <p>
                        Built with React & Django.
                    </p>

                </div>

            </div>

        </footer>
    );
}


export default Footer;