import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Library from "./pages/Library";
import Documentation from "./components/subpages/Documentation";
import About from "./pages/About";
import Opendata from "./components/subpages/Opendata";
import Declaration from "./components/subpages/Declaration";

import "./styles/App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/library" element={<Library />}>
            <Route path="documentation" element={<Documentation />} />
            <Route path="opendata" element={<Opendata />} />
            <Route path="declaration" element={<Declaration />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
