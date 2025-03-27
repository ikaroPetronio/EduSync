import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashboardHome from './pages/DashboardHome'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import RegisterClass from './pages/RegisterClass'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/registerclass" element={<RegisterClass />} />
      </Routes>
    </BrowserRouter>
  )
}