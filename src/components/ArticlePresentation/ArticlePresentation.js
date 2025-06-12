import styles from "./ArticlePresentation.module.css";

export const ArticlePresentation = () => {
  return (
    <article className={styles.article__presentation}>
        <div className={styles["article__presentation--container"]}>
            <div className={styles["article__presentation--content-text"]}>
                <h1 className={styles["article__presentation--content-text-title"]}>Desarrollador Web JavaScript</h1>
                <p className={styles["article__presentation--content-text-p"]}>Creando experiencias web modernas e interactivas con las últimas tecnologías frontend y backend</p>
                <div className={styles["article__presentation--content-text-buttons"]}>
                    <a href="https://www.youtube.com/@peteraspiazu3324/shorts" target="_blank" className={styles["article__presentation--content-text-btn"]}>Ver Proyectos</a>
                    <a href="tel:+593960067820" className={styles["article__presentation--content-text-btn"]}>Contactar</a>
                </div>
            </div>

            <div className={styles["article__presentation--container-image"]}>
                <img className={styles["article__presentation--image-js"]} src="/images/js.png" alt="Imagen de JavaScript" />
                <img className={styles["article__presentation--image-tech"]} src="/images/html.png" alt="Imagen de HTML" />
                <img className={styles["article__presentation--image-tech"]} src="/images/css.png" alt="Imagen de CSS" />
                <img className={styles["article__presentation--image-tech"]} src="/images/bootstrap.png" alt="Imagen de Bootstrap" />
                <img className={styles["article__presentation--image-tech"]} src="/images/tailwind.png" alt="Imagen de Tailwind" />
                <img className={styles["article__presentation--image-tech"]} src="/images/react.png" alt="Imagen de React JS" />
                <img className={styles["article__presentation--image-tech"]} src="/images/next.png" alt="Imagen de Next JS" />
                <img className={styles["article__presentation--image-tech"]} src="/images/express.png" alt="Imagen de Express JS" />
                <img className={styles["article__presentation--image-tech"]} src="/images/node.png" alt="Imagen de Node JS" />
            </div>
        </div>
    </article>
  )
}
