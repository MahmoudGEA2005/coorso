import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content/Content";
import Enrolled from "./components/Enrolled/Enrolled";
import Toolkit from "./components/ToolKit/Toolkit";

const App = () => {
  const [coursesOpened, setCoursesOpened] = useState(false);
  const [filtersOpened, setFiltersOpened] = useState(false);
  const [myCourses, setMyCourses] = useState(
    localStorage.getItem("courses")
      ? JSON.parse(localStorage.getItem("courses"))
      : []
  );
  const [instructor, setInstructor] = useState([]);
  const [searchData, setSearchData] = useState();
  const [toolkit, setToolKit] = useState([false, ""]);
  const [priceFilter, setPriceFilter] = useState([]);
  return (
    <>
      <Toolkit
        appear={toolkit[0]}
        theme={toolkit[1] == "success" ? "success" : "fail"}
      >
        {toolkit[1] == "success"
          ? "Course's Enrolled !"
          : "You Are Allready Enrolled"}
      </Toolkit>
      <Header
        controlEnrolled={setCoursesOpened}
        changeSearch={setSearchData}
      ></Header>
      <main className="container">
        <SideBar
          includeinstructor={setInstructor}
          currentInstructors={instructor}
          isOpened={filtersOpened}
          open={setFiltersOpened}
          setPriceFilter={setPriceFilter}
        ></SideBar>
        <Content
          addCourse={setMyCourses}
          instructorFilter={instructor}
          searchFilter={searchData}
          toolkitController={setToolKit}
          setFiltersOpened={setFiltersOpened}
          priceFilter={priceFilter}
        ></Content>
      </main>
      {coursesOpened || filtersOpened ? (
        <div className={`overlay ${filtersOpened ? "overlay-f" : ""}`}></div>
      ) : (
        ""
      )}
      <Enrolled
        open={coursesOpened}
        close={setCoursesOpened}
        courses={myCourses}
        deleteCourse={setMyCourses}
      ></Enrolled>
    </>
  );
};

export default App;
