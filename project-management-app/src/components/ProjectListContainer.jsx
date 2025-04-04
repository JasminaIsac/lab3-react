import ProjectCard from "../components/ProjectCard";
import styles from "../CSS/ProjectList.module.css";

const ProjectListContainer = ({ projects, layoutMode = "grid" }) => {
  return (
    <div className={layoutMode === "slider" ? styles.projectListContainerSlider : styles.projectListContainerGrid}>
        <ul className={layoutMode === "slider" ? styles.projectListSlider : styles.projectListGrid}>
        {projects.length === 0 ? (
            <p className={styles.noProjects}>No more projects</p>
        ) : (
            projects.map((item) => (
            <ProjectCard key={item.id} item={item} onPress={() => {}} />
            ))
        )}
        </ul>
    </div>
  );
};

export default ProjectListContainer;
