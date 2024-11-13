import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Globe } from 'lucide-react'
import githubLogo from '../../assets/github-mark.svg'
import projectsData from '../../data/projects.json'
import './project_gallery.scss'

const ProjectGallery = () => {
    const [expandedProject, setExpandedProject] = useState(null)

    const handleProjectClick = (id) => {
        setExpandedProject(expandedProject === id ? null : id)
    }

    return (
        <div className="gallery">
            <h2 className="gallery__title">Mes Projets</h2>
            <div className="gallery__grid">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-card__image-container">
                            <img
                                src={project.cover}
                                alt={project.title}
                                className="project-card__image"
                            />
                        </div>

                        <div
                            className="project-card__content"
                            onClick={() => handleProjectClick(project.id)}
                        >
                            <h3 className="project-card__title">
                                {project.title}
                            </h3>
                            <p className="project-card__description">
                                {project.description}
                            </p>

                            <button className="project-card__toggle-btn">
                                {expandedProject === project.id ? (
                                    <ChevronUp size={28} />
                                ) : (
                                    <ChevronDown size={28} />
                                )}
                            </button>

                            <div
                                className={`project-card__expanded ${
                                    expandedProject === project.id
                                        ? 'project-card__expanded--open'
                                        : ''
                                }`}
                            >
                                <div className="project-card__technologies">
                                    <h4 className="project-card__technologies-title">
                                        Technologies utilisées
                                    </h4>
                                    <div className="project-card__tags">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="project-card__tag"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-card__links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-card__link project-card__link--github"
                                        >
                                            <img
                                                src={githubLogo}
                                                alt="GitHub"
                                                className="project-card__link-icon"
                                            />
                                            GitHub
                                        </a>
                                    )}
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-card__link project-card__link--website"
                                        >
                                            <Globe
                                                size={20}
                                                className="project-card__link-icon"
                                            />
                                            Site web
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectGallery
