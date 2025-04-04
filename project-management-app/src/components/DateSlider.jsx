import React from 'react';
import styles from '@CSS/Tasks.module.css';
import { useTasks } from '@context/TasksContext';

const DateSlider = ({ selectedDate, onDateChange }) => {
    const {tasks} = useTasks();
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  return (
    <div className={styles.daysContainer}>
      {days.map((day, index) => {
        const dayString = day.toISOString().split('T')[0];
        const isSelected = selectedDate.toISOString().split('T')[0] === dayString;

        const taskCount = tasks.filter(
            (task) => new Date(task.deadline).toISOString().split('T')[0] === dayString
          ).length;

        return (
          <div
            key={index}
            className={`${styles.dayCard} ${isSelected ? styles.selectedDay : ''}`}
            onClick={() => onDateChange(new Date(day))}
          >
            <span className={styles.weekDay}>
              {day.toLocaleDateString('en-US', { weekday: 'short' })}
            </span>
            <div className={styles.deadline}>
                <span className={styles.deadlineDate}>
                {day.toLocaleDateString('en-US', { day: '2-digit' })}
                </span>
                <span className={styles.month}>
                {day.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
            </div>
            <span className={styles.taskCount}>
                {taskCount} task{taskCount !== 1 ? 's' : ''}
                </span>
          </div>
        );
      })}
    </div>
  );
};

export default DateSlider;
