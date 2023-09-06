import { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate, useRoutes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  let sentences = [
    "Stay in touch with your friends in real time!",
    "The quick and easy chat to exchange information safely",
    "The best app to talk to people far away in the world",
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

  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container">
      <header>
        <br />
        <h1>Stay in chat with the world</h1>
        <p>{sentences[sentencesIndex]}</p>
        <button onClick={() => navigate("./Login")}>Try now</button> 
        <div className="header-img-container" >
          <img src="./header-girl-texting.jpg" alt="" data-aos="zoom-in" />
          <img src="./header-people-talking.png" alt="" data-aos="zoom-in" />
        </div>
      </header>
      <div className="features-section">
        <h2>The features</h2>
        <div className="feature-list-container" data-aos="fade-up">
          <div className="feature-box">
            <h3>Safe and fast</h3>
            <p>
              Stay in touch with your friends quickly and easily.
              All synchronized in real time
            </p>
          </div>
          <div className="feature-box" >
            <h3>Safe and fast</h3>
            <p>
              Stay in touch with your friends quickly and easily.
              All synchronized in real time
            </p>
          </div>
          <div className="feature-box">
            <h3>Safe and fast</h3>
            <p>
              Stay in touch with your friends quickly and easily.
              All synchronized in real time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
