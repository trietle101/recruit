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
        <div className="dropdown">
          <p>Chọn lĩnh vực chuyên môn</p>
          <img src="src/assets/icons/arrow.png" alt="arrow" />
        </div>
        <div className="dropdown">
          <p>Chọn công ty</p>
          <img src="src/assets/icons/arrow.png" alt="arrow" />
        </div>
        <div className="search-btn">
          <img src="src/assets/icons/search-w.png" alt="search" />
          <p>Tìm việc</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
