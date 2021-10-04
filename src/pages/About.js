import React from 'react';
import ChooseUs from '../components/ChooseUs/ChooseUs';

const About = () => {
  return (
    <div>
      <div className="bg-green-500">
        <div className="container mx-auto text-white">
          <h2 className="text-6xl font-semibold py-10">About Us</h2>
        </div>
      </div>

      <div className="grid grid-cols-4 container mx-auto py-8">
        {/* About Image */}
        <div className="relative">
          <img src="/images/about.jpg" alt="hero" className="h-full" />
        </div>
        {/* About Text */}
        <div className="col-start-3 col-span-2 text-left self-center">
          <h1 className="text-5xl font-bold">Achieve Your Goals With Educal</h1>
          <h3 className="font-normal text-lg">
            Lost the plot bobby such a fibber bleeding bits and bobs don't get
            shirty with me bugger all mate chinwag super pukka william barney,
            horse play buggered.
          </h3>
          <ul className="mt-5">
            <li>Upskill your organization.</li>
            <li>Access more then 100K online courses</li>
            <li>Learn the latest skills</li>
          </ul>
          <button className="mt-4 bg-transparent border-2 py-1 px-3">
            Apply Now
          </button>
        </div>
      </div>

      {/* Choose us */}
      <section className=" bg-gray-200 py-12">
        <ChooseUs></ChooseUs>
      </section>
    </div>
  );
};

export default About;
