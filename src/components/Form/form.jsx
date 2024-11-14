import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './form.scss'

const Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const templateParams = {
            firstName,
            lastName,
            email,
            subject,
            message,
        }

        emailjs
            .send(
                'service_t4w5sdw',
                'template_0bllgff',
                templateParams,
                'T0dn9x080-AKJ7rnm',
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text)
                    setStatus('Message envoyé !')
                },
                (error) => {
                    console.error('FAILED...', error)
                    setStatus("Échec de l'envoi, veuillez réessayer.")
                },
            )

        setFirstName('')
        setLastName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    return (
        <section className="form">
            <h2 className="form-title">Contactez-moi</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <label htmlFor="firstName" className="form-label">
                    Prénom
                </label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="form-input"
                />

                <label htmlFor="lastName" className="form-label">
                    Nom
                </label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="form-input"
                />

                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-input"
                />

                <label htmlFor="subject" className="form-label">
                    Sujet
                </label>
                <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="form-input"
                />

                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="form-textarea"
                ></textarea>

                <button type="submit" className="form-submit">
                    Envoyer
                </button>

                {status && <p className="form-status">{status}</p>}
            </form>
        </section>
    )
}

export default Form
