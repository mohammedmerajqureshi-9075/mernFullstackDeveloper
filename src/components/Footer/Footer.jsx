import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-main'>
      <footer>
      <div className="footer-head-1">
        <h1>Meraj Qureshi</h1>
      </div>
      <div className="detail-footer">
        <ul className='footer-list'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-icons">
        <h1><FaFacebook/></h1>
        <h1><FaTwitter/></h1>
        <h1><FaLinkedin/></h1>
        <h1><FaInstagram/></h1>
      </div>
      <div className="compyright">
        <h3>&copy; 2024 All Right Reserved</h3>
      </div>
      </footer>
    </div>
  )
}

export default Footer
