import styles from "./Courses.module.css";

export const Courses = () => {
  return (
    <section id="proyectos" className={styles["section-courses"]}>
        <div className={styles["section-courses__container"]}>
        
            <div className={styles["section-courses__title"]}>
                <h2>Cursos de Desarrollo Web</h2>
                <hr />
            </div>

            <div className={styles["section-courses__container--card"]}>
                <article className={styles["section-courses__article"]}>
                    <div>
                        <img src="/images/imagen-curso-html-css.png" />
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
                {/* <article className={styles["section-projects__article"]}>
                    <div>
                        <svg className="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                    </div>

                    <div>
                        <h3>Aspiazu Shop</h3>
                        <p>Tienda online con carrito de compras, pasarela de pagos y panel de administración.</p>

                        <div>
                            <span>next.js</span>
                            <span>tailwind</span>
                            <span>prisma</span>
                        </div>

                        <a href="https://tienda-aspiazu.vercel.app/" target="_blank">Ver proyecto<span>⟶</span></a>
                    </div>

                </article>
                <article className={styles["section-projects__article"]}>
                    <div>
                        <svg className="w-24 h-24 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                        </svg>
                    </div>

                    <div>
                        <h3>Buscador de palabras</h3>
                        <p>Un programa para buscar palabras y letras en tiempo real y resaltadas.</p>

                        <div>
                            <span>Html</span>
                            <span>Css</span>
                            <span>JavaScript</span>
                        </div>

                        <a href="https://peter-aspiazu-s.github.io/buscador-palabras/" target="_blank">Ver proyecto<span>⟶</span></a>
                    </div>

                </article> */}
            </div>
            
            <a href="https://www.udemy.com/user/peter-andres-aspiazu-sabando/" target="_blank">Ver todos los cursos</a>
        </div>

    </section>
  )
}
