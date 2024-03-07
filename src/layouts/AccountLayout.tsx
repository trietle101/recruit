import { Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <div className="account-layout">
      <div className="header">
        <div className="icons">
          <img src="src/assets/images/alta.png" alt="alta" />
          <img src="src/assets/images/Plastics.png" alt="alta" />
          <img src="src/assets/images/media.png" alt="alta" />
          <img src="src/assets/images/software.png" alt="alta" />
          <img src="src/assets/images/unigons.png" alt="alta" />
        </div>
        <p>
          HỆ THỐNG TUYỂN DỤNG <br /> VÀ QUẢN LÝ SINH VIÊN THỰC TẬP
        </p>
      </div>
      <div className="content">
        <Outlet />
        <img src="src/assets/images/login.png" alt="alta" />
      </div>
    </div>
  );
};

export default AccountLayout;
