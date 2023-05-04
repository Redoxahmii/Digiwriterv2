import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import Welcome from './pages/Dashboard/Welcome'
const App = () => {
  const location = useLocation()
  // Hide the Navbar component on the dashboard route
  // const hideNavbar = location.pathname.startsWith('/dashboard')
  return (
    <>
      {/* {!hideNavbar && <Navbar />} */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} >
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/dashboard/welcome" element={<Welcome />} />
          <Route path="/dashboard/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  )
}

export default App