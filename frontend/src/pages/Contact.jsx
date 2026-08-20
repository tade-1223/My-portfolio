import { useEffect, useState } from "react";

import {
    Mail,
    MapPin,
    Send,
    Phone,
    ExternalLink,
    ArrowUpRight,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
    FaTelegram,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";;

import { getProfile } from "../services/profileService";
import { sendContactMessage } from "../services/contactService";


function Contact() {

    const [profile, setProfile] = useState(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [profileLoading, setProfileLoading] = useState(true);

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


    /* =====================================================
       LOAD PROFILE
    ===================================================== */

    useEffect(() => {

        const loadProfile = async () => {

            try {

                const data = await getProfile();

                console.log("Contact profile:", data);

                /*
                    Your API returns an array:

                    [
                        {
                            ...
                        }
                    ]

                    Therefore we use the first profile.
                */

                setProfile(
                    Array.isArray(data)
                        ? data[0]
                        : data
                );

            } catch (error) {

                console.error(
                    "Failed to load profile:",
                    error
                );

            } finally {

                setProfileLoading(false);

            }

        };


        loadProfile();

    }, []);


    /* =====================================================
       FORM CHANGE
    ===================================================== */

    const handleChange = (event) => {

        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

    };


    /* =====================================================
       FORM SUBMIT
    ===================================================== */

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


    /* =====================================================
       SOCIAL LINKS
    ===================================================== */
const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/tade-1223",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/tadesse23",
        icon: FaLinkedin,
    },
    {
        label: "X",
        href: "https://x.com/bel1223_1223",
        icon: FaXTwitter,
    },
    {
        label: "Telegram",
        href: "https://t.me/tbm2323",
        icon: FaTelegram,
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/251960723202",
        icon: FaWhatsapp,
    },
];



    return (

        <main>

            {/* =====================================================
                CONTACT HERO
            ===================================================== */}

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


            {/* =====================================================
                CONTACT CONTENT
            ===================================================== */}

            <section className="section">

                <div className="container contact-grid">


                    {/* =================================================
                        LEFT SIDE
                    ================================================= */}

                    <div className="contact-info">

                        <p className="section-eyebrow">
                            GET IN TOUCH
                        </p>


                        <h2>
                            Have an idea?
                        </h2>


                        <p className="contact-description">
                            I'm open to software development
                            opportunities, collaboration,
                            interesting projects, and
                            professional conversations.
                        </p>


                        {/* =============================================
                            CONTACT DETAILS
                        ============================================= */}

                        <div className="contact-details">


                            {/* EMAIL */}

                            {profile?.email && (

                                <a
                                    href={`mailto:${profile.email}`}
                                    className="contact-detail"
                                >

                                    <span className="contact-detail-icon">
                                        <Mail size={20} />
                                    </span>


                                    <span className="contact-detail-content">

                                        <span className="contact-detail-label">
                                            Email
                                        </span>

                                        <span className="contact-detail-value">
                                            {profile.email}
                                        </span>

                                    </span>

                                </a>

                            )}


                            {/* PHONE */}

                            {profile?.phone && (

                                <a
                                    href={`tel:${profile.phone}`}
                                    className="contact-detail"
                                >

                                    <span className="contact-detail-icon">
                                        <Phone size={20} />
                                    </span>


                                    <span className="contact-detail-content">

                                        <span className="contact-detail-label">
                                            Phone
                                        </span>

                                        <span className="contact-detail-value">
                                            {profile.phone}
                                        </span>

                                    </span>

                                </a>

                            )}


                            {/* LOCATION */}

                            {profile?.location && (

                                <div className="contact-detail">

                                    <span className="contact-detail-icon">
                                        <MapPin size={20} />
                                    </span>


                                    <span className="contact-detail-content">

                                        <span className="contact-detail-label">
                                            Location
                                        </span>

                                        <span className="contact-detail-value">
                                            {profile.location}, Ethiopia
                                        </span>

                                    </span>

                                </div>

                            )}

                        </div>


                        {/* =============================================
                            SOCIAL CONNECTION
                        ============================================= */}

                        {socialLinks.length > 0 && (

                            <div className="contact-social-section">

                                <p className="contact-social-title">
                                    FIND ME ONLINE
                                </p>


                                <div className="contact-social-links">

                                    {socialLinks.map((social) => {

                                        const Icon = social.icon;

                                        return (

                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="contact-social-card"
                                            >

                                                <span className="contact-social-icon">

                                                    <Icon size={19} />

                                                </span>


                                                <span className="contact-social-content">

                                                    <strong>
                                                        {social.label}
                                                    </strong>

                                                    <small>
                                                        {social.value}
                                                    </small>

                                                </span>


                                                <ArrowUpRight
                                                    size={16}
                                                    className="contact-social-arrow"
                                                />

                                            </a>

                                        );

                                    })}

                                </div>

                            </div>

                        )}


                        {/* =============================================
                            AVAILABILITY
                        ============================================= */}

                        <div className="contact-availability">

                            <span className="availability-dot"></span>

                            <div>

                                <strong>
                                    Open to opportunities
                                </strong>

                                <p>
                                    Available for freelance,
                                    collaboration, and
                                    software development
                                    opportunities.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT SIDE — FORM
                    ================================================= */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >


                        {/* NAME + EMAIL */}

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


                        {/* SUBJECT */}

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


                        {/* MESSAGE */}

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


                        {/* SUCCESS */}

                        {success && (

                            <div className="form-success">
                                {success}
                            </div>

                        )}


                        {/* ERROR */}

                        {error && (

                            <div className="form-error">
                                {error}
                            </div>

                        )}


                        {/* SUBMIT */}

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
