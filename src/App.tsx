import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import RvmProduct from './pages/RvmProduct';
import Engineering from './pages/Engineering';
import Sustainability from './pages/Sustainability';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rvm" element={<RvmProduct />} />
          <Route path="engineering" element={<Engineering />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;