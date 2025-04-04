import React, { useState, useEffect } from 'react';
import CalendarComponent from '@/components/CalendarComponent';
import TaskList from '@/components/TasksList';
import 'react-calendar/dist/Calendar.css';
import styles from '@CSS/Tasks.module.css';
import DateSlider from '@/components/DateSlider';

const Tasks = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    return (
      <div className={styles.mainContainer}>
        <div className={styles.dateContainer}>
            <div>
                <h2>This week's tasks:</h2>
            <DateSlider selectedDate={selectedDate} onDateChange={setSelectedDate} />
            </div>
            <CalendarComponent selectedDate={selectedDate} onDateChange={setSelectedDate} />
        </div>
        <h2 className={styles.subHeader}>Daily Tasks</h2>
        <TaskList filters={{ deadline: selectedDate.toISOString().split('T')[0] }} />
      </div>
    );
  };
  
  export default Tasks;