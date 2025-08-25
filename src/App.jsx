
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import About from './pages/About'
import Tour from './pages/Tour'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
