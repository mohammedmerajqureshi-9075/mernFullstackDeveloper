import Hero from "../components/Herosection/Hero"
import About from './About'
import Contact from "./Contact"
import Skill from "./Skill"
import Work from "./Work"


const HomePage = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Contact/>
    </div>
  )
}

export default HomePage
