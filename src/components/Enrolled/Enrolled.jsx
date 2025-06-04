import React from "react";
import "./Enrolled.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import EnrolledCourse from "../EnrolledCourse/EnrolledCourse";

const Enrolled = ({ open, close, courses, deleteCourse }) => {
  return (
    <div className={`enrolled ${open == true ? "enrolled-open" : ""}`}>
      <div className="header">
        <div className="special">My Courses</div>
        <span
          onClick={() => {
            close(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </div>
      <div className="e-courses">
        {courses.map((course, index) => (
          <EnrolledCourse
            id={course}
            deleteCourse={deleteCourse}
            courses={courses}
            key={`enrolled-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Enrolled;
