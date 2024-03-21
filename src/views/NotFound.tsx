import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function NotFound() {
  const { images } = useSelector((state: RootState) => state.images);

  return (
    <div className="employeemain">
      <div className="employeemain-container">
        <SearchBar />
        <div className="banner banner-notfound">
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
          {images !== null && <img src={images[3].url} alt="notfound" />}
        </div>
      </div>
    </div>
  );
}

export default NotFound;
