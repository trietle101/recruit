import InputText from "../../components/InputText";

function ForgotPassword() {
  return (
    <div className="forgot-password">
      <p className="banner">Quên mật khẩu</p>
      <p className="description">
        Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu khôi phục lại mật khẩu
      </p>
      <form>
        <div className="inputs">
          <InputText placeholder="Nhập email của bạn" label="Email" />
          <button type="submit">Xác nhận</button>
          <a href="#">Quay lại đăng nhập</a>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
