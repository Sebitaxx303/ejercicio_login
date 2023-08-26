import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const { register, handleSubmit, formState:{errors} } = useForm()
    const {signup, isAuthenticathed, errors: RegisterErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
      if(isAuthenticathed) navigate('/tasks');
    }, [isAuthenticathed, navigate])

    const onSubmited = handleSubmit( async (values) => {
      signup(values);
    })
  return (
  <div className="flex h-[calc(100vh-100px)] itemas-center justify-center">   
      <div className='bg-zinc-800 max-w-md p-10 rounded-md justify-self-auto'>
          {
            RegisterErrors.map((error, i)=> (
              <div className='bg-red-500 text-white p2' key={i}>
                {error}
                </div>
            ))
          }
            <form onSubmit={onSubmited}>

                <input type="text" className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2' {...register("username", {required: true})} placeholder='username'/>
                {
                  errors.username && <p className='text-red-500'>Username is required </p>
                }
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
   </div>
    
  )
}

export default RegisterPage