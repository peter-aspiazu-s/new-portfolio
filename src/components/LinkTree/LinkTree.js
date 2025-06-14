"use client";

import Image from 'next/image'; 
import styles from './LinkTree.module.css';

export const LinkTree = () => {
  const links = [
    { name: 'Mi Sitio Web', url: 'https://new-portfolio-peteraspiazus-projects.vercel.app/', icon: 'fa-solid fa-globe' },
    { name: 'Mi Canal de YouTube', url: 'https://www.youtube.com/@peteraspiazu3324', icon: 'fa-brands fa-youtube' },
    { name: 'Mi Página de Facebook', url: 'https://www.facebook.com/profile.php?id=61566286537016', icon: 'fa-brands fa-facebook' },
    { name: 'Diseño Web & E-commerce (WordPress)', url: 'https://es.fiverr.com/paspiazu/design-a-clean-and-responsive-wordpress-website', icon: 'fa-brands fa-wordpress' },
    { name: 'Desarrollo Frontend (HTML, CSS, JS)', url: 'https://es.fiverr.com/paspiazu/create-code-in-html-css-javascript', icon: 'fa-brands fa-js' }, 
    // { name: 'Aplicaciones SPA (React)', url: 'https://peter-aspiazu.vercel.app/#servicios-react', icon: 'fa-brands fa-react' },
    { name: 'Crea tu Logo con IA', url: 'https://go.fiverr.com/visit/?bta=1129190&brand=logomaker', icon: 'fa-solid fa-robot' }, 
  ];

  const profileImageUrl = '/images/foto-perfil.jpg'; 
  const profileAltText = 'Foto de perfil de Peter Aspiazu';

  return (
    <div className={styles.linkTreeContainer}>
      <div className={styles.profileSection}>
        <Image
          src={profileImageUrl}
          alt={profileAltText}
          width={120}
          height={120}
          className={styles.profileImage}
          priority
        />
        <h1 className={styles.profileName}>Peter Aspiazu Dev</h1>
        <p className={styles.profileBio}>
          Desarrollador Web Full-Stack | Creando soluciones digitales con pasión y creatividad.
        </p>
      </div>

      <div className={styles.linksSection}>
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.botonBurbujas}
          >
            {link.icon && (
              <i className={`${link.icon} ${styles.buttonIcon}`}></i> 
            )}
            <span>{link.name}</span>
            {[...Array(5)].map((_, i) => (
              <span key={`burbuja-${index}-${i}`} className={styles.burbuja}></span>
            ))}
          </a>
        ))}
      </div>

      <footer className={styles.footerSection}>
        <p>&copy; {new Date().getFullYear()} Peter Aspiazu Dev. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};