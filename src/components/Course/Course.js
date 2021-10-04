import React from 'react';
import { ImArrowRight2, ImBook, ImStarFull } from 'react-icons/im';
const Course = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      {/* Card Image */}
      <div>
        <img
          src="/images/course-1.jpg"
          alt="Course 1"
          className="rounded-t-lg"
        />
      </div>
      {/* Card Body */}
      <div className="p-5">
        {/* lesson and rating */}
        <div className="flex justify-between items-center">
          <h4>
            <ImBook className="inline-block" /> 43 Lesson
          </h4>
          <h4>
            <ImStarFull className="inline-block" /> 4.5 (44)
          </h4>
        </div>
        {/* Title */}
        <h3 className="my-4 text-xl font-medium text-green-700">
          Become a product Manager Learn the skills and job.
        </h3>
        {/* Course Teacher */}
        <div className="flex items-center my-5">
          <img
            src="/images/student-1.jpg"
            alt="Student 1"
            className="mr-4 rounded-full"
          />
          <p>Jim Sechen</p>
        </div>
        {/* Card Footer */}
        <div className="flex justify-between items-center my-3">
          <h5 className="text-lg font-medium text-green-800">Free</h5>
          <button>
            Details <ImArrowRight2 className="inline-block" />{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
