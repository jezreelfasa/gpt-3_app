
import Brand from "./components/brand/Brand"
import Cta from './components/cta/Cta'
import  Navbar from "./components/navbar/Navbar"
import Blog from "./containers/blog/Blog"
import Footer from "./containers/footer/Footer"
import Header from "./containers/header/Header"
import Features from "./containers/features/Features"
import Possibility from "./containers/possibility/Possibility"
import WhatGPT3 from './containers/whatGPT3/WhatGPT3'





import "./App.css"
import "./index.css"

function App() {
  return (
    <div clasName="App">
      <div className="gradient__bg ">
        <Navbar />
        <Header />




      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;