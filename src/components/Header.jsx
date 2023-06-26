import { Link } from "react-router-dom";
// import MainHeader from "../../components/MainHeader";/
import Image from "../images/main_header.png"
import "../pages/home/home.css";
const Home = () => {
  return (
    <>
      <header className="main__header">
        <div className="container main__Header-container">
          <div className="main__header-left">
            <h4>#100 Days Workout</h4>
            <h1>Join the legends of the fitness world</h1>
            <p>
              Lorem ipsum dolor sit amet, consecteture adispicing elit.Aliquam
              excepturi similiwue .Dolorum , quaerat.
            </p>
            <Link to="/plans" className="btn lg">
              Get started{" "}
            </Link>
          </div>
          <div className="main__header-right">
            <div className="main__header-circle"></div>
            <div className="main__header-image">
              <img src={Image} alt="Main header Image" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
