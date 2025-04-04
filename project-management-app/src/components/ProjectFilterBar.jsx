import styles from "@CSS/ProjectFilterBar.module.css";

export default function ProjectFilterBar({ activeFilter, onFilterChange }) {
    return (
        <div className={styles.filterBar}>
            <button 
                className={!activeFilter ? styles.activeFilter : ""} 
                onClick={() => onFilterChange(null)}
            >
                All Projects
            </button>
            <button 
                className={activeFilter === "new" ? styles.activeFilter : ""} 
                onClick={() => onFilterChange("new")}
            >
                New
            </button>
            <button 
                className={activeFilter === "in-progress" ? styles.activeFilter : ""} 
                onClick={() => onFilterChange("in-progress")}
            >
                In Progress
            </button>
            <button 
                className={activeFilter === "completed" ? styles.activeFilter : ""} 
                onClick={() => onFilterChange("completed")}
            >
                Completed
            </button>
        </div>
    );
}
