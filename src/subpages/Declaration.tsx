import React from "react";

const Declaration: React.FC = () => {
  return (
    <div className="documentacao-container">
      <h1>Consulta de Declarações</h1>
      <iframe
        title="Declaração"
        width="90%"
        height="800px"
        src="https://siconfi.tesouro.gov.br/siconfi/pages/public/declaracao/declaracao_list.jsf"
        sandbox="allow-same-origin allow-scripts"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Declaration;
