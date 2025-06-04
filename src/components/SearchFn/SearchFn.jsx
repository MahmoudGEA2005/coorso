import "./SearchFn.css";

const SearchFn = ({ changeSearchFn }) => {
  const search = (e) => {
    changeSearchFn(e.target.value);
  };
  return (
    <div className="search-fn">
      <input
        type="search"
        name="search"
        id=""
        placeholder="Search"
        onChange={search}
      />
    </div>
  );
};

export default SearchFn;
