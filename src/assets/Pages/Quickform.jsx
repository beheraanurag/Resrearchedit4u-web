// src/assets/Pages/Quickform.js
import React from "react";
import ser from "../content/demo";  // correct relative path
import "../style/style.css";

const Quickform = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="service-cards">
        {ser.map((serv, index) => {
          const Icon = serv.icon; // 👉 get the component
          return (
            <div className="service-card" key={index}>
              <h3 className="service-icon"><Icon /></h3>
              <h3>{serv.title}</h3>
              <h4>{serv.subtitle}</h4>
              <p>{serv.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Quickform;
