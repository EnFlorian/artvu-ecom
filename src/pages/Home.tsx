import FeaturedSection from "../components/FeaturedSection";
import HeroSection from "../components/HeroSection";
import "./Home.scss";
const Home = () => {
  return (
    <article className="home">
      <HeroSection />
      <FeaturedSection />
    </article>
  );
};

export default Home;
