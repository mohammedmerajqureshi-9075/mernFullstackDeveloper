import { useEffect } from "react";
import ActionAreaCard from "../componentsReuse/ActionAreaCard";
import ActionAreaCard1 from '../componentsReuse/ActionAreaCard1';
import ActionAreaCard2 from '../componentsReuse/ActionAreaCard2';
import ActionAreaCard3 from '../componentsReuse/ActionAreaCard3';
import ActionAreaCard4 from '../componentsReuse/ActionAreaCard4'
import ActionAreaCard5 from '../componentsReuse/ActionAreaCard5'
import "./About.css";

const About = () => {

  useEffect(() => {
    const revealElements = document.querySelectorAll('.card-reveal');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add the visible class when the element is in view
          observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Observe each card
    revealElements.forEach(element => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="about-container">
      <div className="main-about">
        <div className="about-head-1">
          <h1>About Me</h1>
        </div>
        <div className="about-head-2">
          <h2>Hi, I'm Meraj Qureshi</h2>
        </div>
        <div className="about-para-1">
          I'm a passionate MERN stack developer who loves
          building scalable, dynamic, and responsive web applications. With a
          strong foundation in MongoDB, Express.js, React, and Node.js, I create
          full-stack solutions that provide seamless user experiences and robust
          functionality.
        </div>
        <div className="cards">
          <div className="card-1 card-reveal"><ActionAreaCard/></div>
          <div className="card-2 card-reveal"><ActionAreaCard1/></div>
          <div className="card-3 card-reveal"><ActionAreaCard2/></div>
          <div className="card4 card-reveal"><ActionAreaCard3/></div>
          <div className="card5 card-reveal"><ActionAreaCard4/></div>
          <div className="card6 card-reveal"><ActionAreaCard5/></div>
        </div>
      </div>
    </div>
  );
};

export default About;
