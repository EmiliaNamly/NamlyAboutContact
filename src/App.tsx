import { Route, Routes } from "react-router-dom";
import ContactHero from "./pages/ContactUsPage";
import Navbar from "./pages/partial/Navbar";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";
import PresentPage from "./pages/PresentPage";
import SalePage from "./pages/SalePage";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactHero />} />
        <Route path="/products-page" element={<ProductsPage />} />
        <Route path="/sale-page" element={<SalePage />} />
        <Route path="/presents" element={<PresentPage />} />

      </Routes>
    </>
  );
}

export default App;