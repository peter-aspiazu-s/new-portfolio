import styles from "./Contact.module.css";

export const Contact = () => {
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
            
            <form className={styles.contact__form}>
                <h4>Envíame un mensaje</h4>

                <label for="name">Nombre</label>
                <input type="text" id="nombre" placeholder="Tu nombre" required />
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Tu email" required />
                <label for="subject">Asunto</label>
                <input type="text" id="subject" placeholder="Tu asunto" required />
                <label for="message">Mensaje</label>
                <textarea rows="5" id="message" placeholder="Escribe tu mensaje..."></textarea>

                <button type="submit">Enviar mensaje</button>
            </form>
        </div>
    </div>
  )
}
