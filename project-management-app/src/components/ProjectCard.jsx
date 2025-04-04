import React, { useState, useEffect } from 'react';
import styles from '@CSS/ProjectCard.module.css';
import { useTasks } from '@context/TasksContext';

const CompletedTasksProgress = ({ projectId }) => {
  const [percentComplete, setPercentComplete] = useState(0);
  const { tasks } = useTasks();

  useEffect(() => {
    const projectTasks = tasks.filter((task) => task.project_id === projectId);
    if (projectTasks.length > 0) {
      const completedTasks = projectTasks.filter((task) => task.status === 'completed').length;
      const totalTasks = projectTasks.length;
      const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
      setPercentComplete(percentage);
    }
  }, [tasks, projectId]);

  return (
    <div className={styles.progressCircle}>
      <svg width="80" height="80" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="#ccc" strokeWidth="10" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#3399FF"
          strokeWidth="10"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset={`${251.2 - (percentComplete / 100) * 251.2}`}
        />
        <text x="50" y="55" textAnchor="middle" fontSize="14" fill="#333">
          {percentComplete}%
        </text>
      </svg>
    </div>
  );
};

const ProjectCard = ({ item, onPress }) => {
  const deadline = item.deadline ? item.deadline.split('T')[0] : 'No deadline';
  const updated_at = item.updated_at.split('T')[0];

  return (
    <div className={`${styles.card} ${item.status === 'completed' ? styles.completed : ''}`} onClick={() => onPress(item)}>
      <div className={styles.cardContent}>
        <div className={styles.textSection}>
          <h3 className={styles.projectTitle}>{item.name}</h3>
          <p className={styles.projectCategory}>{item.category}</p>
          <p className={styles.projectDescription}>{item.description}</p>
          {/* <p className={styles.projectTeam}>Updated: {updated_at}</p> */}
        </div>
        <div className={styles.progressSection}>
          <CompletedTasksProgress projectId={item.id} />
          <p className={styles.deadline}>{item.deadline ? `By ${deadline}` : 'No deadline'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
