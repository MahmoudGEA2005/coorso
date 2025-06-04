import "./Header.css";
import SearchFn from "../SearchFn/SearchFn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Header = ({ controlEnrolled, changeSearch }) => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="left">
            <h1>
              <span>|</span>Co-orso
            </h1>
            <SearchFn changeSearchFn={changeSearch}></SearchFn>
          </div>
          <div
            className="right"
            onClick={() => {
              controlEnrolled((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={faCode} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
