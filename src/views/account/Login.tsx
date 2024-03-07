import Dropdown from "../../components/Dropdown";
import InputText from "../../components/InputText";

function Login() {
  return (
    <div className="login">
      <p className="banner">Đăng nhập</p>
      <form>
        <div className="inputs">
          <Dropdown
            placeholder="Nhập vai trò"
            options={["Doanh nghiệp", "Sinh viên"]}
            label="Vai trò"
          />
          <InputText placeholder="Nhập email" label="Email" />
          <InputText placeholder="Nhập mật khẩu" label="Mật khẩu" />
        </div>
        <div className="func">
          <div className="remember-forgot">
            <div className="remember">
              <input type="checkbox" />
              <p>Ghi nhớ mật khẩu</p>
            </div>
            <a href="#">Quên mật khẩu?</a>
          </div>
          <div
            className="g-recaptcha"
            data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          ></div>
          <button type="submit">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
