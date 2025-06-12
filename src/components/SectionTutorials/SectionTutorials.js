import styles from "./SectionTutorials.module.css";

export const SectionTutorials = () => {
  return (
    <section id="tutoriales" class={styles["section-tutorials"]}>

        <div className={styles["section-tutorials__container"]}>
            <div className={styles["section-tutorials__title"]}>
                <h2>Tutoriales en YouTube</h2>
                <hr />
            </div>

            <div className={styles["section-tutorials__container--card"]}>
                <article className={styles["section-tutorials__article"]}>
                    <iframe src="https://www.youtube.com/embed/O32eFeUkwNQ?si=yALWCtbO2cjEvGZl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <div>
                        <h3>Aplicación para Convertir Divisas</h3>
                        <p>Aplicación para Convertir Divisas Usando la API ExchangeRate con JavaScript y LocalStorage.</p>
                    </div>

                    <div>
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-0.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                        </svg>
                        <span>15:42 minutos</span>
                    </div>
                </article>
                
                <article className={styles["section-tutorials__article"]}>
                    <iframe src="https://www.youtube.com/embed/2uof5fOi3y8?si=WUSobWlVn3iO09-2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <div>
                        <h3>Aplicación para Buscar Noticias</h3>
                        <p>Aplicación para Buscar Noticias en Tiempo Real con JavaScript (POO y Fetch).</p>
                    </div>

                    <div>
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-0.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                        </svg>
                        <span>23:18 minutos</span>
                    </div>
                </article>
                
                <article className={styles["section-tutorials__article"]}>
                    <iframe src="https://www.youtube.com/embed/S6RSGngESng?si=Agunaf-9ICXnJMD2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <div>
                        <h3>Aplicación de Clima</h3>
                        <p>Aplicación para buscar el clima con JavaScript (fetch) usamos Async y Await.</p>
                    </div>

                    <div>
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-0.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                        </svg>
                        <span>18:05 minutos</span>
                    </div>
                </article>
                
            </div>

            <a href="https://www.youtube.com/@peteraspiazu3324" target="_blank">Ver canal de YouTube</a>
        </div>
    </section>
  )
}
