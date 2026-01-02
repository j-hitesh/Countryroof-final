import Footer from "./Component/Footer";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
   <BrowserRouter >

      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App
