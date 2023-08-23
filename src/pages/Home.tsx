import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate, useRoutes } from "react-router-dom";

function Home() {
  let sentences = [
    "Rimani in contatto con i tuoi amici in tempo Reale!",
    "La chat facile e veloce per scambiare informazioni in sicurezza",
    "La migliore app per parlare con persone lontane nel mondo",
  ];

  const [sentencesIndex, setSentencesIndex] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(
      () =>
        setSentencesIndex((index) => (index < sentences.length - 1 ? +1 : 0)),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalID);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <h1>La chat veloce e sicura per tutti</h1>
        <p>{sentences[sentencesIndex]}</p>
        <button onClick={() => navigate("./Login")}>Inizia subito</button>
        <div className="header-img-container">
          <img src="./imgs/header-girl-texting.jpg" alt="" />
          <img src="./imgs/header-people-talking.png" alt="" />
        </div>
      </header>
      <div className="features-section">
        <h2>Le features</h2>
        <div className="feature-list-container">
          <div className="feature-box">
            <h3>Sicuro e veloce</h3>
            <p>
              Rimani in contatto con i tuoi amici in maniera rapida e veloce.
              Tutto sincronizzato in tempo reale
            </p>
          </div>
          <div className="feature-box">
            <h3>Sicuro e veloce</h3>
            <p>
              Rimani in contatto con i tuoi amici in maniera rapida e veloce.
              Tutto sincronizzato in tempo reale
            </p>
          </div>
          <div className="feature-box">
            <h3>Sicuro e veloce</h3>
            <p>
              Rimani in contatto con i tuoi amici in maniera rapida e veloce.
              Tutto sincronizzato in tempo reale
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
