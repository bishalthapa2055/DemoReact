import "./gallery.css";
import ComponentsHeaders from "../../components/ComponentsHeaders";
import HeaderImage from "../../images/header_bg_3.jpg";

import gallery1 from "../../images/gallery1.jpg";
import gallery2 from "../../images/gallery2.jpg";
import gallery3 from "../../images/gallery3.jpg";
import gallery4 from "../../images/gallery4.jpg";
import gallery5 from "../../images/gallery5.jpg";
import gallery6 from "../../images/gallery6.jpg";
import gallery7 from "../../images/gallery7.jpg";
import gallery8 from "../../images/gallery8.jpg";
import gallery9 from "../../images/gallery9.jpg";
import gallery10 from "../../images/gallery10.jpg";
import gallery11 from "../../images/gallery11.jpg";
import gallery12 from "../../images/gallery12.jpg";
import gallery13 from "../../images/gallery13.jpg";
import gallery14 from "../../images/gallery14.jpg";
import gallery15 from "../../images/gallery15.jpg";

const Gallery = () => {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
  ];

  return (
    <>
      <ComponentsHeaders title="Gallery" image={HeaderImage}>
        <p>
          This is the gallery of our system which show our pictures of my teams
          and working equipments as well as gymming products{" "}
          <div className=""></div>
        </p>
      </ComponentsHeaders>
      
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <>
                <article key={index}>
                  <img src={image} alt={`gallery${index}.jpg`} />
                </article>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
