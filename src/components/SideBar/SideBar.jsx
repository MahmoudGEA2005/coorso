import React from "react";
import "./SideBar.css";
import { coursesData } from "../../data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const instructors = coursesData.map((course) => course["instructor"]);

const SideBar = ({
  includeinstructor,
  currentInstructors,
  isOpened,
  open,
  setPriceFilter,
}) => {
  const setPrice = (data) => {
    setPriceFilter([data.min || 0, data.max || 9000000]);
    open(false);
  };
  const { register, handleSubmit } = useForm();
  const includeHandler = (ins) => {
    includeinstructor((prev) => {
      if (currentInstructors.includes(ins)) {
        return prev.filter((pIns) => pIns !== ins);
      } else {
        return [...prev, ins];
      }
    });
  };
  return (
    <aside className={isOpened ? "opened" : ""}>
      <span
        className="close"
        onClick={() => {
          open(false);
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </span>
      <div className="special">Filters</div>
      <div className="filter-box">
        <h4>Instructor</h4>
        <form>
          {instructors.map((ins, index) => (
            <div className="check-filter" key={`ins-${index}`}>
              <input
                type="checkbox"
                onChange={() => {
                  includeHandler(ins);
                }}
                name=""
                id={ins}
              />
              <label htmlFor={ins}>{ins}</label>
            </div>
          ))}
        </form>
      </div>
      <div className="filter-box range">
        <h4>Instructor</h4>
        <form onSubmit={handleSubmit(setPrice)}>
          <div className="fields">
            <input
              type="number"
              {...register("min")}
              id=""
              placeholder="Min $"
            />
            <input
              type="number"
              {...register("max")}
              name="max"
              id=""
              placeholder="Max $"
            />
          </div>
          <input type="submit" value="Apply Price" />
        </form>
      </div>
    </aside>
  );
};

export default SideBar;
