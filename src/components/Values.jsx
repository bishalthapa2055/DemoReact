
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../../data.js";
import Sectionhead from "./Sectionhead";
import Cards from "../pages/UI/Cards";

const Values = () => {
  return (
    <>
      <section className="values">
        <div className="container values__container">
          <div className="values__left">
            <div className="values__image">
              <img src="https://d11airhslbrx5o.cloudfront.net/static/values.jpg" alt="Vlaues IMages" />
            </div>
          </div>
          <div className="values__right">
            <Sectionhead icons={<GiCutDiamond />} title="Values" />
            <p>
              Lorem Ipsum dolor sit amet consecteture , adipisicing
              elit.Official lauch football ill be launched in the official
              tournament.
            </p>
            <div className="values__wrapper">
                {
                    values.map(({id, icon , title , desc}) =>{
                        return (
                            <>
                            <Cards className="values__value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>

                            </Cards>
                            </>
                        )
                    })
                }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
