import { createContext, useState, useContext } from 'react';
import taskData from '../data/tasks';

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(taskData);

  return (
    <TasksContext.Provider value={{ tasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
