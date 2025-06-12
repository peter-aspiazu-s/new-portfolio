import styles from "./ArticleProfile.module.css";


export const ArticleProfile = () => {
  return (
    <article className={styles.article__profile}>
        <div className={styles["article__profile--container"]}>
            <figure className={styles["article__profile--figure"]}>
                <img className={styles["article__profile--figure-img"]} src="/images/foto-perfil.jpg" alt="Foto de Peter Aspiazu" />
                <figcaption className={styles["article__profile--figure-figcaption"]}>Fotografía de perfil de Peter Aspiazu</figcaption>
            </figure>

            <div className={styles["article__profile--container--info"]}>
                <h2>Sobre Mí</h2>
                <hr />

                <p>Soy un desarrollador web especializado en JavaScript con más de 5 años de experiencia creando aplicaciones web modernas y responsivas. Mi enfoque se centra en construir interfaces de usuario intuitivas y experiencias de usuario excepcionales.</p>
                <p>Trabajo con las últimas tecnologías del ecosistema JavaScript, incluyendo React, Vue, Node.js, y herramientas modernas de desarrollo. Me apasiona el código limpio, la optimización de rendimiento y las mejores prácticas de desarrollo.</p>

                <div className={styles["article__profile--container-tech"]}>
                    <div>
                        <img src="/images/ico-javascript.png" alt="icono de javascript" />
                        <span>JavaScript</span>
                    </div>
                    <div>
                        <img src="/images/ico-react.png" alt="icono de react js" />
                        <span>React.js</span>
                    </div>
                    <div>
                        <img src="/images/ico-next-js.png" alt="icono de next js" />
                        <span>Next.js</span>
                    </div>
                    <div>
                        <img src="/images/ico-node.png" alt="icono de node js" />
                        <span>Node.js</span>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}
