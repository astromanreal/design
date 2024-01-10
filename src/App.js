import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./Components/Pages/Home";
import Missions from "./Components/Mission/Missions";
import Explore from "./Components/Explore/Explore";
import Nothing from "./Components/Pages/Nothing";
import Footer from "./Components/Elements/Footer";
import Navbar1 from "./Components/Elements/Navbar1";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/Pages/About";
import Connect from "./Components/Connect/Connect";
import Navbar4 from "./Components/Elements/Navbar4";
import Media from "./Components/Media/Media";

import Series from "./Components/Pages/Series";
import Rocket from "./Components/Pages/Rocket";
import Products from "./Components/Pages/Products";

import Payment from "./Components/Payments/Payment";
import Testing from "./Components/Testing/Testing";
import Parasnath from "./Components/Parasnath/Parasnath";
import Lost from "./Components/Testing/Lost";

function App() {
  return (
    <>
   <Navbar1 />
      <Navbar4 />

    <h1>Aman you are gay<h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mission" element={<Missions />} />
        <Route path="explore" element={<Explore />} />
        <Route path="blog" element={<Blogs />} />
        <Route path="media" element={<Media />} />
        <Route path="about" element={<About />} />
        <Route path="connect" element={<Connect />} />
        <Route path="*" element={<Nothing />} />

        <Route path="rocket" element={<Rocket />} />
        <Route path="series" element={<Series />} />
        <Route path="product" element={<Products />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/parasnath" element={<Parasnath />} />
      </Routes>

      <a className="back-to-top" href="#top">
        <button className="back-to-top-btn">Back to top</button>
      </a>
      <Footer />
  
  
    
    </>
  );
}

export default App;
