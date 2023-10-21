import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/homePage'
import TaskPage from './pages/taskPage'
import TaskFormPage from './pages/taskFormPage'
import ProfilePage from './pages/profilePage'
import ProtectedRoute from './protectedRoute'
import { TasksProvider } from './context/TaskContext'


const App = () => {
  return (
    <>
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
    
            <Route element={<ProtectedRoute/>}>          
              <Route path='/tasks' element={<TaskPage/>} />
              <Route path='/add-task' element={<TaskFormPage/>} />
              <Route path='/tasks/:id' element={<TaskFormPage/>} />
              <Route path='/profile' element={<ProfilePage/>} />
            </Route>
    
          </Routes>
        </BrowserRouter>
      </TasksProvider>

    </AuthProvider>
    </>
  )
}

export default App