import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import AboutMe from "./components/aboutme/AboutMe";
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'

function App() {
  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/aboutme' element={<AboutMe />}/>
      <Route path='/resume' element={<Resume />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<h1>Oops, you've navigated to a page that does not exist!</h1>}/>
    </Routes>
    <Footer />
   </BrowserRouter>
  );
}

export default App;
