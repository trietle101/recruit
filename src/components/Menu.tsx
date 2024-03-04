const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-container">
        <div className="left">
          <div className="left-container">
            <img src="src/assets/images/alta.png" alt="alta" />
            <img src="src/assets/images/Plastics.png" alt="alta" />
            <img src="src/assets/images/media.png" alt="alta" />
            <img src="src/assets/images/software.png" alt="alta" />
            <img src="src/assets/images/unigons.png" alt="alta" />
          </div>
        </div>
        <div className="right">
          <div className="right-container">
            <div className="item">
              <img
                src="src/assets/icons/user-search-alt-1.png"
                alt="user-search-alt-1"
              />
              <p>Xem JD yêu cầu tuyển dụng</p>
            </div>
            <div className="item">
              <img src="src/assets/icons/signup.png" alt="signup" />
              <p>Đăng ký trực tuyến</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
