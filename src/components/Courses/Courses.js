import React from 'react';
import Course from '../Course/Course';

const Courses = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mx-auto">
        <h2 className="font-bold text-4xl pt-5">
          Find The Right <br />
          Online Course For You
        </h2>
        <p className="w-2/4 mx-auto">
          You don't have to struggle alone, you've got our assistance and help.
        </p>
      </div>
      {/* Courses */}
      <div className="grid grid-cols-3 gap-4 mt-10">
        <Course></Course>
      </div>
    </div>
  );
};

export default Courses;
