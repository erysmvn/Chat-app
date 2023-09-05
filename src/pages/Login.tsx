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
    if (localStorage.getItem("userId")) {
      navigate("../chat");
    }
  }, []);

  const onSignIn = () => {
    setErrorMessage("");
    signIn(email, password)
      .then((userId: string) => {
        // redirect
        localStorage.setItem("userId", userId);
        navigate("../chat");
      })
      .catch((error) => setErrorMessage("Si è verificato un errore!"));
  };

  const onSignUp = () => {
    setErrorMessage("");
    signUp(email, password, username)
      .then((userId: string) => {
        // redirect
        localStorage.setItem("userId", userId);
        navigate("../chat");
      })
      .catch((error) => setErrorMessage("Si è verificato un errore!"));
  };

  return (
    <div>
      <div className="parent">
        <div className="logo_container">
          <img src="./chat-icon.png" alt="" />
        </div>
      </div>
        <div className="title_container">
          <p className="title">Login to your Account</p>
          <span className="subtitle">Get started with our app, just create an account and enjoy the experience.</span>
        </div>
    <div className="login-form-container">
    <div className="input-space"></div>
      <div className="input_container">
            {isSignUp && (
            <label className="input_label">Username</label>
            )} {isSignUp && (
            <svg className="icon" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
              <g transform="translate(-80.000000,272.000000) scale(0.180000,-0.180000)" fill="#000000" stroke="none">
                <path d="M892 1349 c-48 -14 -109 -80 -123 -131 -23 -89 12 -182 88 -229 57 -36 154 -34 210 3 62 41 88 90 88 168 0 77 -26 127 -85 166 -43 29 -125 39 -178 23z m136 -69 c42 -26 72 -76 72 -120 0 -44 -30 -94 -72 -120 -117 -71 -259 71 -188 188 26 42 76 72 120 72 19 0 50 -9 68 -20z"></path>
                <path d="M665 855 c-19 -18 -25 -35 -25 -70 0 -63 20 -105 70 -148 63 -54 125 -72 250 -72 121 0 184 17 244 67 74 61 100 175 51 223 l-24 25 -271 0 -271 0 -24 -25z m553 -75 c4 -53 -28 -97 -96 -128 -50 -23 -70 -26 -162 -27 -93 0 -111 3 -162 27 -38 17 -64 38 -78 60 -19 32 -27 88 -13 102 4 3 119 5 257 4 l251 -3 3 -35z"></path>
              </g>
            </svg>
            )}
        {isSignUp && (
          <input
          type="text"
          className="input_field"
          placeholder="What's your Username?"
          onChange={(event) => setUsername(event.target.value)}
          />
          )}
          </div>
          <div className="input-space"></div>
          <div className="input_container">
            <label className="input_label">Email</label>
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
              <path stroke-linejoin="round" stroke-width="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
            </svg>
        <input
          type="email"
          className="input_field"
          placeholder="Il tuo indirizzo email"
          onChange={(event) => setEmail(event.target.value)}
          />
          </div>
          <div className="input-space"></div>
          <div className="input_container">
            <label className="input_label">Password</label>
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon">
            <path stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"></path>
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34" d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
              <path fill="#141B34" d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"></path>
            </svg>
        <input
          type="password"
          className="input_field"
          placeholder="Scegli una password"
          onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {errorMessage && (
          <>
            <p className="login-error-message">{errorMessage}</p>
          </>
        )}
        <div className="input-space"></div>
        {!isSignUp && (
          <span>
            <button className="sign-in_btn" onClick={onSignIn}>
              Accedi alla chat
            </button>
            <a className="login-toggle" onClick={() => setIsSignUp(true)}>
              Don't have an account?
            </a>
          </span>
        )}
        {isSignUp && (
          <span>
            <button title="Sign In" type="submit" className="sign-in_btn">
              <span>Sign In</span>
            </button>
            <div className="input-space"></div>
            <a className="login-toggle" onClick={() => setIsSignUp(false)}>
              Are you already logged in?
            </a>
          </span>
        )}
      </div>
    </div>
  );
}

export default Login;
