import useCurrentUser from "@context/CurrentUserContext";
import calendarIcon from '@assets/images/calendarIcon.png';
import styles from '@CSS/GreetingNav.module.css';

export default function GreetingNav() {
    const { currentUser } = useCurrentUser();
    return (
        <div className={styles.greetingContainer}>
            <h2 style={{ margin: 0 }}>Hi, {currentUser}</h2>
            <div className={styles.todayDate}>
                <span className={styles.todayDateText}>
                    {new Date().toLocaleString('default', { month: 'long' })} {new Date().getDate()}
                </span>
                <img src={calendarIcon} alt="calendar icon"/>
            </div>
        </div>
    );
}
