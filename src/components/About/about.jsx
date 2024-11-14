import React from 'react'
import photo from '../../assets/photo.png'
import './about.scss'

const About = () => {
    return (
        <section className="about">
            <img src={photo} alt="Lilian" className="photo" />
            <div className="about__content">
                <h2 className="about__title">Lilian Wojciechowski</h2>
                <p className="about__description">
                    Je suis un développeur junior passionné par la création
                    d'applications web modernes.
                </p>
                <p className="about__description">
                    J'aime concevoir des interfaces utilisateur intuitives et
                    esthétiques, tout en assurant des performances optimales et
                    une expérience utilisateur fluide. Je travaille
                    régulièrement avec des frameworks comme React, et j'apprécie
                    découvrir de nouvelles technologies émergentes pour enrichir
                    constamment mes compétences.
                </p>
            </div>
        </section>
    )
}

export default About
