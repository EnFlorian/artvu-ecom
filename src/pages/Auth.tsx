import { useState } from "react";
import "./Auth.scss";
const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <section className="auth">
      <div className="container auth__wrapper">
        <div className="auth__form-container">
          {isLogin ? <h1 className="auth__title">Login</h1> : <h1 className="auth__title">Register</h1>}
          <form className="auth__form">
            <input aria-label="Name" className="auth__input" type="text" placeholder="Please enter your name" />
            <input aria-label="Email" className="auth__input" type="email" placeholder="Please enter your email" />
            <input
              aria-label="Password"
              className="auth__input"
              type="password"
              placeholder="Pleade enter a password"
            />
            {error && <h2 className="auth__error">{error}</h2>}
            <button className="auth__btn">{isLogin ? "Login" : "Register"}</button>
          </form>

          {isLogin ? (
            <p className="auth__alt">
              <span className="auth__alt-link">Register</span> instead
            </p>
          ) : (
            <p className="auth__alt">
              {" "}
              <span className="auth__alt-link">Login</span> instead
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
