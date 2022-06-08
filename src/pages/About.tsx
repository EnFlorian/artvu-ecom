import "./About.scss";
import teamImg from "../assets/images/team.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="container about__wrapper">
        <div className="about__left-content">
          <img className="about__image" src={teamImg} alt="Team members" />
        </div>
        <section className="about__right-content">
          <h1 className="about__title">Our Mission</h1>
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl
            nisi tincidunt tortor, eget tincidunt nisl nisi eget nisl. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nulla officia libero reiciendis sit consectetur cumque excepturi eius iure. Itaque est
            quibusdam quia ex error molestias vero impedit enim sint natus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
