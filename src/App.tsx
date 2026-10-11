import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
export default function App(){
  return (<BrowserRouter><Routes><Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="services" element={<Services/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="terms" element={<Terms/>}/>
    <Route path="*" element={<div className="section text-center"><h1 className="text-3xl font-extrabold text-slate-900">Page not found</h1><a href="/" className="btn-primary mt-4">Go home</a></div>}/>
  </Route></Routes></BrowserRouter>);
}
