import React from 'react';
import logo from '@assets/images/logo.png';
import styles from "@CSS/SideNav.module.css";

export default function Logo() {
    return (
        <div className={styles.logoContainer}>
            <img className={styles.logoImg} src={logo} alt="App Logo" />
            <h1 className={styles.logoText}>PLANITY</h1>
        </div>
    );
}
