import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ContactHero from "./pages/ContactUsPage";
import Navbar from "./pages/partial/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/about-us" element={<HeroSection />} />
        <Route path="/contact" element={<ContactHero />} />
      </Routes>
    </>
  );
}

export default App;