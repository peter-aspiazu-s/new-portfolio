import styles from "./WhatsAppBtn.module.css";

export const WhatsAppBtn = () => {
  return (
    <a className={styles["whatsapp-btn"]} href="https://wa.link/1zo0pd" target="_blank">
        <i className="fa-brands fa-whatsapp"></i>
    </a>
  )
}
