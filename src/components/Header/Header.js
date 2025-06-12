"use client";

import { useState } from 'react';
import styles from './Header.module.css';

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    console.log(menuOpen);

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
                            <a className={styles['header__nav--ul-li']} href="#inicio" onClick={handleMenu}><li>Inicio</li></a>
                            <a className={styles['header__nav--ul-li']} href="#proyectos" onClick={handleMenu}><li>Proyectos</li></a>
                            <a className={styles['header__nav--ul-li']} href="#tutoriales" onClick={handleMenu}><li>Tutoriales</li></a>
                            <a className={styles['header__nav--ul-li']} href="#certificados" onClick={handleMenu}><li>Certificados</li></a>
                            <a className={styles['header__nav--ul-li']} href="#contacto" onClick={handleMenu}><li>Contacto</li></a>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
