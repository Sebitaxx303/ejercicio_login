import { createContext, useContext, useState } from "react";
import { createTaksRequest, getTasksRequest } from '../api/task.js' 

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context){
        throw new Error('useTasks must be used within a TasksProvider');
    }

    return context;
}

export function TasksProvider({ children }){
    const [tasks, setTasks] = useState([]);

    const getTasks = async () =>{
        try {
            const res = await getTasksRequest();
            setTasks(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const createTask = async (task) => {
        console.log('task');
        const res = await createTaksRequest(task)
        console.log(res.data)
    }

    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks
        }}>
            {children}
        </TaskContext.Provider>
    )
}
