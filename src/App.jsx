import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Work from "./components/Work";
const App = () => {
  return (
    <div className="h-max bg-[#ff2121] text-[#F0ECE5] scroll-smooth">
      <Navbar/>
      <Home/>
      {/*<About/>*/}
      <Skills/>
      <Work/>
    </div>
  );
};
export default App;
