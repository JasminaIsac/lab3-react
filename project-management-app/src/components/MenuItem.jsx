import { Link } from "@/navigation/Link";
import { useRouterContext } from "@context/RouterContext";
import styles from "@CSS/SideNav.module.css";

export default function MenuItem({ title, to, isActive }) {
        const { location } = useRouterContext();
        const active = location === to || isActive;
    return (
        <div className={styles.menuItemContainer}>
            <div className={`${styles.menuRect} ${active ? styles.activeRect : ''}`}></div>
            <Link className={`${styles.menuItem} ${active ? styles.active : ''}`} to={to}>
                {title}
            </Link>
        </div>
    );
}
