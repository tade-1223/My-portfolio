import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";


function ContactCTA({ profile }) {

    return (
        <section className="section contact-cta">

            <div className="container">

                <div className="contact-cta-box">

                    <div className="contact-cta-content">

                        <p className="section-eyebrow">
                            GET IN TOUCH
                        </p>

                        <h2>
                            Let's build something
                            meaningful together.
                        </h2>

                        <p>
                            I'm open to software engineering,
                            full-stack development, and other
                            opportunities where I can contribute
                            and continue growing.
                        </p>

                    </div>


                    <div className="contact-cta-actions">

                        <Link
                            to="/contact"
                            className="btn btn-primary"
                        >
                            Contact Me
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