import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import LatestArticle from "./page/LatestArticle";
import { Home } from "./page/index";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <LatestArticle />
      <Footer />
    </div>
  );
}

export default App;
