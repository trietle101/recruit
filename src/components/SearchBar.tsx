import Dropdown from "./Dropdown";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar-container">
        <div className="text">
          <img src="src/assets/icons/search.png" alt="search" />
          <input
            type="text"
            name="position"
            placeholder="Nhập vị trí muốn ứng tuyển"
          />
        </div>
        {/* <div className="dropdown">
          <p>Chọn lĩnh vực chuyên môn</p>
          <img src="src/assets/icons/arrow.png" alt="arrow" />
        </div>
        <div className="dropdown">
          <p>Chọn công ty</p>
          <img src="src/assets/icons/arrow.png" alt="arrow" />
        </div> */}
        <Dropdown
          label=""
          options={["IT", "Business", "Marketing", "Finance"]}
          placeholder="Chọn lĩnh vực chuyên môn"
        />
        <Dropdown
          label=""
          options={[
            "Alta Software",
            "Alta Plastics",
            "Alta Media",
            "Alta Group",
            "Unigons"
          ]}
          placeholder="Chọn công ty"
        />

        <div className="search-btn">
          <img src="src/assets/icons/search-w.png" alt="search" />
          <p>Tìm việc</p>
        </div>
        <div className="search-btn-mobile">
          <p>Lọc</p>
          <img src="src/assets/icons/setting-4.png" alt="search" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
