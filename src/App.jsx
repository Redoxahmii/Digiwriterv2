import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import Welcome from './pages/Dashboard/Welcome'
import { useContext } from 'react'
import { AuthContext } from './utills/AuthContext'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<PrivateRoutes />} />
      </Routes>
    </>
  )
}

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <Dashboard>
      <PrivateRoute path="/welcome" element={<Welcome />} />
      <PrivateRoute path="/signup" element={<Signup />} />
    </Dashboard>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default App