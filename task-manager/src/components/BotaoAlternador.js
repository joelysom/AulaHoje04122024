import React, { useState } from "react";
import "../App.css";

function BotaoAlternador() {
  const [estado, setEstado] = useState(false);

  const alterarFundo = () => {
    setEstado(!estado);
    document.body.style.backgroundColor = !estado ? "black" : "white";
  };

  return (
    <div>
      <button
        className={estado ? "desligado" : "ligado"}
        onClick={alterarFundo}
      >
        {estado ? "desligado" : "ligado"}
      </button>
    </div>
  );
}

export default BotaoAlternador;
