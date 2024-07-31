import React from "react";
import "../components/Powerbi.css";

const PowerbiReport: React.FC = () => {
  return (
    <div className="powerbi-container">
      <iframe
        title="Power BI"
        width="80%"
        height="800px"
        src="https://app.powerbi.com/reportEmbed?reportId=3174544a-d4c3-4abb-861e-2b9e0f41afb6&autoAuth=true&ctid=a91f37d2-04f3-4b36-b4d9-61f0431b7205"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PowerbiReport;
