import React from 'react';
import { ImBook } from 'react-icons/im';

const OverviewCard = (props) => {
  return (
    <div className={`text-white rounded-lg p-5 shadow-lg ${props.className}`}>
      <ImBook size={50} />
      <h4 className="text-xl font-bold my-6">{props.title}</h4>
      <p className="font-light">{props.description}</p>
    </div>
  );
};

export default OverviewCard;
