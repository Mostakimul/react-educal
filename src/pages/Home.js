import React from 'react';
import Hero from '../components/Hero/Hero';
import Overview from '../components/Overview/Overview';

const Home = () => {
  return (
    <div>
      <div className="bg-green-200">
        <Hero></Hero>
      </div>
      <div>
        <Overview></Overview>
      </div>
    </div>
  );
};

export default Home;
