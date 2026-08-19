import { useState } from "react";
import {
    Mail,
    MapPin,
    Send,
} from "lucide-react";

import { sendContactMessage } from "../services/contactService";


function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


    const handleChange = (event) => {

        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

    };


    const handleSubmit = async (event) => {

        event.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");


        try {

            await sendContactMessage(form);

            setSuccess(
                "Your message has been sent successfully."
            );

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (error) {

            console.error(
                "Contact form error:",
                error
            );

            if (error.response?.data) {

                const data = error.response.data;

                const messages = Object.values(data)
                    .flat()
                    .join(" ");

                setError(
                    messages ||
                    "Unable to send your message."
                );

            } else {

                setError(
                    "Unable to connect to the server."
                );

            }

        } finally {

            setLoading(false);

        }

    };


    return (
        <main>

            {/* HERO */}

            <section className="section contact-hero">

                <div className="container">

                    <p className="section-eyebrow">
                        CONTACT
                    </p>

                    <h1>
                        Let's build something
                        meaningful.
                    </h1>

                    <p className="contact-intro">
                        Have a project idea, opportunity,
                        or simply want to connect?
                        Send me a message.
                    </p>

                </div>

            </section>


            {/* CONTACT CONTENT */}

            <section className="section">

                <div className="container contact-grid">

                    {/* INFORMATION */}

                    <div className="contact-info">

                        <p className="section-eyebrow">
                            GET IN TOUCH
                        </p>

                        <h2>
                            Have an idea?
                        </h2>

                        <p>
                            I'm open to software development
                            opportunities, collaboration,
                            interesting projects, and
                            professional conversations.
                        </p>


                        <div className="contact-details">

                            <div className="contact-detail">

                                <Mail size={20} />

                                <div>

                                    <span>
                                        Email
                                    </span>

                                    <a href="mailto:tadessebelay477@gmail.com">
                                        tadessebelay477@gmail.com
                                    </a>

                                </div>

                            </div>


                            <div className="contact-detail">

                                <MapPin size={20} />

                                <div>

                                    <span>
                                        Location
                                    </span>

                                    <p>
                                        Addis Ababa, Ethiopia
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* FORM */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="form-row">

                            <div className="form-group">

                                <label htmlFor="name">
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />

                            </div>


                            <div className="form-group">

                                <label htmlFor="email">
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />

                            </div>

                        </div>


                        <div className="form-group">

                            <label htmlFor="subject">
                                Subject
                            </label>

                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="What would you like to discuss?"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                rows="7"
                                required
                            />

                        </div>


                        {success && (

                            <div className="form-success">
                                {success}
                            </div>

                        )}


                        {error && (

                            <div className="form-error">
                                {error}
                            </div>

                        )}


                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >

                            <Send size={18} />

                            {loading
                                ? "Sending..."
                                : "Send Message"
                            }

                        </button>

                    </form>

                </div>

            </section>

        </main>
    );
}


export default Contact;