import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import AboutUs from './components/aboutus/AboutUs'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'

function App() {
  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/aboutus' element={<AboutUs />}/>
      <Route path='/resume' element={<Resume />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
