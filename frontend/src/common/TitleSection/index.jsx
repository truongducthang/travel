import React from 'react';
import './_TitleSection.scss';
const TitleSection = ({ title, title_ul, suggest }) => {
  return (
    <div className="titleSection">
      <h1 className="h1">
        {title || 'our'} <span>{title_ul || 'DESTINATIONS'}</span>
      </h1>
      <h3 className="h3">{suggest || 'CHOOSE YOUR NEXT DESTINATION'}</h3>
    </div>
  );
};

export default TitleSection;
