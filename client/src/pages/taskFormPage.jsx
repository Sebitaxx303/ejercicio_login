import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext'


const TaskFormPage = () => {

    const {register, handleSubmit} = useForm();
    const { createTask } = useTasks();

    const onSubmit = handleSubmit((data) => {
      createTask(data);
    })

  return (
    <>
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input type="text" className="min-w-full bg-zinc-700 text-white px-4 py-2 rounded-md" placeholder="title"{...register("title")}/>
          <input type="text" rows="3" className="min-w-full bg-zinc-700 text-white px-4 py-2 rounded-md"{...register("descrp")}/>
          <button>
            save
          </button>
        </form>
      </div>
    </>
  )
}

export default TaskFormPage