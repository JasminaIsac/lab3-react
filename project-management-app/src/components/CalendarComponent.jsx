import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useTasks } from '@context/TasksContext';
import styles from '@CSS/CalendarComponent.module.css';

const CalendarComponent = ({ selectedDate, onDateChange }) => {
    const { tasks } = useTasks();
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        if (selectedDate) {
            setDate(selectedDate);
        }
    }, [selectedDate]);

    const taskDates = tasks.map(task => 
        new Date(task.deadline).toISOString().split('T')[0]
    );

    const tileClassName = ({ date, view }) => {
        const formattedDate = date.toISOString().split('T')[0]; 
        if (view === 'month' && taskDates.includes(formattedDate)) {
            return styles.taskDay;
        }
        return null;
    };

    return (
        <div className={styles.calendarContainer}>
            <Calendar 
                onChange={onDateChange || setDate} 
                value={date} 
                tileClassName={tileClassName}
                className={styles.reactCalendar}
                next2Label={null}
                prev2Label={null}
            />
        </div>
    );
};

export default CalendarComponent;
