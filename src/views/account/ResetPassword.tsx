import InputPassword from "../../components/InputPassword";

function ResetPassword() {
  return (
    <div className="reset-password">
      <p className="banner">Tạo lại mật khẩu</p>
      <form>
        <div className="inputs">
          <InputPassword placeholder="Nhập mật khẩu mới" label="Mật khẩu mới" />
          <InputPassword
            placeholder="Nhập lại mật khẩu mới"
            label="Nhập lại mật khẩu mới"
          />
          <button type="submit">Xác nhận</button>
          <a href="#">Quay lại đăng nhập</a>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
