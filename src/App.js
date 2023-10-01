import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Navbar from "./components/Navbar";
import React from 'react'
import ReactPageScroller from 'react-page-scroller';
import Highlight2 from "./components/Highlight2";


function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="">
        <Hero />
        <Highlight/>
        <Highlight2 />
      </div>
    </div>
  );
}

export default App;
