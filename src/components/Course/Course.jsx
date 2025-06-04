import { useState } from "react";
import "./Course.css";
import MainBtn from "../MainBtn/MainBtn";

const Course = ({
  img,
  instructor,
  title,
  price,
  enroll,
  id,
  toolkitController,
  children,
}) => {
  return (
    <>
      <div className="course">
        <img src={img} alt="" />
        <div className="course-info">
          <div className="by">
            By:
            <strong>
              <p>{instructor}</p>
            </strong>
          </div>
          <h3>{title}</h3>
          <p>{children}</p>
          <div className="enroll">
            <strong>{price}$</strong>
            <MainBtn fn={enroll} id={id} altfn={toolkitController}>
              Enroll
            </MainBtn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
