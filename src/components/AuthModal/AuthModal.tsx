import "./AuthModal.scss";
import Modal from "react-modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { closeModal } from "../../state/UiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useDispatch } from "react-redux";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: "9999",
  },
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
  const isModalOpen = useSelector((state: RootState) => state.ui.isModalOpen);
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => dispatch(closeModal())}
      style={customStyles}
      contentLabel="Authentication Modal"
    >
      <section className="modal">
        <div className="container modal__wrapper">
          <div className="modal__form-container">
            <IoClose className="modal__close" onClick={() => dispatch(closeModal())} />
            {isLogin ? <h1 className="modal__title">Login</h1> : <h1 className="modal__title">Register</h1>}
            <form className="modal__form">
              {!isLogin && (
                <input
                  value={name}
                  aria-label="Name"
                  className="modal__input"
                  type="text"
                  placeholder="Please enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                value={email}
                aria-label="Email"
                className="modal__input"
                type="email"
                placeholder="Please enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                value={password}
                aria-label="Password"
                className="modal__input"
                type="password"
                placeholder="Please enter a password"
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <h2 className="modal__error">{error}</h2>}

              <button className="modal__btn" onClick={() => dispatch(closeModal())}>
                {isLogin ? "Login" : "Register"}
              </button>
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
