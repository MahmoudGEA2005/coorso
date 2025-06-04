import React from "react";
import "./MainBtn.css";

const MainBtn = ({ ttype, fn, id, altfn, children }) => {
  function handleFn() {
    if (fn) {
      fn((prev) => {
        if (!prev.includes(id)) {
          localStorage.setItem("courses", JSON.stringify([...prev, id]));
          altfn([true, "success"]);
          setTimeout(() => {
            altfn([false, ""]);
          }, 1500);
          return [...prev, id];
        }
        altfn([true, "fail"]);
        setTimeout(() => {
          altfn([false, ""]);
        }, 1500);
        return prev;
      });
    }
  }
  return (
    <button className="main-btn" type={ttype} onClick={handleFn}>
      {children}
    </button>
  );
};

export default MainBtn;
