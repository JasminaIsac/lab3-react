import styles from "@CSS/NotFound.module.css";
export default function NotFound() {
    return (
        <div className={styles.container}>
            <p className={styles.text404}>404</p>
            <h2 className={styles.notFoundText}>Page not found</h2>
        </div>
    );
}   
