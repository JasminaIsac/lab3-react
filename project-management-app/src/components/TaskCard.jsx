import React from 'react';
import { useProjects } from '../context/ProjectsContext';
import { useUsers } from '../context/UsersContext';
import styles from '../CSS/TaskCard.module.css';

const TaskCard = ({ item }) => {
  const { projects } = useProjects();
  const { users } = useUsers();

  const deadline = item.deadline ? item.deadline.split('T')[0] : 'No deadline';

  const getUserName = (userId) =>
    users.find((u) => u.id === userId)?.name || 'Unknown user';

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-CA', { month: 'short' });
    const year = date.getFullYear();
    return { day, month, year };
  };

  const { day, month, year } = formatDate(deadline);

  const getProjectName = (projectId) => {    
    return projects.find((p) => p.id === projectId)?.name || 'Unknown Project';
  }

  return (
    <div className={`${styles.card} ${item.status === 'completed' && styles.completedCard}`}>
      <div className={styles.cardHeader}>
        <div className={styles.priorityStatusContainer}>
          <span className={`${styles.label} ${styles[item.priority.toLowerCase()]}`}>{item.priority}</span>
          <span className={`${styles.statusLabel} ${item.status ? styles[item.status.replace(/\s/g, '')] : ''}`}>● {item.status}</span>
        </div>
        <span className={styles.developerName}>{getUserName(item.assigned_to)}</span>
      </div>
      <div className={`${styles.cardContent} ${item.status === 'completed' && styles.completedCard}`}>
        <div className={styles.textSection}>
          <h3 className={styles.taskTitle}>{item.title}</h3>
          <p className={styles.taskProject}>{getProjectName(item.project_id)}</p>
          {item.description && <p className={styles.taskDescription}>{item.description}</p>}
        </div>
        <div className={styles.infoSection}>
          <div>
            <span className={`${styles.deadline} ${styles.deadlineDate}`}>{day}</span>
            <span className={styles.deadline}>{month}, {year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
