import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles["footer__container--info"]}>
            <div className={styles.footer__info}>
                <h3><span>Peter Aspiazu</span> Dev</h3>
                <p>Desarrollador web especializado en crear experiencias digitales modernas y atractivas con JavaScript.</p>
            </div>
            <div className={styles.footer__links}>
                <div>
                    <h4>Enlaces rápidos</h4>
                    <ul>
                        <a href="#inicio"><li>Inicio</li></a>
                        <a href="#proyectos"><li>Proyectos</li></a>
                        <a href="#tutoriales"><li>Tutoriales</li></a>
                        <a href="#certificados"><li>Certificados</li></a>
                        <a href="#contacto"><li>Contacto</li></a>
                    </ul>
                </div>
                <div>
                    <h4>Servicios</h4>
                    <ul>
                        <a href="https://es.fiverr.com/paspiazu/design-a-clean-and-responsive-wordpress-website" target="_blank"><li>Creación con Wordpress</li></a>
                        <a href="https://es.fiverr.com/paspiazu/create-code-in-html-css-javascript" target="_blank"><li>Creación con Html, Css y Javascript</li></a>
                        <a href="javascript:void(0)"><li>Aplicaciones SPA con React</li></a>
                        <a href="javascript:void(0)"><li>Cursos</li></a>
                    </ul>
                </div>
                <div>
                    <h4>Sígueme</h4>
                    <div>
                        <a href="https://www.tiktok.com/@peter_aspiazu?_t=ZM-8x88WVj6beq&_r=1" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.youtube.com/@peteraspiazu3324" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.instagram.com/peteraspiazus?igsh=YzlsZ2djNWg1dG14" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=61566286537016" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://github.com/peter-aspiazu-s" target="_blank"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/peter-aspiazu/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles["footer__container--politic"]}>
            <small>© 2023 Peter Aspiazu Web. Todos los derechos reservados.</small>

            <div className={styles.footer__politic}>
                <a href="javascript:void(0)">Política de privacidad</a>
                <a href="javascript:void(0)">Términos de servicio</a>
            </div>
        </div>
    </footer>
  )
}
