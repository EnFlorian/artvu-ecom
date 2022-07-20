import { Link } from "react-router-dom";
import "./HeroSection.scss";
import heroImgBig from "../../assets/images/hero.jpg";
import heroImgSmall from "../../assets/images/hero1.jpg";

const HeroSection = () => {
  return (
    <article className="hero">
      <div className="container hero__wrapper">
        <section className="hero__left-content">
          <h1 className="hero__title">Discover Your Next Painting</h1>
          <p className="hero__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iure dolorum, culpa rem alias sunt, incidunt
            laborum id dignissimos laboriosam impedit fugiat libero inventore deleniti. Incidunt sit temporibus debitis
            aspernatur.
          </p>
          <Link className="hero__ca-btn" to="/products">
            Start Exploring
          </Link>
        </section>
        <section className="hero__right-content">
          <img className="hero__image hero__image-big" src={heroImgBig} alt="Artwork" />
          <img className="hero__image hero__image-small" src={heroImgSmall} alt="Artwork" />
        </section>
      </div>
    </article>
  );
};

export default HeroSection;
