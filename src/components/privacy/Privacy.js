import React from "react";
import "./privacy.css";
import logo from "../../assets/splash.png";

function Privacy() {
  return (
    <div className="privacy-container">
      <div className="header">
        <img src={logo} alt="Smart Food Insight Logo" />
        <h1>Smart Food Insight</h1>
      </div>
      <h2>Política de Privacidad</h2>
      <p>
        Esta política de privacidad describe cómo se recopila, utiliza y
        comparte la información personal de los usuarios de Smart Food Insight
        al utilizar la aplicación, usted acepta la recopilación y el uso de su
        información personal de acuerdo con esta política de privacidad.
      </p>

      <h2>Información que Recopilamos</h2>
      <p>
        Cuando utiliza la aplicación, podemos recopilar información personal que
        usted proporciona, como su nombre y dirección de correo electrónico.
        También podemos recopilar información sobre su uso de la aplicación,
        incluyendo su historial de navegación y las páginas que ha visitado.
      </p>

      <h2>Uso de la Información</h2>
      <p>
        Utilizamos la información recopilada para mejorar y personalizar su
        experiencia en la aplicación. También podemos utilizar la información
        para proporcionarle noticias y actualizaciones sobre nuestra aplicación,
        así como para responder a sus consultas y solicitudes de soporte
        técnico.
      </p>

      <h2>Compartir Información</h2>
      <p>
        No compartimos su información personal con terceros a menos que sea
        necesario para proporcionarle servicios o cumplir con nuestras
        obligaciones legales.
      </p>

      <h2>Seguridad de la Información</h2>
      <p>
        Tomamos medidas de seguridad razonables para proteger su información
        personal contra el acceso no autorizado, la alteración o la destrucción.
      </p>

      <h2>Cambios en Nuestra Política de Privacidad</h2>
      <p>
        Nos reservamos el derecho de cambiar esta política de privacidad en
        cualquier momento. Le notificaremos cualquier cambio mediante una
        publicación en la aplicación o por correo electrónico.
      </p>

      <div className="contact-section">
        <h3>Contacta con nosotros</h3>
        <a href="mailto:smartfoodinsight@gmail.com" className="contact-link">
          Enviar un correo electrónico
        </a>
      </div>
    </div>
  );
}

export default Privacy;
