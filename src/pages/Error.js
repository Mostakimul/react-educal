import React from 'react';
import { useHistory } from 'react-router';

const Error = () => {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }
  return (
    <div className="container mx-auto">
      <div className="text-center my-12 py-12">
        <img src="/images/error.png" alt="Error" className="mx-auto" />
        <h2 className="text-5xl font-semibold py-2">Page Not Found!</h2>
        <p>Please try searching for some other page.</p>
        <button
          onClick={handleClick}
          className="bg-green-700 text-white py-1 px-3 rounded-md mt-3 shadow-lg"
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default Error;
