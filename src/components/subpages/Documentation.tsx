import React from "react";

const Documentation: React.FC = () => {
  return (
    <div className="documentacao-container">
      <h1>Documentação</h1>
      <iframe
        title="Documentação"
        width="90%"
        height="800px"
        src="https://siconfi.tesouro.gov.br/siconfi/pages/public/conteudo/conteudo.jsf?id=12503"
        sandbox="allow-same-origin allow-scripts"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Documentation;
