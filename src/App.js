import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Product from "./pages/product";
import Homepage from "./pages/homepage";
import Productsearch from "./pages/about";
import Contact from "./pages/contact";
import About from "./pages/about";
//Setup Routes
function App() {
  return (
 <BrowserRouter>
 <Navbar/>
 <Routes>
 <Route path="/" element={<Homepage/>} />
 <Route path="/about" element={<About/>} />
 <Route path="/contact" element={<Contact/>} />
  <Route path="/products" element={<Home/>} />
  <Route path="/products/:productID" element={<Product/>}/>
  <Route path="*" element={<h1>Page Not Found</h1>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
