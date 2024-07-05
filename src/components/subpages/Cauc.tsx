import React from "react";

const Cauc: React.FC = () => {
  return (
    <div className="siconfi-container">
      <iframe
        title="Siconfi"
        width="90%"
        height="800px"
        src="https://siconfi.tesouro.gov.br/siconfi/pages/public/sti/iframe_sti.jsf"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Cauc;
