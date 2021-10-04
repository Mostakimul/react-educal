import React from 'react';
import Courses from '../components/Courses/Courses';

const Services = () => {
  return (
    <div className="bg-green-700">
      <div className="container mx-auto text-white">
        <h2 className="text-6xl font-semibold py-10">All Courses</h2>
      </div>
      <section className="bg-gray-200 py-12">
        <Courses></Courses>
      </section>
    </div>
  );
};

export default Services;
