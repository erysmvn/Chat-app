import { useEffect, useState } from "react";
import { signIn, signUp } from "../services/LoginService";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userID")) {
      navigate("../chat");
    }
  }, []);

  const onSignIn = () => {
    setErrorMessage("");
    signIn(email, password)
      .then((userID: string) => {
        // redirect
        localStorage.setItem("userID", userID);
        navigate("../chat");
      })
      .catch((error) => setErrorMessage("Si è verificato un errore!"));
  };

  const onSignUp = () => {
    setErrorMessage("");
    signUp(email, password, username)
      .then((userID: string) => {
        // redirect
        localStorage.setItem("userID", userID);
        navigate("../chat");
      })
      .catch((error) => setErrorMessage("Si è verificato un errore!"));
  };

  return (
    <div className="login-page-container">
      <p>Accedi alla chat</p>
      <div className="login-form-container">
        {isSignUp && (
          <input
            type="text"
            className="username-input-field"
            placeholder="Come ti chiami?"
            onChange={(event) => setUsername(event.target.value)}
          />
        )}
        <input
          type="email"
          className="email-input-field"
          placeholder="Il tuo indirizzo email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          className="password-input-field"
          placeholder="Scegli una password"
          onChange={(event) => setPassword(event.target.value)}
        />
        {errorMessage && (
          <>
            <p className="login-error-message">{errorMessage}</p>
          </>
        )}
        {isSignUp && (
          <span>
            <a className="login-toggle" onClick={() => setIsSignUp(false)}>
              Hai gia un profilo?
            </a>
            <button className="login-form-button" onClick={onSignUp}>
              Crea il tuo profilo
            </button>
          </span>
        )}
        {!isSignUp && (
          <span>
            <a className="login-toggle" onClick={() => setIsSignUp(true)}>
              Non hai un profilo?
            </a>
            <button className="login-form-button" onClick={onSignIn}>
              Accedi alla chat
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Login;
