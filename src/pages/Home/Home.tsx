import { FeaturedSection, HeroSection, WorkSection } from "../../components";
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
