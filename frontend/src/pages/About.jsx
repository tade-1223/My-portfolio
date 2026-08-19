import { useEffect, useState } from "react";

import {
    Download,
    Mail,
} from "lucide-react";

import { getProfile } from "../services/profileService";
import { getSkills } from "../services/skillService";


function About() {

    const [profile, setProfile] = useState(null);
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const loadData = async () => {

            try {

                const [profileData, skillsData] =
                    await Promise.all([
                        getProfile(),
                        getSkills(),
                    ]);

                console.log("About profile:", profileData);
                console.log("About skills:", skillsData);

                setProfile(profileData);
                setSkills(skillsData);

            } catch (error) {

                console.error(
                    "Failed to load about page:",
                    error
                );

            } finally {

                setLoading(false);

            }

        };

        loadData();

    }, []);


    if (loading) {
        return (
            <main className="section">
                <div className="container">
                    <p>Loading profile...</p>
                </div>
            </main>
        );
    }


    return (
        <main>

            {/* HERO */}

            <section className="section about-hero">

                <div className="container">

                    <p className="section-eyebrow">
                        ABOUT ME
                    </p>

                    <h1>
                        {profile?.name || "Tadesse Belay"}
                    </h1>

                    <h2>
                        {profile?.title ||
                            "Software Engineer"}
                    </h2>

                </div>

            </section>


            {/* PROFILE */}

            <section className="section">

                <div className="container about-profile-grid">

                    <div>

                        <p className="section-eyebrow">
                            PROFESSIONAL PROFILE
                        </p>

                        <h2>
                            Turning ideas into
                            practical software.
                        </h2>

                    </div>


                    <div className="about-profile-text">

                        <p>
                            {profile?.bio ||
                                "I am a Computer Science graduate with a strong foundation in software engineering, web development, computer networking, and databases."}
                        </p>

                        <p>
                            I enjoy building full-stack applications
                            and solving real-world problems through
                            technology.
                        </p>


                        <div className="about-actions">

                            <a
                                href="/resume.pdf"
                                download
                                className="btn btn-primary"
                            >
                                <Download size={18} />
                                Download CV
                            </a>


                            {profile?.email && (

                                <a
                                    href={`mailto:${profile.email}`}
                                    className="btn btn-outline"
                                >
                                    <Mail size={18} />
                                    Email Me
                                </a>

                            )}

                        </div>

                    </div>

                </div>

            </section>


            {/* SOCIAL LINKS */}

            <section className="section">

                <div className="container">

                    <p className="section-eyebrow">
                        CONNECT
                    </p>

                    <h2>
                        Find me online.
                    </h2>


                    <div className="social-cards">

                        {profile?.github_url && (

    <a
        href={profile.github_url}
        target="_blank"
        rel="noreferrer"
        className="social-card"
    >

        <span className="social-icon">
            GH
        </span>

        <div>
            <span>
                GitHub
            </span>

            <small>
                View my code
            </small>
        </div>

    </a>

)}


                       {profile?.linkedin_url && (

    <a
        href={profile.linkedin_url}
        target="_blank"
        rel="noreferrer"
        className="social-card"
    >

        <span className="social-icon">
            IN
        </span>

        <div>
            <span>
                LinkedIn
            </span>

            <small>
                Connect with me
            </small>
        </div>

    </a>

)}


                        {profile?.email && (

                            <a
                                href={`mailto:${profile.email}`}
                                className="social-card"
                            >

                                <Mail size={24} />

                                <div>
                                    <span>
                                        Email
                                    </span>

                                    <small>
                                        Contact me
                                    </small>
                                </div>

                            </a>

                        )}

                    </div>

                </div>

            </section>


            {/* SKILLS */}

            <section className="section about-skills">

                <div className="container">

                    <p className="section-eyebrow">
                        TECHNICAL SKILLS
                    </p>

                    <h2>
                        Technologies I use.
                    </h2>


                    <div className="about-skills-grid">

                        {skills.length > 0 ? (

                            skills.map((skill, index) => (

                                <div
                                    className="about-skill-card"
                                    key={skill.id || index}
                                >

                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3>
                                        {skill.name}
                                    </h3>

                                    {skill.category && (
                                        <p>
                                            {skill.category}
                                        </p>
                                    )}

                                </div>

                            ))

                        ) : (

                            <p>
                                No skills available.
                            </p>

                        )}

                    </div>

                </div>

            </section>


            {/* EDUCATION */}

            <section className="section">

                <div className="container">

                    <p className="section-eyebrow">
                        EDUCATION
                    </p>

                    <h2>
                        Academic background.
                    </h2>


                    <div className="education-card">

                        <div className="education-year">
                            2026
                        </div>

                        <div>

                            <h3>
                                Bachelor of Science
                                in Computer Science
                            </h3>

                            <h4>
                                University of Gondar
                            </h4>

                            <p>
                                Computer Science education with
                                a foundation in software engineering,
                                algorithms, databases, networking,
                                web development, and computer systems.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* EXPERIENCE */}

            <section className="section">

                <div className="container">

                    <p className="section-eyebrow">
                        EXPERIENCE
                    </p>

                    <h2>
                        Practical experience.
                    </h2>


                    <div className="experience-card">

                        <div className="experience-card-year">
                            2025
                        </div>

                        <div>

                            <span className="timeline-type">
                                INTERNSHIP
                            </span>

                            <h3>
                                Networking Intern
                            </h3>

                            <h4>
                                University of Gondar
                                Data Center
                            </h4>

                            <p>
                                Gained practical experience in
                                computer networking, infrastructure,
                                troubleshooting, and data center
                                operations.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}


export default About;