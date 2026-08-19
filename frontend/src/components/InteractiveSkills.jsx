import { useEffect, useMemo, useState } from "react";

import {
    Code2,
    Database,
    Cloud,
    Smartphone,
    Wrench,
    Brain,
    Server,
} from "lucide-react";

import { getSkills } from "../services/skillService";
import SkillIcon from "./SkillIcon";


/*
=========================================
CATEGORY CONFIGURATION
=========================================
*/

const CATEGORY_CONFIG = {

    frontend: {
        label: "Frontend",
        icon: Code2,
        description:
            "Technologies I use to build modern, responsive and interactive user interfaces.",
    },

    backend: {
        label: "Backend",
        icon: Server,
        description:
            "Technologies I use to build APIs, server-side applications and backend systems.",
    },

    database: {
        label: "Database",
        icon: Database,
        description:
            "Database technologies I use to store, manage and retrieve application data.",
    },

    "ai/ml": {
        label: "AI / ML",
        icon: Brain,
        description:
            "Technologies I explore for artificial intelligence and machine learning applications.",
    },

    mobile: {
        label: "Mobile",
        icon: Smartphone,
        description:
            "Technologies I use to build modern mobile applications.",
    },

    devops: {
        label: "DevOps",
        icon: Cloud,
        description:
            "Tools and technologies I use for deployment, infrastructure and development workflows.",
    },

    tools: {
        label: "Tools",
        icon: Wrench,
        description:
            "Development tools and platforms that support my software engineering workflow.",
    },

};


/*
=========================================
CATEGORIES AROUND THE ORBIT
=========================================
*/

const CATEGORIES = [
    "frontend",
    "backend",
    "database",
    "ai/ml",
    "mobile",
    "devops",
    "tools",
];


function InteractiveSkills() {

    /*
    =========================================
    STATE
    =========================================
    */

    const [skills, setSkills] = useState([]);

    const [activeCategory, setActiveCategory] =
        useState("frontend");

    const [rotation, setRotation] =
        useState(0);

    const [paused, setPaused] =
        useState(false);

    const [loading, setLoading] =
        useState(true);


    /*
    =========================================
    LOAD SKILLS FROM DJANGO API
    =========================================
    */

    useEffect(() => {

        const loadSkills = async () => {

            try {

                const data = await getSkills();

                console.log(
                    "Skills loaded from Django:",
                    data
                );

                setSkills(data);

            } catch (error) {

                console.error(
                    "Failed to load skills:",
                    error
                );

            } finally {

                setLoading(false);

            }

        };


        loadSkills();

    }, []);


    /*
    =========================================
    AUTOMATIC ORBIT ROTATION
    =========================================
    */

    useEffect(() => {

        if (paused) {
            return;
        }


        const interval = setInterval(() => {

            setRotation(
                previous =>
                    previous + 0.15
            );

        }, 30);


        return () => {

            clearInterval(interval);

        };

    }, [paused]);


    /*
    =========================================
    GET SKILLS FOR SELECTED CATEGORY
    =========================================

    Example:

    activeCategory = "devops"

    Django data:

    [
        {
            name: "Git",
            category: "devops"
        },
        {
            name: "Docker",
            category: "devops"
        }
    ]

    Only those skills are displayed.
    */

    const activeSkills = useMemo(() => {

        return skills

            .filter((skill) => {

                return (
                    skill.category?.toLowerCase() ===
                    activeCategory
                );

            })

            .sort((a, b) => {

                return (
                    (a.display_order || 0) -
                    (b.display_order || 0)
                );

            });

    }, [
        skills,
        activeCategory,
    ]);


    /*
    =========================================
    CURRENT CATEGORY
    =========================================
    */

    const currentCategory =
        CATEGORY_CONFIG[activeCategory];


    const ActiveIcon =
        currentCategory.icon;


    /*
    =========================================
    ORBIT POSITION
    =========================================

    Calculates the position of each
    category around the circle.
    */

    const getPosition = (index) => {

        const total =
            CATEGORIES.length;


        const angle =
            (360 / total) *
                index +
            rotation;


        const radians =
            (angle * Math.PI) /
            180;


        const radius = 250;


        const x =
            Math.cos(radians) *
            radius;


        const y =
            Math.sin(radians) *
            radius;


        return {

            transform:
                `translate(${x}px, ${y}px)`,

        };

    };


    /*
    =========================================
    LOADING
    =========================================
    */

    if (loading) {

        return (

            <section className="interactive-skills-section">

                <div className="container">

                    <div className="skills-loading">

                        Loading skills...

                    </div>

                </div>

            </section>

        );

    }


    /*
    =========================================
    MAIN UI
    =========================================
    */

    return (

        <section
            className="interactive-skills-section"

            onMouseEnter={() =>
                setPaused(true)
            }

            onMouseLeave={() =>
                setPaused(false)
            }
        >

            <div className="container">


                {/* =================================
                    SECTION HEADER
                ================================= */}

                <div className="interactive-skills-header">

                    <p className="section-eyebrow">

                        <Code2 size={18} />

                        SKILLS

                    </p>


                    <h2>

                        Technologies I work with

                    </h2>


                    <p>

                        Explore my technical skills
                        by category.

                    </p>

                </div>


                {/* =================================
                    MAIN SKILLS LAYOUT
                ================================= */}

                <div className="skills-orbit-layout">


                    {/* =================================
                        LEFT INFORMATION PANEL
                    ================================= */}

                    <div className="skills-information">


                        {/* CATEGORY ICON */}

                        <div className="active-category-icon">

                            <ActiveIcon
                                size={34}
                            />

                        </div>


                        {/* CATEGORY NAME */}

                        <p className="section-eyebrow">

                            {currentCategory.label}

                        </p>


                        <h3>

                            {currentCategory.label}

                        </h3>


                        {/* DESCRIPTION */}

                        <p className="category-description">

                            {currentCategory.description}

                        </p>


                        {/* =================================
                            SKILLS FROM DJANGO
                        ================================= */}

                        {activeSkills.length > 0 ? (

                            <div className="active-skills-list">

                                {activeSkills.map(
                                    (skill) => (

                                        <div
                                            className="skill-item"
                                            key={skill.id}
                                        >


                                            {/* SKILL HEADER */}

                                            <div className="skill-item-header">


                                                <div className="skill-name">


                                                    {/* TECHNOLOGY ICON */}

                                                    <SkillIcon
                                                        name={
                                                            skill.icon
                                                        }

                                                        size={22}
                                                    />


                                                    {/* TECHNOLOGY NAME */}

                                                    <span>

                                                        {
                                                            skill.name
                                                        }

                                                    </span>


                                                </div>


                                                {/* PERCENTAGE */}

                                                <span className="skill-percentage">

                                                    {
                                                        skill.proficiency
                                                    }%

                                                </span>

                                            </div>


                                            {/* =================================
                                                PROGRESS BAR
                                            ================================= */}

                                            <div className="skill-progress">

                                                <div
                                                    className="skill-progress-bar"

                                                    style={{
                                                        width:
                                                            `${skill.proficiency}%`,
                                                    }}
                                                />

                                            </div>


                                        </div>

                                    )
                                )}

                            </div>

                        ) : (

                            /* =================================
                               EMPTY CATEGORY
                            ================================= */

                            <div className="skills-empty">

                                More technologies coming soon.

                            </div>

                        )}

                    </div>


                    {/* =================================
                        ORBIT
                    ================================= */}

                    <div className="skills-orbit">


                        {/* LARGE ORBIT RING */}

                        <div
                            className="orbit-ring orbit-ring-large"
                        />


                        {/* SMALL ORBIT RING */}

                        <div
                            className="orbit-ring orbit-ring-small"
                        />


                        {/* =================================
                            CENTER BUTTON
                        ================================= */}

                        <button
                            className="orbit-center"

                            onClick={() =>
                                setPaused(
                                    previous =>
                                        !previous
                                )
                            }

                            aria-label={
                                paused
                                    ? "Resume skills animation"
                                    : "Pause skills animation"
                            }
                        >

                            <ActiveIcon
                                size={38}
                            />


                            <strong>

                                {
                                    currentCategory.label
                                }

                            </strong>


                            <span>

                                {paused
                                    ? "Resume"
                                    : "Pause"}

                            </span>

                        </button>


                        {/* =================================
                            CATEGORY BUTTONS
                        ================================= */}

                        {CATEGORIES.map(
                            (
                                categoryName,
                                index
                            ) => {


                                const config =
                                    CATEGORY_CONFIG[
                                        categoryName
                                    ];


                                const CategoryIcon =
                                    config.icon;


                                const isActive =
                                    categoryName ===
                                    activeCategory;


                                return (

                                    <button

                                        key={
                                            categoryName
                                        }

                                        className={
                                            isActive
                                                ? "orbit-node active"
                                                : "orbit-node"
                                        }

                                        style={
                                            getPosition(
                                                index
                                            )
                                        }

                                        onClick={() => {

                                            setActiveCategory(
                                                categoryName
                                            );


                                            /*
                                            Stop automatic
                                            rotation when
                                            user selects
                                            a category.
                                            */

                                            setPaused(
                                                true
                                            );

                                        }}

                                    >

                                        <CategoryIcon
                                            size={25}
                                        />


                                        <span>

                                            {
                                                config.label
                                            }

                                        </span>


                                    </button>

                                );

                            }
                        )}

                    </div>

                </div>

            </div>

        </section>

    );

}


export default InteractiveSkills;