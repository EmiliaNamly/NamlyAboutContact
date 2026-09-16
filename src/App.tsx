import { Route, Routes } from "react-router-dom";
import ContactHero from "./pages/ContactUsPage";
import Navbar from "./pages/partial/Navbar";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactHero />} />
      </Routes>
    </>
  );
}

export default App;