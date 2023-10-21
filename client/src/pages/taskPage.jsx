import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"


const TaskPage = () => {
 const { getTasks,tasks } = useTasks()

 useEffect(() => {
  getTasks()
 },[])
  return (
    <div>
      <h1>tareas</h1>
      {
        tasks.map(task =>(
          <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.descrp}</p>
            <p>{task.tdate}</p>

          </div>
        ))
      }
    </div>
  )
}

export default TaskPage