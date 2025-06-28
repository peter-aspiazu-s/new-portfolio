"use client";

import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        // Lista de IDs de las secciones a observar
        const sections = [
            'inicio',
            'courses',
            'proyectos',
            'tutoriales',
            'certificados',
            'contacto'
        ];

        // Opciones para el Intersection Observer
        // root: null significa que el viewport es el elemento raíz.
        // rootMargin: '0px 0px -50% 0px' significa que el observer se activará cuando
        // la sección cruce la mitad inferior de la pantalla (50% de arriba).
        // threshold: 0 significa que se activa tan pronto como el elemento entra o sale del root.
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50% 0px', // Ajusta este valor si necesitas que se active antes o después
            threshold: 0.01, // Se activa cuando al menos el 1% del elemento es visible
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Si la sección está visible, actualiza el estado de la sección activa
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observa cada sección
        sections.forEach(id => {
            const targetElement = document.getElementById(id);
            if (targetElement) {
                observer.observe(targetElement);
            }
        });

        // Función de limpieza: desconecta el observador cuando el componente se desmonte
        return () => {
            sections.forEach(id => {
                const targetElement = document.getElementById(id);
                if (targetElement) {
                    observer.unobserve(targetElement);
                }
            });
            observer.disconnect();
        };
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__logo}><span>Peter Aspiazu</span> Dev</div>
                <div className={styles.header__hambur}>

                    <div className={`${styles['header__menu-btn']} ${menuOpen ? styles['menu-open'] : ''}`} onClick={handleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <nav  className={`${styles.header__nav} ${menuOpen ? styles['nav-open'] : ''}`}>
                        <ul className={styles['header__nav--ul']}>
                            <a className={`${styles['header__nav--ul-li']} ${activeSection === 'inicio' ? styles['active-link'] : ''}`} href="#inicio" onClick={handleMenu}><li>Inicio</li></a>
                            <a className={`${styles['header__nav--ul-li']} ${activeSection === 'courses' ? styles['active-link'] : ''}`} href="#courses" onClick={handleMenu}><li>Cursos</li></a>
                            <a className={`${styles['header__nav--ul-li']} ${activeSection === 'proyectos' ? styles['active-link'] : ''}`} href="#proyectos" onClick={handleMenu}><li>Proyectos</li></a>
                            <a className={`${styles['header__nav--ul-li']} ${activeSection === 'tutoriales' ? styles['active-link'] : ''}`} href="#tutoriales" onClick={handleMenu}><li>Tutoriales</li></a>
                            <a className={`${styles['header__nav--ul-li']} ${activeSection === 'certificados' ? styles['active-link'] : ''}`} href="#certificados" onClick={handleMenu}><li>Certificados</li></a>
                            <a className={`${styles['header__nav--ul-li']} ${activeSection === 'contacto' ? styles['active-link'] : ''}`} href="#contacto" onClick={handleMenu}><li>Contacto</li></a>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
