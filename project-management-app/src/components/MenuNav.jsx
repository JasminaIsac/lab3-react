import MenuItem from "./MenuItem";
import styles from "@CSS/SideNav.module.css";

export default function MenuNav() {
    return (
        <div className={styles.menuNavContainer}>
            <MenuItem title="Dashboard" to="/"/>
            <MenuItem title="Projects" to="/projects" />
            <MenuItem title="Tasks" to="/tasks" />
        </div>
    );
}
