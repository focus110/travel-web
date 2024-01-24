import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Home, Blog, Plan, NotFound } from "./page/index";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import Menu from "./components/Menu";
import Single from "./page/Single";

function App() {
  const [isvisible, setIsVisible] = useState(false);

  const handleIsVisible = () => {
    setIsVisible(!isvisible);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <MobileMenu isvisible={isvisible} handleIsVisible={handleIsVisible} />
        <Menu handleIsVisible={handleIsVisible} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Single />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
