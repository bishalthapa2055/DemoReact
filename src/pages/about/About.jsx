import ComponentsHeaders from "../../components/ComponentsHeaders";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
const About = () => {
  return (
    <>
      <ComponentsHeaders title="About Us" image={HeaderImage}>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima
        cumque aut? In expedita numquam consectetur non officia iusto."
      </ComponentsHeaders>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section__image">
            <img src={StoryImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates
              a! Maxime minima cumque aut? In expedita numquam consectetur non
              officia iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates
              a! Maxime minima cumque aut? In expedita numquam consectetur non
              officia iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates
              a!
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section__image">
            <img src={VisionImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates
              a! Maxime minima cumque aut? In expedita numquam consectetur non
              officia iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates
              a! Maxime minima cumque aut? In expedita numquam consectetur non
              officia iusto.
            </p>
            
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section__image">
            <img src={MissionImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates
              a! Maxime minima cumque aut? In expedita numquam consectetur non
              officia iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates
              a! Maxime minima cumque aut? In expedita numquam consectetur non
              officia iusto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates
              a!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
