import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProjectArticle from "./pages/ProjectArticle/ProjectArticle";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects">
            <Route index element={<Projects />} />
            <Route path=":articleId" element={<ProjectArticle />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
