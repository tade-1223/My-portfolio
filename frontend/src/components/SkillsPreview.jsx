import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { getSkills } from "../services/skillService";


function SkillsPreview() {

    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadSkills = async () => {

            try {
                const data = await getSkills();
                setSkills(data);
            } catch (error) {
                console.error("Failed to load skills:", error);
            } finally {
                setLoading(false);
            }

        };

        loadSkills();

    }, []);


    return (
        <section className="section skills-preview">

            <div className="container">

                <div className="skills-heading">

                    <div>
                        <p className="section-eyebrow">
                            MY SKILLS
                        </p>

                        <h2>
                            Technologies I work with.
                        </h2>
                    </div>

                    <Link
                        to="/about"
                        className="skills-more-link"
                    >
                        View All
                        <ArrowRight size={18} />
                    </Link>

                </div>


                {loading ? (
                    <p>Loading skills...</p>
                ) : skills.length === 0 ? (
                    <p>No skills available yet.</p>
                ) : (

                    <div className="skills-grid">

                        {skills.map((skill, index) => (

                            <div
                                className="skill-card"
                                key={skill.id || index}
                            >

                                <span className="skill-number">
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

                        ))}

                    </div>

                )}

            </div>

        </section>
    );
}


export default SkillsPreview;