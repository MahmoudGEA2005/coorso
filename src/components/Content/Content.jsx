import React from "react";
import "./Content.css";
import Course from "../Course/Course";
import { coursesData } from "../../data.js";

const Content = ({
  addCourse,
  instructorFilter,
  searchFilter,
  toolkitController,
  setFiltersOpened,
  priceFilter,
}) => {
  return (
    <div className="content">
      <div
        className="filters-btn"
        onClick={() => {
          setFiltersOpened(true);
        }}
      >
        Filters
      </div>
      <div className="courses">
        {coursesData
          .filter(
            (course) =>
              !searchFilter ||
              course["title"].toUpperCase().includes(searchFilter.toUpperCase())
          )
          .filter(
            (course) =>
              instructorFilter.length == 0 ||
              instructorFilter.includes(course["instructor"])
          )
          .filter(
            (course) =>
              priceFilter.length == 0 ||
              (course.price >= priceFilter[0] &&
                course["price"] <= priceFilter[1])
          )
          .map((course, index) => (
            <Course
              instructor={course["instructor"]}
              price={course["price"]}
              img={course["img"]}
              title={course["title"]}
              enroll={addCourse}
              id={course["id"]}
              key={`course-${index}`}
              toolkitController={toolkitController}
            >
              {course["description"]}
            </Course>
          ))}
      </div>
    </div>
  );
};

export default Content;
