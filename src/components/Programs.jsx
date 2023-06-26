import { AiOutlineCrown } from "react-icons/ai";
import Sectionhead from "./Sectionhead";
import { programs } from "../../data.js";
import Cards from "../pages/UI/Cards";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <>
      <section className="programs">
        <div className="container programs__container">
          <Sectionhead icons={<AiOutlineCrown />} title="Programs" />
          <div className="programs__wrapper">
            {programs.map(({ id, icons, title, info, path }) => {
              return (
                <>
                  <Cards className="programs__program" key={id}>
                    <span>{icons}</span>
                    <h4>{title}</h4>
                    <small>{info}</small>
                    <p>
                      <Link to={path} className="btn sm">
                        Learn More
                      </Link>
                    </p>
                  </Cards>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
