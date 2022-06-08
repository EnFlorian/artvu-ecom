import "./Auth.scss";
const Auth = () => {
  return (
    <section className="auth">
      <div className="container auth__wrapper">
        <div className="auth__form-container">
          <h1 className="auth__title">Login</h1>
          <form className="auth__form">
            <input aria-label="Name" className="auth__input" type="text" placeholder="Please enter your name" />
            <input aria-label="Email" className="auth__input" type="email" placeholder="Please enter your email" />
            <input
              aria-label="Password"
              className="auth__input"
              type="password"
              placeholder="Pleade enter a password"
            />
            <h2 className="auth__error">Error</h2>

            <button className="auth__btn">Login</button>
          </form>
          <p className="auth__alt">
            <span className="auth__alt-link">Register</span> instead
          </p>
        </div>
      </div>
    </section>
  );
};

export default Auth;
