import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import {
  Home,
  Blog,
  Recommender,
  Plan,
  NotFound,
  RecommendedSingle,
} from "./page/index";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import Menu from "./components/Menu";
import Single from "./page/Single";
import Auth from "./components/Modal/Auth";

function App() {
  const [isvisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    // Initialize form data here
    // Example: name: '', email: '', etc.
  });

  const handleIsVisible = () => {
    setIsVisible(!isvisible);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    // Example: Submit form data to backend, validate, etc.
    console.log("Form submitted:", formData);
    // Close modal after form submission
    closeModal();
  };

  return (
    <div className="relative App">
      <BrowserRouter>
        <div
          className={`relative ${showModal ? "h-screen overflow-hidden" : ""}`}
        >
          <MobileMenu
            handleModal={handleModal}
            isvisible={isvisible}
            handleIsVisible={handleIsVisible}
          />
          <Menu handleModal={handleModal} handleIsVisible={handleIsVisible} />
          <Auth showModal={showModal} closeModal={closeModal} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/attractions" element={<Recommender />} />
            <Route path="/attractions/:id" element={<RecommendedSingle />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Single />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
