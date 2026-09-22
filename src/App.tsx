import { Route, Routes } from "react-router-dom";
import ContactHero from "./pages/ContactUsPage";
import Navbar from "./pages/partial/Navbar";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactHero />} />
          <Route path="/products-page" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;