import ContactEmail from '../componentsReuse/ContactEmail'
import ContactForm from '../componentsReuse/ContactForm'
import ContactInstagram from '../componentsReuse/ContactInstagram'
import ContactWhatsapp from '../componentsReuse/ContactWhatsapp'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-heading">
        <h1>Get in Touch</h1>
      </div>
    <div className="cont-form">
    <ContactForm/>
    </div>
    <div className="cont-whatsapp">
      <ContactWhatsapp/>
    </div>
    <div className="cont-email">
      <ContactEmail/>
    </div>
    <div className="cont-instagram">
      <ContactInstagram/>
    </div>
    
    </div>
  )
}

export default Contact
