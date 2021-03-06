import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from './components/Navbar/Navbar'
import "./App.css";
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div>
      <NavBar/>
        <Route exact path="/jp-portfolio" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </Router>
  );
}

export default App;