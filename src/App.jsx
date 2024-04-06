import FooterComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/Home.page";
import FAQPage from "./pages/FAQ.page";
import AboutUsPage from "./pages/AboutUs.page";
import ContactUsPage from "./pages/ContactUs.page";
import CoinPage from "./pages/Coin.page";
function App() {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent/>
      {/* Wrapper */}
      <div className="wrapper">
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/coin/:id" element={<CoinPage/>} />
      <Route path="/faq" element={<FAQPage/>} />
      <Route path="/about-us" element={<AboutUsPage/>} />
      <Route path="/contact-us" element={<ContactUsPage/>} />
      </Routes>
      </div>      
      {/* Footer */}
      <FooterComponent/>
    </div>
  );
}

export default App;
