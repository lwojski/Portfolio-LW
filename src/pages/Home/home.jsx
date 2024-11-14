import React from 'react'
import About from '../../components/About/about'
import ProjectGallery from '../../components/ProjectGallery/project_gallery'
import Form from '../../components/Form/form'
import './home.scss'
import Skills from '../../components/Skills/skills'

function Home() {
    return (
        <section className="home">
            <About />
            <Skills />
            <ProjectGallery />
            <div className="home-form">
                <Form />
            </div>
        </section>
    )
}

export default Home
