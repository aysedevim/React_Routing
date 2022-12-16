import Layout from "./components/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout/>
        <Routes>
        <Route path="/" element={<Home/>} ></Route> 
        <Route path="/home" element={<Home/>} ></Route> 
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="*" element={<NotFound/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
