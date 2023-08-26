import {createContext, useState, useContext, useEffect} from 'react';
import { LoginRequest, RegisterRequest } from '../api/auth';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
} 

 export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticathed, setIsAuthenticathed] = useState(false);
    const [errors , setErrors] = useState([]);

    const signup = async (user)=> {
        try {
            const res = await RegisterRequest (user)
            console.log(res)
            setUser(res.data);
            setIsAuthenticathed(true);
        } catch (error) {
            setErrors(error.response.data)
            console.log((error))
        }
    }

    const signin = async (user) => {
        try {
            const res = await LoginRequest(user);
            console.log(res.data);
            setIsAuthenticathed(true);
            setUser(res.data)
        } catch (error) {
            console.log(error)
            if(Array.isArray(error.response.data)){
                setErrors(error.data.message)
            }
            setErrors([error.response.data.message]);
        }
    }
    useEffect(() => {
        if(errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            return () => clearTimeout(timer)
        }
    }, [errors])
    return(
        <AuthContext.Provider value={{
            signup,
            signin,
            user, 
            isAuthenticathed,
            errors
         }}>
           {children}
         </AuthContext.Provider>

        )
          
}

