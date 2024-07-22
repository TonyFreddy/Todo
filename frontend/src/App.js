import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import  Footer  from "./components/footer/Footer";
import About from "./components/about/About";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Signup from "./components/signup/Signup";
import SignIn from "./components/signup/Signin";
import Todo from "./components/todo/Todo";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;