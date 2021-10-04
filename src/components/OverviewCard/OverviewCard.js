import React from 'react';

const OverviewCard = (props) => {
  return (
    <div className={`text-white rounded-lg p-4 ${props.className}`}>
      <h4 className="text-xl font-bold my-4">{props.title}</h4>
      <p className="font-light">{props.description}</p>
    </div>
  );
};

export default OverviewCard;
