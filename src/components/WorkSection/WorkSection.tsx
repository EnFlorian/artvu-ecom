import "./WorkSection.scss";

const WorkSection = () => {
  return (
    <article className="work">
      <div className="container work__wrapper">
        <section className="work__info">
          <h1 className="work__title">Work with Us</h1>
          <p className="work__description">
            Lorem ipsum dolor sitamet, consectetur adipiscing elit. Lorem ipsum dolor sitamet, consectetur adipiscing
            elit.
          </p>
        </section>
        <ul className="work__boni">
          <li className="work__boni-item">
            <h2 className="work__boni-title">Easy</h2>
            <p className="work__boni-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nemo nisi reiciendis? Consectetur odit, nihil
              aliquid explicabo expedita velit optio officiis, nisi magni rem veritatis. Earum maiores itaque a
              deserunt!
            </p>
          </li>
          <li className="work__boni-item">
            <h2 className="work__boni-title">Freedom</h2>
            <p className="work__boni-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, officia. Blanditiis laboriosam illum
              molestiae omnis, consequatur reiciendis eveniet id ratione veniam eligendi eius tempora doloribus earum.
              Incidunt nesciunt enim voluptates.
            </p>
          </li>
          <li className="work__boni-item">
            <h2 className="work__boni-title">Customization</h2>
            <p className="work__boni-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum vero harum iure. Laudantium sint
              blanditiis perspiciatis ad error mollitia, labore odit necessitatibus libero ut. Aspernatur, ea a.
              Aliquam, eaque quasi.
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default WorkSection;
