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

// eslint-disable-next-line react/prop-types
export function TasksProvider({ children }){
    const [tasks, setTasks] = useState([]);

    const createTask = async (task) => {
        try {
            console.log('task')
            const res = await createTaksRequest(task)
            console.log(res)
        } catch (error) {
            console.log(error)
        }

    }

    const getTasks = async () =>{
        try {
            const res = await getTasksRequest();
            setTasks(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks
        }}>
            { children }
        </TaskContext.Provider>
    )
}
