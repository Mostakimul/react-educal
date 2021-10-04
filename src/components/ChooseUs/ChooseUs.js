import React from 'react';

const ChooseUs = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-around items-center">
        <div>
          <h4 className="text-lg text-green-500">Why Choses Me</h4>
          <h3 className="text-3xl font-semibold mb-5">
            Tools For Teachers And Learners
          </h3>
          <p className="w-1/2">
            Oxford chimney pot Eaton faff about blower blatant brilliant, bubble
            and squeak he legged it Charles bonnet arse at public school
            bamboozled.
          </p>
          <button className="bg-green-700 text-white font-semibold py-1.5 px-2.5 mt-3">
            Join For Free
          </button>
        </div>
        <div>
          <img src="/images/why.png" alt="why" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
