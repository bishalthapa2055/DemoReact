import React from "react";
import Card from "../../src/pages/UI/Cards";

const Trainer = ({ image, name, job, socials }) => {
  return (
    <>
      <Card className="trainer">
        <div className="trainer__img">
          <img src={image} alt="card-image-trainer" />
        </div>

        <h3 >{name}</h3>
        <p>{job}</p>
        <div className="trainer__socials">
          {socials.map(({ icon, link }, index) => {
            return (
              <>
                <a key={index} href={link}>
                  {icon}
                </a>
              </>
            );
          })}
        </div>
      </Card>
    </>
  );
};

export default Trainer;
