import React from "react";

const Opendata: React.FC = () => {
  return (
    <div className="opendata-container">
      <h1>Dados Abertos</h1>
      <iframe
        title="Documentação"
        width="90%"
        height="800px"
        src="https://apidatalake.tesouro.gov.br/docs/siconfi/"
        sandbox="allow-same-origin allow-scripts"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Opendata;
