import "./gallery.css";
import ComponentsHeaders from "../../components/ComponentsHeaders";
// import HeaderImage from "../../images/header_bg_3.jpg";



const Gallery = () => {
  const images = [
    "https://d11airhslbrx5o.cloudfront.net/static/gallery1.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery2.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery3.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery4.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery5.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery6.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery7.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery8.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery9.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery10.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery11.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery12.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery13.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery14.jpg",
    "https://d11airhslbrx5o.cloudfront.net/static/gallery15.jpg",
   
  ];

  return (
    <>
      <ComponentsHeaders title="Gallery" image="https://d11airhslbrx5o.cloudfront.net/static/header_bg_3.jpg">
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
