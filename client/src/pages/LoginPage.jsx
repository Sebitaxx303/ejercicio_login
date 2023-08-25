import { useForm } from "react-hook-form"

const LoginPage = () => {

  const { register, handleSubmit, formState: {errors} }= useForm()

  const onSubmited = handleSubmit( async (data) => {
    console.log(data)
  })
  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md justify-self-auto'>
            <form onSubmit={onSubmited}>
                <input type="email" className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' {...register("email", {required: true})} placeholder='email'/>
                {
                  errors.email && <p className='text-red-500'>Email is required </p>
                }
                <input type="password" className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' {...register("userpassword", {required: true})} placeholder='password'/>
                {
                  errors.userpassword && <p className='text-red-500'>password is required </p>
                }
                <button type="submit" className="rounded-full bg-white text-black w-full px-4 py-4 ">Registrarse</button>
            </form>
    </div>
  )
}

export default LoginPage