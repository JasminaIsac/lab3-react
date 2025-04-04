import { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import styles from '../CSS/TasksList.module.css';
import { useTasks } from '../context/TasksContext';

const TaskList = ({ filters }) => {
    const { tasks } = useTasks();
    const [currentTasks, setCurrentTasks] = useState([]);

    useEffect(() => {
        let filteredTasks = tasks;

        if (filters?.projectId) {
            filteredTasks = filteredTasks.filter(task => task.project_id === filters.projectId);
        }
        
        if (filters?.status) {
            filteredTasks = filteredTasks.filter(task => task.status === filters.status);
        }
        
        if (filters?.priority) {
            filteredTasks = filteredTasks.filter(task => task.priority?.toLowerCase() === filters.priority.toLowerCase());
    
            if (filters.priority.toLowerCase() === 'high') {
                filteredTasks = filteredTasks.filter(task => task.status.toLowerCase() !== 'completed');
            }
        }
        
        if (filters?.deadline) {
            filteredTasks = filteredTasks.filter(task => {
                const taskDeadline = new Date(task.deadline);
                return taskDeadline.toISOString().split('T')[0] === filters.deadline;
            });
        }

        filteredTasks.sort((a, b) => {
            const statusOrder = {
                'in progress': 1,
                'to check': 2,
                'new': 3,
                'returned': 4,
                'completed': 5
            };
        
            const statusA = statusOrder[a.status?.toLowerCase()] || 6;
            const statusB = statusOrder[b.status?.toLowerCase()] || 6;
        
            if (statusA !== statusB) {
                return statusA - statusB;
            }
        
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            const priorityA = priorityOrder[a.priority?.toLowerCase()] || 4;
            const priorityB = priorityOrder[b.priority?.toLowerCase()] || 4;
        
            if (priorityA !== priorityB) {
                return priorityA - priorityB;
            }
        
            return new Date(a.deadline) - new Date(b.deadline);
        });
        
        setCurrentTasks(filteredTasks);
    }, [tasks, filters]);

    return (
        <div className={styles.taskList}>
            {currentTasks.length > 0 ? (
                currentTasks.map((item) => <TaskCard key={item.id} item={item} />)
            ) : (
                <div className={styles.emptyContainer}>
                    <p className={styles.emptyText}>No tasks</p>
                </div>
            )}
        </div>
    );
};

export default TaskList;
