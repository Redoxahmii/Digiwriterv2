import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import Welcome from './pages/Dashboard/Welcome'
import { useContext } from 'react'
import { AuthContext } from './utills/AuthContext'
import Protected from './utills/Protected'
// eslint-disable-next-line react/prop-types
const App = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<Protected user={user}> <Dashboard /> </Protected>} >
          <Route path='welcome' element={<Welcome></Welcome>}></Route>
          <Route path='signup' element={<Signup />}></Route>
        </Route>
      </Routes>
    </>
  )
}



export default App