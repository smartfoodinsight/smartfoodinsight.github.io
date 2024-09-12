import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/splash.png";
import { ReactComponent as GooglePlayIcon } from "../../assets/google-play-icon.svg";
import "./home.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Smart Food Insight</h1>
        <p className="App-description">
          Transforma la gestión de tu despensa con recordatorios personalizados
          para evitar que los alimentos caduquen. Escanea códigos de barras para
          obtener información nutricional y planifica tus comidas de manera
          eficiente, reduciendo el desperdicio de alimentos. Además, compara
          precios entre supermercados para ahorrar en tus compras.
        </p>
        <a
          className="download-button"
          href="https://play.google.com/store/apps/details?id=es.smartfoodinsight.smartfoodinsight&hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GooglePlayIcon className="google-play-icon" />
          Disponible <br></br>en Google Play
        </a>
        <Link className="privacy" to="/privacy-policy">
          Política de Privacidad
        </Link>
      </header>
    </div>
  );
}

export default Home;
