import React from 'react'
import ProjectGallery from '../../components/ProjectGallery/project_gallery'
import Form from '../../components/Form/form'
import './home.scss'

function Home() {
    return (
        <section className="home">
            <ProjectGallery />
            <div className="home-form">
                <Form />
            </div>
        </section>
    )
}

export default Home
