import { useEffect, useState } from "react";

import Hero from "../components/Hero";

import { getProfile } from "../services/profileService";
import AboutPreview from "../components/AboutPreview";
import InteractiveSkills from "../components/InteractiveSkills";
import FeaturedProjects from "../components/FeaturedProjects";
import ExperiencePreview from "../components/ExperiencePreview";
import ContactCTA from "../components/ContactCTA";

function Home() {

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);


useEffect(() => {

    const loadProfile = async () => {

        try {

            const data = await getProfile();

            console.log("Profile API data:", data);

            setProfile(data[0]);

        } catch (error) {

            console.error(
                "Failed to load profile:",
                error
            );

        } finally {

            setLoading(false);

        }
    };

    loadProfile();

}, []);


    if (loading) {

        return (
            <main className="section">

                <div className="container">

                    <p>
                        Loading...
                    </p>

                </div>

            </main>
        );

    }


   return (
    <main>

        <Hero
            profile={profile}
        />

        <AboutPreview
            profile={profile}
        />
        <InteractiveSkills />
        <FeaturedProjects />
        <ExperiencePreview />
        <ContactCTA />


    </main>
);
}


export default Home;