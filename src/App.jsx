import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
const App = () => {
  return (
    <div className="h-screen bg-[#E6EBE0] text-[#F0ECE5]">
      <Navbar />
      <Home/>
      {/*<About/>*/}
      <Skills/>
      <Work/>
    </div>
  );
};
export default App;
