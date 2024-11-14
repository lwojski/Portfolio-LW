import React from 'react'
import skillsData from '../../data/skills.json'
import './skills.scss'

const Skills = () => {
    return (
        <section className="skills">
            <div className="skills__container">
                <h2 className="skills__title">Compétences</h2>

                <div className="skills__grid">
                    {skillsData.map((category, index) => (
                        <div key={category.id} className="skills__card">
                            <div className="skills__card-content">
                                <h3 className="skills__category-title">
                                    {category.title}
                                </h3>
                                {category.subcategories ? (
                                    <div>
                                        {category.subcategories.map(
                                            (subcategory, subIndex) => (
                                                <div
                                                    key={subIndex}
                                                    className="skills__subcategory"
                                                >
                                                    <h4 className="skills__subcategory-title">
                                                        {subcategory.title}
                                                    </h4>
                                                    <div className="skills__skills-grid">
                                                        {subcategory.skills.map(
                                                            (
                                                                skill,
                                                                skillIndex,
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        skillIndex
                                                                    }
                                                                    className="skills__skill"
                                                                >
                                                                    <div className="skills__skill-icon-wrapper">
                                                                        <img
                                                                            src={
                                                                                skill.icon
                                                                            }
                                                                            alt={`${skill.name} icon`}
                                                                            className="skills__skill-icon"
                                                                        />
                                                                    </div>
                                                                    <span className="skills__skill-name">
                                                                        {
                                                                            skill.name
                                                                        }
                                                                    </span>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                ) : (
                                    <div className="skills__skills-grid">
                                        {category.skills.map(
                                            (skill, skillIndex) => (
                                                <div
                                                    key={skillIndex}
                                                    className="skills__skill"
                                                >
                                                    <div className="skills__skill-icon-wrapper">
                                                        <img
                                                            src={skill.icon}
                                                            alt={`${skill.name} icon`}
                                                            className="skills__skill-icon"
                                                        />
                                                    </div>
                                                    <span className="skills__skill-name">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
