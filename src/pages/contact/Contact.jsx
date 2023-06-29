import "./contact.css";
// import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import ComponentsHeaders from "../../components/ComponentsHeaders";

const Contact = () => {
  return (
    <>
      <ComponentsHeaders title="Contact Us" image="https://d11airhslbrx5o.cloudfront.net/static/header_bg_2.jpg">
        <p>
         You can contact to us through provided links below :
        </p>
      </ComponentsHeaders>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:spport@gmail.com" target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="#">
              <BsMessenger />
            </a>
            <a href="https://wa.me/+0000000000" target="_blank" rel="noreferrer noopener">
              <ImWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
