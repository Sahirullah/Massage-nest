import { Routes, Route } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Packages from './pages/Packages'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import DeepTissueMassage from './pages/DeepTissueMassage'
import MobileMassage from './pages/MobileMassage'
import SportsMassage from './pages/SportsMassage'
import CouplesMassage from './pages/CouplesMassage'
import ThaiMassage from './pages/ThaiMassage'
import MaderotherapyMassage from './pages/MaderotherapyMassage'
import RelaxationMassage from './pages/RelaxationMassage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/deep-tissue-massage" element={<DeepTissueMassage />} />
      <Route path="/mobile-massage" element={<MobileMassage />} />
      <Route path="/sports-massage" element={<SportsMassage />} />
      <Route path="/couples-massage" element={<CouplesMassage />} />
      <Route path="/thai-massage" element={<ThaiMassage />} />
      <Route path="/maderotherapy-massage" element={<MaderotherapyMassage />} />
      <Route path="/relaxation-massage" element={<RelaxationMassage />} />
    </Routes>
  )
}

export default AppRoutes
