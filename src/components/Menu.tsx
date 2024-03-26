import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userActionThunk";
import Slider from "react-slider-modal";
import "animate.css/animate.min.css";
import { useState } from "react";

const Menu = () => {
  const dispatch: AppDispatch = useDispatch();
  const [slideShow, setSlideShow] = useState(false);
  const { images } = useSelector((state: RootState) => state.images);
  const currentUser = localStorage.getItem("currentUser");
  const role = localStorage.getItem("role");

  return (
    <div className="menu">
      <div className="menu-container">
        <Link to="/" className="left">
          {images !== null && (
            <div className="left-container">
              <img src={images[0].url} alt="alta" />
              <img src={images[4].url} alt="alta" />
              <img src={images[2].url} alt="alta" />
              <img src={images[5].url} alt="alta" />
              <img src={images[6].url} alt="alta" />
            </div>
          )}
        </Link>
        <div className="right">
          <div className="right-container">
            {currentUser ? (
              role === "0" ? (
                <>
                  <Link to="/employer" className="item">
                    <img
                      src="assets/icons/file-search-alt.png"
                      alt="user-search-alt-1"
                    />
                    <p>Tìm kiếm việc làm</p>
                  </Link>
                  <Link to="/employer/application" className="item">
                    <img src="assets/icons/building-user.png" alt="signup" />
                    <p>Doanh nghiệp đăng ký</p>
                  </Link>
                  <Link
                    to="/account"
                    className="user"
                    onClick={() => dispatch(logout())}
                  >
                    <img src="assets/images/user.png" alt="user" />
                    <p>Trung Kiên</p>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/exam" className="item">
                    <img
                      src="assets/icons/user-search-alt-1.png"
                      alt="user-search-alt-1"
                    />
                    <p>Thi trắc nghiệm</p>
                  </Link>
                  <Link to="/report" className="item">
                    <img src="assets/icons/syllabus.png" alt="signup" />
                    <p>Tiến trình học tập</p>
                  </Link>
                  <Link
                    to="/account"
                    className="user"
                    onClick={() => dispatch(logout())}
                  >
                    <img src="assets/images/user.png" alt="user" />
                    <p>Trung Kiên</p>
                  </Link>
                </>
              )
            ) : (
              <>
                <div className="item">
                  <img
                    src="assets/icons/user-search-alt-1.png"
                    alt="user-search-alt-1"
                  />
                  <p>Xem JD yêu cầu tuyển dụng</p>
                </div>
                <Link to="application" className="item">
                  <img src="assets/icons/signup.png" alt="signup" />
                  <p>Đăng ký trực tuyến</p>
                </Link>
                <Link to="/account" className="user login-btn">
                  <p>Đăng nhập</p>
                </Link>
              </>
            )}
          </div>
          <div
            className="right-container-mobile"
            onClick={() => {
              setSlideShow(!slideShow);
            }}
          >
            <img src="assets/icons/menu.png" alt="user-search-alt-1" />
          </div>
        </div>
      </div>
      <Slider
        id="demoID3"
        className=""
        direction="right"
        animation="slide"
        closeModal={(e) => {
          setSlideShow(e);
        }}
        toggle={slideShow}
      >
        <div className="slider-container">
          <div className="slider-header">
            <img
              onClick={() => {
                setSlideShow(!slideShow);
              }}
              src="assets/icons/xmark.png"
              alt="user-search-alt-1"
            />
          </div>
          <div className="right">
            <div className="right-container">
              {currentUser ? (
                role === "0" ? (
                  <>
                    <Link to="/employer" className="item">
                      <img
                        src="assets/icons/file-search-alt.png"
                        alt="user-search-alt-1"
                      />
                      <p>Tìm kiếm việc làm</p>
                    </Link>
                    <Link to="/employer/application" className="item">
                      <img src="assets/icons/building-user.png" alt="signup" />
                      <p>Doanh nghiệp đăng ký</p>
                    </Link>
                    <Link
                      to="/account"
                      className="user"
                      onClick={() => dispatch(logout())}
                    >
                      <img src="assets/images/user.png" alt="user" />
                      <p>Trung Kiên</p>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/exam" className="item">
                      <img
                        src="assets/icons/user-search-alt-1.png"
                        alt="user-search-alt-1"
                      />
                      <p>Thi trắc nghiệm</p>
                    </Link>
                    <Link to="/report" className="item">
                      <img src="assets/icons/syllabus.png" alt="signup" />
                      <p>Tiến trình học tập</p>
                    </Link>
                    <Link
                      to="/account"
                      className="user"
                      onClick={() => dispatch(logout())}
                    >
                      <img src="assets/images/user.png" alt="user" />
                      <p>Trung Kiên</p>
                    </Link>
                  </>
                )
              ) : (
                <>
                  <div className="item">
                    <img
                      src="assets/icons/user-search-alt-1.png"
                      alt="user-search-alt-1"
                    />
                    <p>Xem JD yêu cầu tuyển dụng</p>
                  </div>
                  <Link to="application" className="item">
                    <img src="assets/icons/signup.png" alt="signup" />
                    <p>Đăng ký trực tuyến</p>
                  </Link>
                  <Link to="/account" className="user login-btn">
                    <p>Đăng nhập</p>
                  </Link>
                </>
              )}
            </div>
            <div
              className="right-container-mobile"
              onClick={() => {
                setSlideShow(!slideShow);
              }}
            >
              <img src="assets/icons/menu.png" alt="user-search-alt-1" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
// };
export default Menu;
