import './App.css';
import Navbar from './components/Navbar';
import { Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Whatsapp from './components/Whatsapp';
import Connect from './pages/Connect';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Connect" element={<Connect />} />

          </Routes>
        </div>
        <Whatsapp />
        <Footer />
      </div>
    </BrowserRouter> 
  );
}

export default App;