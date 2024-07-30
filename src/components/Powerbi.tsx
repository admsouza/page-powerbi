import React from "react";
import "../components/Powerbi.css";

const PowerbiReport: React.FC = () => {
  return (
    <div className="powerbi-container">
      <iframe
        title="Power BI"
        width="80%"
        height="800px"
        src="https://app.powerbi.com/reportEmbed?reportId=08887ff8-b57d-4d08-990a-20a2d71439f1&autoAuth=true&ctid=a91f37d2-04f3-4b36-b4d9-61f0431b7205"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PowerbiReport;
