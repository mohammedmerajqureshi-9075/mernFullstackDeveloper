import "./Hero.css";
import img from "../../assets/images/pngtree-3d-illustration-avatar-profile-man-png-image_9945214.png";
import { Link } from "react-router-dom";
import resume from './web developer.pdf'
const Hero = () => {
  return (
    <div className="hero">
      <div className="main">
        <div className="ph">
        <div className="user-photo">
          <img src={img} className="img-1" alt="user" />
        </div>
        </div>

        <div className="user-detail">
          <div className="detail-head-1">
            <h3>Hello, I'm</h3>
          </div>
          <div className="user-name">
            <h1>Meraj Qureshi</h1>
          </div>
          <div className="detail-head-2">
            <h3>Mern Full-Stack Developer</h3>
          </div>
          <div className="btns">
            <a href={resume} download="Blue Simple Professional CV Resume.pdf">
              <button>Download CV</button>
            </a>
            <button>
              <Link to="/about">About</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
