import './App.css';
import './assets/css/vendor/plugins.min.css';
import './assets/css/style.min.css';
import './assets/css/responsive.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ProductList from './components/ProductList';

// import './assets/js/vendor/jquery-3.5.1.min.js'
// import './assets/js/vendor/modernizr-3.7.1.min.js'
// import './assets/js/plugins.min.js'
// import './assets/js/main.js'

function App() {
  return (
    <div className="App">
      <div id='main'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:product_name" element={<ProductList />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
