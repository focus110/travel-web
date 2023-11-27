import "./App.css";
import Footer from "./components/Footer";
import LatestArticle from "./page/LatestArticle";
import { Home } from "./page/index";

function App() {
  return (
    <div className="App">
      <Home />
      <LatestArticle />
      <Footer />
    </div>
  );
}

export default App;
