import "./styles/App.css";
import "./styles/Main.css";
import "./styles/Sub.css";
import Login from "./components/main/auth/Login"
import Signup from "./components/main/auth/Signup"
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import Header from "./components/main/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Archives from "./components/main/Archives";
import Career from "./components/main/Career";
import Events from "./components/main/Events";
import Contact from "./components/main/Contact"
import myStore from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/archives" element={<Archives />}></Route>
            <Route path="/career" element={<Career />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
