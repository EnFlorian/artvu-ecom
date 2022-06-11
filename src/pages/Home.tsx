import FeaturedSection from "../components/FeaturedSection";
import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection";
import "./Home.scss";
const Home = () => {
  return (
    <article className="home">
      <HeroSection />
      <FeaturedSection />
      <WorkSection />
    </article>
  );
};

export default Home;
