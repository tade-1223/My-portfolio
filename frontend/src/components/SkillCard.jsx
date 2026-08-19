function SkillCard({ skill }) {
    return (
        <div className="skill-card">
            <div className="skill-card-top">
                <h3>{skill.name}</h3>

                {skill.category && (
                    <span>{skill.category}</span>
                )}
            </div>

            {skill.level && (
                <p className="skill-level">
                    {skill.level}
                </p>
            )}
        </div>
    );
}

export default SkillCard;