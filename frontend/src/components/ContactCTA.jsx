import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";


function ContactCTA({ profile }) {

    return (
        <section className="section contact-cta">

            <div className="container">

                <div className="contact-cta-box">

                    <div className="contact-cta-content">

                        <p className="section-eyebrow">
                            LET'S CONNECT
                        </p>

                        <h2>
                            Have an idea, opportunity,
                            or project in mind?
                        </h2>

                        <p>
                            I'm open to software development
                            opportunities, collaborations,
                            and interesting technology projects.
                            If you're looking for someone who
                            enjoys learning, building, and solving
                            real-world problems, I'd be happy to
                            connect.
                        </p>

                        <p className="contact-cta-location">
                            Based in Addis Ababa, Ethiopia
                            <span>•</span>
                            Open to opportunities
                        </p>

                    </div>


                    <div className="contact-cta-actions">

                        <Link
                            to="/contact"
                            className="btn btn-primary"
                        >
                            Get In Touch
                            <ArrowRight size={18} />
                        </Link>


                        {profile?.email && (
                            <a
                                href={`mailto:${profile.email}`}
                                className="email-link"
                            >
                                <Mail size={18} />
                                {profile.email}
                            </a>
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
}


export default ContactCTA;
