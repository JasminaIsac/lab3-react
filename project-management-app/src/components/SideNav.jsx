import Logo from "./Logo";
import MenuNav from "./MenuNav";
import styles from "@CSS/SideNav.module.css";
/*************  ✨ Codeium Command ⭐  *************/
/**
 * SideNav is a functional component that renders the side navigation bar.
 * It includes the Logo and MenuNav components within a container.
 */

/******  d765ed4f-cca7-4790-bef3-34ee739e2f66  *******/
export default function SideNav(){
    return(
        <div className={styles.sideNavContainer}>
            <Logo/>
            <MenuNav/>
        </div>
    );
}