import React from 'react';
import SideNav from "@components/SideNav";
import Dashboard from "@pages/Dashboard";
import Projects from "@pages/Projects";
import Tasks from "@pages/Tasks";
import { UserProvider } from"@context/CurrentUserContext";
import { ProjectsProvider } from '@context/ProjectsContext';
import { TasksProvider } from '@context/TasksContext';
import { UsersProvider } from '@context/UsersContext';
import { Router, Routes, Route } from "@navigation";

function App() {
    return <>
    <UserProvider>
    <ProjectsProvider>
            <UsersProvider>
                <TasksProvider>
                    <Router>
                        <SideNav/>
                        <Routes>
                            <Route path="/">
                                <Dashboard />
                            </Route>
                            <Route path="/projects">
                                <Projects />
                            </Route>
                            <Route path="/tasks">
                                <Tasks />
                            </Route>
                        </Routes>
                        {/* <Footer /> */}
                    </Router>
                </TasksProvider>
            </UsersProvider>
        </ProjectsProvider> 
    </UserProvider>
    </>;
}

export default App;
