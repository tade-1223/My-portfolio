import { useEffect, useState } from "react";

import {
    Mail,
    Phone,
    Send,
    MessageCircle,
    ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { getProfile } from "../services/profileService";


function Footer() {

    const [profile, setProfile] = useState(null);


    useEffect(() => {

        const loadProfile = async () => {

            try {

                const data = await getProfile();

                console.log("Footer profile:", data);

                if (Array.isArray(data) && data.length > 0) {

                    setProfile(data[0]);

                } else if (data && !Array.isArray(data)) {

                    setProfile(data);

                }

            } catch (error) {

                console.error(
                    "Failed to load footer profile:",
                    error
                );

            }

        };


        loadProfile();

    }, []);


    const currentYear =
        new Date().getFullYear();


    return (

        <footer className="footer">

            <div className="container">


                {/* =====================================================
                    FOOTER TOP
                ===================================================== */}

                <div className="footer-top">


                    {/* =================================================
                        BRAND
                    ================================================= */}

                    <div className="footer-brand">

                        <Link
                            to="/"
                            className="footer-logo"
                        >
                            TB<span>.</span>
                        </Link>


                        <p>
                            Software Developer building
                            modern, practical, and
                            user-focused digital solutions.
                        </p>


                        <Link
                            to="/contact"
                            className="footer-cta"
                        >
                            Let's work together

                            <ArrowUpRight size={16} />

                        </Link>

                    </div>


                    {/* =================================================
                        NAVIGATION
                    ================================================= */}

                    <div className="footer-links">

                        <div className="footer-column">

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


                        {/* =================================================
                            CONNECT
                        ================================================= */}

                        <div className="footer-column">

                            <h4>
                                Connect
                            </h4>


                            {profile?.github && (

                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                    <FaGithub size={16} />

                                    GitHub

                                </a>

                            )}


                            {profile?.linkedin && (

                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >

                                    <FaLinkedin size={16} />

                                    LinkedIn

                                </a>

                            )}


                            <a
                                href="https://x.com/bel1223_1223"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <span className="footer-x-icon">
                                    𝕏
                                </span>

                                X

                            </a>


                            <a
                                href="https://t.me/tbm2323"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <Send size={16} />

                                Telegram

                            </a>


                            <a
                                href="https://wa.me/251960723202"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <MessageCircle size={16} />

                                WhatsApp

                            </a>


                            {profile?.email && (

                                <a
                                    href={`mailto:${profile.email}`}
                                >

                                    <Mail size={16} />

                                    Email

                                </a>

                            )}

                        </div>


                        {/* =================================================
                            CONTACT
                        ================================================= */}

                        <div className="footer-column">

                            <h4>
                                Contact
                            </h4>


                            {profile?.email && (

                                <a
                                    href={`mailto:${profile.email}`}
                                >

                                    <Mail size={16} />

                                    {profile.email}

                                </a>

                            )}


                            {profile?.phone && (

                                <a
                                    href={`tel:${profile.phone}`}
                                >

                                    <Phone size={16} />

                                    {profile.phone}

                                </a>

                            )}


                            {profile?.location && (

                                <span className="footer-location">

                                    {profile.location},
                                    Ethiopia

                                </span>

                            )}

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    FOOTER BOTTOM
                ===================================================== */}

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