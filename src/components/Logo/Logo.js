import React from "react";
import Tilty from "react-tilty";
import eye from "./eye.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty className="tilty" glare scale={1.05} maxGlare={0.5}>
        <div className="inner pa3">
          <h2 style={{ fontFamily: "'Bungee Hairline', cursive" }}>
            Smart Detection
          </h2>
          <img src={eye} alt="logo"></img>
        </div>
      </Tilty>
    </div>
  );
};

export default Logo;
