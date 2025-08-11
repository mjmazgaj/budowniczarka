import "./contact.css";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact-title_text">KONTAKT</h2>
      <div className="contact-socialmedia_container">
        <div className="contact-socialmedia_item">
          <FaInstagram size={70} />
          <h3>INSTAGRAM</h3>
          <p>@budowniczarka</p>
        </div>
        <div className="contact-socialmedia_item">
          <FaTiktok size={70} />
          <h3>TIK TOK</h3>
          <p>@budowniczarka_</p>
        </div>
        <div className="contact-socialmedia_item">
          <TiMessageTyping size={70} />
          <h3>E-MAIL</h3>
          <p>budowniczarka@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
