import React from 'react';
import { ImArrowRight2, ImBook, ImStarFull } from 'react-icons/im';
const Course = (props) => {
  const {
    courseName,
    courseImage,
    courseTeacher,
    teacherImage,
    courseCategory,
    lessons,
    rating,
    enrolled,
    cost,
  } = props.course;
  return (
    <div className="bg-white rounded-lg shadow-lg">
      {/* Card Image */}
      <div className="relative">
        <img src={courseImage} alt="Course 1" className="rounded-t-lg" />
        <p className="absolute top-1.5 left-1 rounded-3xl font-medium text-sm bg-green-700 text-white py-1 px-3">
          {courseCategory}
        </p>
      </div>
      {/* Card Body */}
      <div className="p-5">
        {/* lesson and rating */}
        <div className="flex justify-between items-center">
          <h4>
            <ImBook className="inline-block" /> {lessons} Lesson
          </h4>
          <h4>
            <ImStarFull className="inline-block" /> {rating} ({enrolled})
          </h4>
        </div>
        {/* Title */}
        <h3 className="my-4 text-xl font-medium text-green-700">
          {courseName}
        </h3>
        {/* Course Teacher */}
        <div className="flex items-center my-5">
          <img
            src={teacherImage}
            alt="Student 1"
            className="mr-4 rounded-full"
          />
          <p>{courseTeacher}</p>
        </div>
        {/* Card Footer */}
        <div className="flex justify-between items-center my-3">
          <h5 className="text-lg font-medium text-green-800">$ {cost}</h5>
          <button>
            Details <ImArrowRight2 className="inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
