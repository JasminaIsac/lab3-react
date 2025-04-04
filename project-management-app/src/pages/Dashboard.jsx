import GreetingNav from "@components/GreetingNav";
import ProgressBanner from "@components/ProgressBanner";
import styles from "@CSS/Dashboard.module.css";
import { ProjectsProvider } from '@context/ProjectsContext';
import { TasksProvider } from '@context/TasksContext';
import { UsersProvider } from '@context/UsersContext';
import TaskList from "@components/TasksList";
import ProjectsList from "@components/ProjectList";
// import CalendarComponent from '@components/CalendarComponent';

export default function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>
            <ProjectsProvider>
            <UsersProvider>
            <TasksProvider>
                <div className={styles.greeting}>
                    <GreetingNav/>
                </div>
                <div className={styles.banner}>
                    <ProgressBanner/>
                    {/* <div className={styles.calendar}>
                        <CalendarComponent/>
                    </div> */}
                </div>
                <div className={styles.projects}>
                    <h2 className={styles.title}>Your projects</h2>
                    <ProjectsList layoutMode="slider" />
                </div>

                <div className={styles.tasks}>
                    <div className={styles.todayTasks}>
                        <h2>Today's tasks:</h2>
                        <TaskList filters={{ deadline: new Date().toISOString().split('T')[0] }}></TaskList>
                    </div>
                    <div className={styles.urgentTasks}>
                        <h2>High priority tasks:</h2>
                        <TaskList filters={{ priority: "high" }}></TaskList>
                    </div>
                </div>
            </TasksProvider>
            </UsersProvider>
            </ProjectsProvider>
        </div>
    );
}   