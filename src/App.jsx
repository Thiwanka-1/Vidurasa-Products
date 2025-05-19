import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Products from './pages/Products';

import Contact from './pages/Contact';
export default function App() {
  return <BrowserRouter>
  
  <Header />
    <Routes>
      <Route path = "/" element = {<Home />} /> {/* done */}
      <Route path = "/about" element = {<About />} /> {/* done */}
      <Route path = "/contact" element = {<Contact />} /> {/* done */}
      <Route path = "/products" element = {<Products />} /> {/* done */}
    </Routes>
    <Footer />
    

  </BrowserRouter>
    
}
