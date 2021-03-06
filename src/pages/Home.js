import React from 'react';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import Courses from '../components/Courses/Courses';
import Hero from '../components/Hero/Hero';
import Overview from '../components/Overview/Overview';

const Home = () => {
  return (
    <div>
      <div className="bg-green-200">
        <Hero></Hero>
      </div>
      <section className="my-12 py-12">
        <Overview></Overview>
      </section>
      <section className="bg-gray-200 my-12 py-12">
        <Courses></Courses>
      </section>
      <section className="my-12 py-12">
        <ChooseUs></ChooseUs>
      </section>
    </div>
  );
};

export default Home;
