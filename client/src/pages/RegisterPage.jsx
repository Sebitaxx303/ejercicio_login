import { useForm } from 'react-hook-form'
import { RegisterRequest } from '../api/auth'
const RegisterPage = () => {
    const { register, handleSubmit } = useForm()
  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md justify-self-auto'>
        <form onSubmit={handleSubmit( async (values) => {
            console.log(values);
            const res = await RegisterRequest(values)
            console.log(res)
            })}>

            <input type="text" className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' {...register("username", {required: true})} placeholder='username'/>
            <input type="email" className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' {...register("email", {required: true})} placeholder='email'/>
            <input type="password" className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' {...register("userpassword", {required: true})} placeholder='password'/>
            <button type="submit" className="rounded-full bg-white text-black w-full px-4 py-4 ">Registrarse</button>
        </form>
    </div>
  )
}

export default RegisterPage