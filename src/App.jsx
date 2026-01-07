import Footer from "./Component/Footer";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import PostPropertites from "./pages/PostPropertites";

function App() {


  return (
   <BrowserRouter >
         <div className="min-h-screen flex flex-col z-1 absolute">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PropertyDetails" element={<PropertyDetails/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Sign" element={<Sign/>}></Route>
        <Route path="/PostProperty" element={<PostPropertites/>}></Route>
      </Routes>
       </div>
       <Footer/>
    </BrowserRouter>
  )
}

export default App
