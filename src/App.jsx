import HomePage from "./pages/HomePage"
import './App.css'
import Nav from "./components/Navbar/Nav"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Skill from "./pages/Skill"
import Work from './pages/Work'
import ContactForm from "./pages/Contact"
const App = () => {
  return (
    <div>
       <Nav/>
      <Routes>
        <Route path="/" element={ <HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
