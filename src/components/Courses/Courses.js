import styles from "./Courses.module.css";

export const Courses = () => {
  return (
    <section id="courses" className={styles["section-courses"]}>
        <div className={styles["section-courses__container"]}>

            <div className={styles["section-courses__title"]}>
                <h2>Cursos de Desarrollo Web</h2>
                <hr />
            </div>

            <div className={styles["section-courses__container--card"]}>
                <article className={styles["section-courses__article"]}>
                    <div>
                        <img src="/images/imagen-curso-html-css.png" alt="imagen de curso html y css" />
                    </div>

                    <div>
                        <h3>Aprende HTML5 y CSS3 con Proyectos: Desde la Base al Diseño</h3>
                        <p>Guía Completa y Práctica para Construir Diseños Web Impresionantes Paso a Paso.</p>

                        <div>
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>VS Code</span>
                        </div>

                        <a href="https://www.udemy.com/course/aprende-html5-y-css3-con-proyectos-desde-la-base-al-diseno/?referralCode=7EBB2E0B383086915680" target="_blank">Ver curso<span>⟶</span></a>
                    </div>

                </article>
            </div>

            <a href="https://www.udemy.com/user/peter-andres-aspiazu-sabando/" target="_blank">Ver todos los cursos</a>
        </div>

    </section>
  )
}
