import { useState } from "react";
import "./AuthModal.scss";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "transparent",
  },
};

Modal.setAppElement("#root");

const AuthModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Authentication Modal">
      <section className="modal">
        <div className="container modal__wrapper">
          <div className="modal__form-container">
            <IoClose className="modal__close" onClick={closeModal} />

            {isLogin ? <h1 className="modal__title">Login</h1> : <h1 className="modal__title">Register</h1>}
            <form className="modal__form">
              {!isLogin && (
                <input aria-label="Name" className="modal__input" type="text" placeholder="Please enter your name" />
              )}

              <input aria-label="Email" className="modal__input" type="email" placeholder="Please enter your email" />
              <input
                aria-label="Password"
                className="modal__input"
                type="password"
                placeholder="Please enter a password"
              />
              {error && <h2 className="modal__error">{error}</h2>}
              <button className="modal__btn">{isLogin ? "Login" : "Register"}</button>
            </form>

            {isLogin ? (
              <p className="modal__alt">
                {" "}
                Not a member?{" "}
                <span className="modal__alt-link" onClick={() => setIsLogin(false)}>
                  Register
                </span>{" "}
                instead
              </p>
            ) : (
              <p className="modal__alt">
                Already a member?{" "}
                <span className="modal__alt-link" onClick={() => setIsLogin(true)}>
                  Login{" "}
                </span>
                instead
              </p>
            )}
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default AuthModal;