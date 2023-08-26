import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet } from 'react-router-dom'
const ProtectedRoute = () => {
  const {user, isAuthenticathed} = useAuth();
  console.log(user, isAuthenticathed)
  if(!isAuthenticathed) return <Navigate to= '/login' replace/>
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoute