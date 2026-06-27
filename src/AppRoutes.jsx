import { Routes, Route } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Packages from './pages/Packages'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/packages" element={<Packages />} />
    </Routes>
  )
}

export default AppRoutes
