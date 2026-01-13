import Footer from "./Component/Footer";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import PostPropertites from "./pages/PostPropertites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Termscondition from "./pages/Termscondition";
import Devloper from "./pages/Devloper";

function App() {


  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Sign" element={<Sign />}></Route>
        <Route path="/PostProperty" element={<PostPropertites />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/Termscondition" element={<Termscondition />}></Route>
        <Route path="/Devloper" element={<Devloper />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
