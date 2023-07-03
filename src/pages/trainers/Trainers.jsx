import "./trainers.css";
import ComponentsHeaders from "../../components/ComponentsHeaders";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../../data";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Trainer from "../../components/Trainer";
const Trainers = () => {
  return (
    <>
      <ComponentsHeaders title="Our Trainer" image={HeaderImage}>
        Faciis isuto namam inde labrosoam expediata qui exercitation ? Dicta
        vero accusantium est aut molestia fugiy doloremque sucipte quod.
      </ComponentsHeaders>
      <section className="trainers">
        <div className="container trainer__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebook />, link: socials[2] },
                  { icon: <FaLinkedinIn />, link: socials[3] },
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
