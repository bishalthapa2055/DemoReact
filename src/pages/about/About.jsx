import ComponentsHeaders from "../../components/ComponentsHeaders";
import "./about.css";

const About = () => {
  return (
    <>
      <ComponentsHeaders title="About Us" image="https://d11airhslbrx5o.cloudfront.net/static/header_bg_1.jpg">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima
        cumque aut? In expedita numquam consectetur non officia iusto."
      </ComponentsHeaders>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section__image">
            <img src="https://d11airhslbrx5o.cloudfront.net/static/about2.jpg" alt="" />
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
            <img src="https://d11airhslbrx5o.cloudfront.net/static/about2.jpg" alt="" />
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
            <img src="https://d11airhslbrx5o.cloudfront.net/static/about3.jpg"alt="" />
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
