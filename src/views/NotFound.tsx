import SearchBar from "../components/SearchBar";

function NotFound() {
  return (
    <div className="employeemain">
      <div className="employeemain-container">
        <SearchBar />
        <div className="banner">
          <p>
            Tìm <span>công việc mơ ước</span> của bạn
          </p>
          <p> tại ngôi nhà mới</p>
          <p className="sub-banner">
            Khi bạn đang tìm kiếm một công việc, có một số điều bạn có thể làm
            để tận dụng tối đa tìm kiếm của bạn
          </p>
        </div>
        <div className="notfound-image">
          <img src="src/assets/images/notfound.png" alt="notfound" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
