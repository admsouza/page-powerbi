import React from "react";
import "../components/Powerbi.css";

const PowerbiReport: React.FC = () => {
  return (
    <div className="powerbi-container">
      <iframe
        title="Power BI"
        width="80%"
        height="800px"
        src="https://app.powerbi.com/reportEmbed?reportId=54e5d588-a790-4a45-ab30-7244bca03a82&autoAuth=true&ctid=a91f37d2-04f3-4b36-b4d9-61f0431b7205"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PowerbiReport;
