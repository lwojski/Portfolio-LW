import React from 'react'
import Card from '../../components/Card/card'
import projets from '../../data/projets.json'
import './home.scss'

function Home() {
    return (
        <section className="home">
            <div className="gallery">
                <div className="galleryRow">
                    {projets.map((projet) => (
                        <Card
                            key={projet.id}
                            id={projet.id}
                            title={projet.title}
                            cover={projet.cover}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home
