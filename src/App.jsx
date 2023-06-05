import "./styles/App.css";
import "./styles/Main.css";
import "./styles/Sub.css";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archives from "./components/main/Archives";
import Career from "./components/main/Career";
import Events from "./components/main/Events";
import More from "./components/main/More";

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
