import { useState } from "react";
import ProjectsList from "@/components/ProjectList";
import ProjectFilterBar from "@/components/ProjectFilterBar";
import styles from "@CSS/Projects.module.css";

export default function Projects() {
    const [filter, setFilter] = useState(null);

    return (
        <div className={styles.mainContainer}>
            <h2>Projects</h2>
            <ProjectFilterBar activeFilter={filter} onFilterChange={setFilter} />
            <ProjectsList filters={{ status: filter }} layoutMode="grid" />
        </div>
    );
}   