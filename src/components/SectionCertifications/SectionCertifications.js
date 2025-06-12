import styles from "./SectionCertifications.module.css";

export const SectionCertifications = () => {
  return (
    <section id="certificados" className={styles["section-certifications"]}>

        <div className={styles["section-certifications__container"]}>

            <div className={styles["section-certifications__title"]}>
                <h2>Certificaciones</h2>
                <hr />
            </div>

            <div className={styles["section-certifications__container--card"]}>
                <article className={styles["section-certifications__article"]}>
                    <div>
                        <svg className={styles["w-16 h-16 text-white"]} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                        </svg>
                    </div>

                    <div>
                        <h3>Responsive Web Design</h3>
                        <p>Certificación oficial en diseño web responsivo, HTML, CSS moderno y buenas prácticas de accesibilidad.</p>
                        <a href="https://www.freecodecamp.org/certification/fcc4d881f5d-a48e-4290-9419-0d72f0c1b874/responsive-web-design" target="_blank">Ver certificado <span>⟶</span></a>
                    </div>
                </article>

                <article className={styles["section-certifications__article"]}>
                    <div>
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                        </svg>
                    </div>

                    <div>
                        <h3>JavaScript Algorithms and Data Structures</h3>
                        <p>Certificación oficial en fundamentos de JavaScript, programación orientada a objetos, programación funcional y manipulación del DOM.</p>
                        <a href="https://www.freecodecamp.org/certification/fcc4d881f5d-a48e-4290-9419-0d72f0c1b874/javascript-algorithms-and-data-structures-v8" target="_blank">Ver certificado <span>⟶</span></a>
                    </div>
                </article>

                <article className={styles["section-certifications__article"]}>
                    <div>
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                        </svg>
                    </div>

                    <div>
                        <h3>Front End Development Libraries</h3>
                        <p>Certificación oficial en desarrollo de interfaces con Bootstrap, Sass, React y gestión de estado con Redux.</p>
                        <a href="https://www.freecodecamp.org/certification/fcc4d881f5d-a48e-4290-9419-0d72f0c1b874/javascript-algorithms-and-data-structures-v8" target="_blank">Ver certificado <span>⟶</span></a>
                    </div>
                </article>
            </div>
        </div>

    </section>
  )
}
