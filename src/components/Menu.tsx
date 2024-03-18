import { useSelector, useDispatch } from "react-redux";
// import { setUser, clearUser } from "../redux/features/user/userSlice";
import { RootState, AppDispatch } from "../redux/store";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/userActionThunk";

const Menu = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { images } = useSelector((state: RootState) => state.images);
  const { isLoading } = useSelector((state: RootState) => state.user);
  const currentUser = localStorage.getItem("currentUser");
  if (!isLoading && !currentUser) {
    navigate("/account");
  }
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
              <>
                <div className="item">
                  <img
                    src="src/assets/icons/user-search-alt-1.png"
                    alt="user-search-alt-1"
                  />
                  <p>Thi trắc nghiệm</p>
                </div>
                <div className="item">
                  <img src="src/assets/icons/syllabus.png" alt="signup" />
                  <p>Tiến trình học tập</p>
                </div>
                <Link
                  to="/account"
                  className="user"
                  onClick={() => dispatch(logout())}
                >
                  <img src="src/assets/images/user.png" alt="user" />
                  <p>Trung Kiên</p>
                </Link>
              </>
            ) : (
              <>
                <div className="item">
                  <img
                    src="src/assets/icons/user-search-alt-1.png"
                    alt="user-search-alt-1"
                  />
                  <p>Xem JD yêu cầu tuyển dụng</p>
                </div>
                <Link to="application" className="item">
                  <img src="src/assets/icons/signup.png" alt="signup" />
                  <p>Đăng ký trực tuyến</p>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
// };
export default Menu;
