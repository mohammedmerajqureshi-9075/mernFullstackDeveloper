import BasicCard from "../componentsReuse/BasicCard1";
import BasicCard2 from "../componentsReuse/BasicCard2";
import BasicCard3 from "../componentsReuse/BasicCard3";
import BasicCard4 from "../componentsReuse/BasicCard4";
import BasicCard5 from "../componentsReuse/BasicCard5";
import BasicCard6 from "../componentsReuse/BasicCard6";
import "./Skill.css";
const Skill = () => {
  return (
    <div className="skill-container">
      <div className="skill-section">
        <div className="skills-head-1">
          <h1>Skills & Expertise</h1>
        </div>
        <div className="skill-para">
          <p>
            As a MERN Stack Developer, I have experience working with both
            front-end and back-end technologies, building robust and scalable
            web applications. Below are the core skills I have developed:
          </p>
        </div>
        <div className="skill-cards">
          <div className="skill-car-1">
            <BasicCard />
          </div>
          <div className="skill-car-1">
            <BasicCard2 />
          </div>
          <div className="skill-car-1">
            <BasicCard3 />
          </div>
          <div className="skill-car-1">
            <BasicCard4 />
          </div>
          <div className="skill-car-1">
            <BasicCard5 />
          </div>
          <div className="skill-car-1">
            <BasicCard6 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
