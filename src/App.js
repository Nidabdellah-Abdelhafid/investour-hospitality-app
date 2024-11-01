import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Advantage from './pages/Advantage';
import Developement from './pages/Developement';
import Brands from './pages/Brands';
import Work from './pages/Work';

function App() {
  return (
    <Router>
      <div className="App bg-white text-black" style={{ backgroundColor: 'white', color: 'black' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advantage" element={<Advantage />} />
          <Route path="/developement" element={<Developement />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
