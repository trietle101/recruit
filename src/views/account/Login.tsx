import Dropdown from "../../components/Dropdown";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";
import ReCAPTCHA from "react-google-recaptcha";
import Error from "../../components/Error";

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
          <InputPassword placeholder="Nhập mật khẩu" label="Mật khẩu" />
        </div>
        <Error message="Sai tên đăng nhập hoặc mật khẩu" show={"closed"} />
        <div className="func">
          <div className="remember-forgot">
            <div className="remember">
              <input type="checkbox" />
              <p>Ghi nhớ mật khẩu</p>
            </div>
            <a href="#">Quên mật khẩu?</a>
          </div>
          <ReCAPTCHA sitekey="6Le4LzcpAAAAAAxhC87D-pYRskV2oo5CJwpZCCjn" />
          <button type="submit">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
