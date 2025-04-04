import { useState, useEffect } from 'react';
import { useTasks } from '@context/TasksContext';
import Button from './Button';
import styles from '@CSS/ProgressBanner.module.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useRouterContext } from '@context/RouterContext';
import coffeeImage from '@assets/images/fast-food-drink-coffee-illustration-3d-png.png';


const ProgressBanner = () => {
  const { push } = useRouterContext();
  const { tasks } = useTasks();
  const [percentComplete, setPercentComplete] = useState(0);
  const [todayTasks, setTodayTasks] = useState([]);

  useEffect(() => {
    if (tasks.length > 0) {
      const today = new Date().toISOString().split('T')[0];
      const taskForToday = tasks.filter(
        (task) => new Date(task.deadline).toISOString().split('T')[0] === today
      );
      setTodayTasks(taskForToday);
  
      const completedTasks = taskForToday.filter((task) => task.status === 'completed').length;
      const totalTasks = taskForToday.length;
      const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
      setPercentComplete(percentage);
    }
  }, [tasks]);
  
  const handleButtonClick = () => {
    console.log(`button pressed`);
    push('/tasks');
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {todayTasks.length === 0 ? (
          <>
            <h1 className={styles.title}>No tasks for today!</h1>
            <p className={styles.subtitle}>Enjoy your free time!</p>
          </>
        ) : (
          <>
            {percentComplete === 0 && <h2 className={styles.title}>Time to start your daily tasks!</h2>}
            {percentComplete > 0 && percentComplete <= 30 && <h2 className={styles.title}>Good Start! You’re making progress!</h2>}
            {percentComplete > 30 && percentComplete < 75 && <h2 className={styles.title}>Halfway there! Keep up the good work!</h2>}
            {percentComplete >= 75 && percentComplete < 100 && <h2 className={styles.title}>Almost done! Keep pushing!</h2>}
            {percentComplete === 100 && <h2 className={styles.title}>Congratulations! All tasks are completed!</h2>}

            {percentComplete === 0 ? (
              <p className={styles.subtitle}>Let's get started! Your tasks are waiting!</p>
            ) : percentComplete < 100 ? (
              <p className={styles.subtitle}>Keep going! You’ve got this!</p>
            ) : (
              <p className={styles.subtitle}>Great job! Take a break!</p>
            )}
          </>
        )}

        <Button title={'See all your tasks'} onClick={handleButtonClick} ></Button>
      </div>

      <div className={styles.progressContainer}>
        {todayTasks.length > 0 ? (
          <CircularProgressbar 
            value={percentComplete}
            maxValue={100}
            text={`${percentComplete}%`}
            styles={buildStyles({
              pathColor: "#fff",
              trailColor: "#283271",
              textColor: "#fff",
              strokeLinecap: "round",
            })}
          />
        ) : (
          <img 
            src={coffeeImage}
            alt="Enjoy your coffee!"
            className={styles.coffeeImage}
          />
        )}
      </div>

    </div>
  );
};

export default ProgressBanner;
