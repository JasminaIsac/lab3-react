import React, { useState, useEffect } from "react";
import { useProjects } from "../context/ProjectsContext";
import ProjectListContainer from "./ProjectListContainer";
import styles from "../CSS/ProjectList.module.css";

const ProjectsList = ({ filters, layoutMode = "grid" }) => {
  const { projects } = useProjects();
  const [sortedProjects, setSortedProjects] = useState([]);

  useEffect(() => {
    let filteredProjects = [...projects];

    if (filters?.status) {
      filteredProjects = filteredProjects.filter(
        (project) => project.status === filters.status
      );
    }

    const sorted = filteredProjects.sort((a, b) => {
      if (a.status === "completed" && b.status !== "completed") return 1;
      if (b.status === "completed" && a.status !== "completed") return -1;
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    setSortedProjects(sorted);
  }, [projects, filters]);

  return (
    <div className={styles.layout}>
      <ProjectListContainer projects={sortedProjects} layoutMode={layoutMode} />
    </div>
  );
};

export default ProjectsList;
