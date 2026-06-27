import { Routes, Route } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Packages from './pages/Packages'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes
