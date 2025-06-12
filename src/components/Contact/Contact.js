'use client';

import { useState } from 'react';
import styles from "./Contact.module.css";
import { Loader } from '../Loader/Loader';
import Swal from 'sweetalert2';

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Función de validación de email con expresión regular
    const isValidEmail = (email) => {
        // Esta regex verifica que haya al menos un punto después del '@'
        // y que el dominio tenga al menos dos caracteres después del último punto.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // --- VALIDACIÓN DE EMAIL EN EL FRONTEND ---
        if (!isValidEmail(formData.email)) {
            Swal.fire({
                icon: 'warning', // Un icono de advertencia es adecuado aquí
                title: 'Correo inválido',
                text: 'Por favor, introduce una dirección de correo electrónico válida (ej. tu.email@dominio.com).',
                confirmButtonText: 'Entendido'
            });
            return; // Detiene el envío del formulario si el email es inválido
        }
        // --- FIN VALIDACIÓN DE EMAIL ---

        setIsLoading(true); // <-- Activa el loader al iniciar el envío

        try {
        const response = await fetch('/api/send-email', { 
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado!',
                text: 'Tu mensaje ha sido enviado correctamente. Me pondré en contacto contigo pronto.',
                confirmButtonText: 'Aceptar'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            Swal.fire({
                icon: 'error',
                title: '¡Error al enviar!',
                text: `Hubo un problema al enviar tu mensaje: ${data.message || 'Por favor, inténtalo de nuevo.'}`,
                confirmButtonText: 'Cerrar'
            });
        }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            Swal.fire({
                icon: 'error',
                title: '¡Error de conexión!',
                text: 'No se pudo conectar con el servidor. Por favor, revisa tu conexión e inténtalo de nuevo más tarde.',
                confirmButtonText: 'Cerrar'
            });
        }  finally {
            setIsLoading(false); // <-- Desactiva el loader al finalizar (éxito o error)
        }
    };
        
  return (
    <div id="contacto" className={styles.contact}>
        <h3>Contacto</h3>

        <div className={styles.contact__container}>
            <aside className={styles.contact__aside}>
                <h4>Información de contacto</h4>

                <div className={styles["contact__aside--info"]}>
                    <svg className="w-6 h-6 mr-3 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                        <span>Email</span>
                        <a href="mailto:paspiazusabando@gmail.com">paspiazusabando@gmail.com</a>
                    </div>
                </div>
                
                <div className={styles["contact__aside--info"]}>
                    <svg className="w-6 h-6 mr-3 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <div>
                        <span>Teléfono</span>
                        <a href="tel:593960067820">+593 960067820</a>
                    </div>
                </div>
                
                <div className={styles["contact__aside--info"]}>
                    <svg className="w-6 h-6 mr-3 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                        <span>Ubicación</span>
                        <span>Durán, Ecuador</span>
                    </div>
                </div>

                <div className={styles["contact__aside--info"]}>
                    <h5>Redes sociales</h5>
                    <div>
                        <a href="https://www.tiktok.com/@peter_aspiazu?_t=ZM-8x88WVj6beq&_r=1" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.youtube.com/@peteraspiazu3324" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/peteraspiazus?igsh=YzlsZ2djNWg1dG14" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=61566286537016" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://github.com/peter-aspiazu-s" target="_blank"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/peter-aspiazu/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </aside>
            
            <form className={styles.contact__form} onSubmit={handleSubmit}>
                <h4>Envíame un mensaje</h4>

                <label htmlFor="name">Nombre</label>
                <input 
                    type="text"
                    id="name" 
                    name="name" 
                    placeholder="Tu nombre"
                    value={formData.name} 
                    onChange={handleChange} 
                    required />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleChange} 
                    required />
                <label htmlFor="subject">Asunto</label>
                <input 
                    type="text"
                    id="subject" 
                    name="subject" 
                    placeholder="Tu asunto"
                    value={formData.subject} 
                    onChange={handleChange} 
                    required />
                <label htmlFor="message">Mensaje</label>
                <textarea 
                    rows="5"
                    id="message" 
                    name="message" 
                    placeholder="Escribe tu mensaje..."
                    value={formData.message} 
                    onChange={handleChange}
                    required></textarea>

                <button type="submit">
                    {isLoading ? 'Enviando...' : 'Enviar mensaje'}
                </button>
            </form>
        </div>
        {isLoading && <Loader />}
    </div>
  )
}
