import "./EnrolledCourse.css";
import { coursesMap } from "../../data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const EnrolledCourse = ({ id, deleteCourse, ...probs }) => {
  const delCourse = () => {
    deleteCourse((prev) => {
      const temp = prev.filter((course) => course !== id);
      localStorage.setItem("courses", JSON.stringify(temp));
      return temp;
    });
  };
  const data = coursesMap.get(id);
  return (
    <div className="enrolled-course" {...probs}>
      <div className="del" onClick={delCourse}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      <img src={data["img"]} alt="" />
      <h3>{data["title"]}</h3>
    </div>
  );
};

export default EnrolledCourse;
