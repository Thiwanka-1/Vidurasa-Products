import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import TopBar from './components/Topbar';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/projects';
import Contact from './pages/Contact';
import Vacancies from './pages/Vacancies';
export default function App() {
  return <BrowserRouter>
  
  <Header />
    <Routes>
      <Route path = "/" element = {<Home />} /> {/* done */}
      <Route path = "/about" element = {<About />} /> {/* done */}
      <Route path = "/services" element = {<Services />} /> {/* done */}
      <Route path = "/projects" element = {<Projects />} /> {/* done */}
      <Route path = "/contact" element = {<Contact />} /> {/* done */}
      <Route path = "/vacancies" element = {<Vacancies />} /> {/* done */}
    </Routes>
    <Footer />
    

  </BrowserRouter>
    
}
