import styles from "./SectionProjects.module.css";

export const SectionProjects = () => {
  return (
    <section id="proyectos" className={styles["section-projects"]}>
        <div className={styles["section-projects__container"]}>
        
            <div className={styles["section-projects__title"]}>
                <h2>Proyectos Destacados</h2>
                <hr />
            </div>

            <div className={styles["section-projects__container--card"]}>
                <article className={styles["section-projects__article"]}>
                    <div>
                        <svg className="w-24 h-24 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>

                    <div>
                        <h3>Fox Exterior Solutions</h3>
                        <p>Sitio web profesiona, adaptable a todos los tamaños de pantalla.</p>

                        <div>
                            <span>Next.js</span>
                            <span>Tailwind</span>
                            <span>Prisma</span>
                        </div>

                        <a href="https://foxexteriorsolutionswny.com/" target="_blank">Ver proyecto<span>⟶</span></a>
                    </div>

                </article>
                <article className={styles["section-projects__article"]}>
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

                </article>
            </div>
            
            <a href="https://www.youtube.com/@peteraspiazu3324/shorts" target="_blank">Ver todos los proyectos</a>
        </div>

    </section>
  )
}
