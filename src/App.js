import "./styles/App.css";
import "./styles/Main.css";
import "./styles/Sub.css";
import Home from "./components/Main/Home";
import Footer from "./components/Main/Footer";
import Header from "./components/Main/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archives from "./components/Main/Archives";
import Career from "./components/Main/Career";
import Events from "./components/Main/Events";
import More from "./components/Main/More";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/archives" element={<Archives />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/more" element={<More />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
