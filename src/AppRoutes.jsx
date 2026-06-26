import { Routes, Route } from 'react-router-dom'
import App from './App'
import About from './pages/About'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes
