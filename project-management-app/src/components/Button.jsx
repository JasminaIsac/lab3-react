import styles from "@CSS/Button.module.css";
export default function Button({title, onClick}) {
    return (
        <button className={styles.button} onClick={onClick}><p className={styles.buttonText}>{title}</p></button>    
    );
}   