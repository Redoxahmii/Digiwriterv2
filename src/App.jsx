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
import Error from './pages/Error'
import Article from './pages/Dashboard/Article'
import ImageGenerator from './pages/Dashboard/ImageGenerator'
import Chatbot from './pages/Dashboard/Chatbot'
// eslint-disable-next-line react/prop-types
const App = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className='font-poppins'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<Protected user={user}><Dashboard /></Protected>} >
          <Route path='welcome' element={<Welcome></Welcome>}></Route>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='article' element={<Article />}></Route>
          <Route path='imageGenerator' element={<ImageGenerator />}></Route>
          <Route path='chatbot' element={<Chatbot />}></Route>
        </Route>
      </Routes>
    </div>
  )
}



export default App