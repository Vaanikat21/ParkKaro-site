import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HowItWorksPage from "./pages/HowItWorksPage";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
