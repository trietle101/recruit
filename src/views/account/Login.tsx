import Dropdown from "../../components/Dropdown";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";
import ReCAPTCHA from "react-google-recaptcha";
import Error from "../../components/Error";
import { login } from "../../redux/actions/userActionThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [role, setRole] = useState("");
  const { isLoggedIn, isLoading, error } = useSelector(
    (state: RootState) => state.user
  );

  function handleRoleChange(e: any) {
    setRole(e);
  }

  function handleChange(e: any) {
    const { name, value } = e;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  function onSubmit(e: any) {
    e.preventDefault();
    try {
      dispatch(login(formData));
    } catch (error) {
      // console.log(error);
    }
  }
  if (!isLoading && isLoggedIn) {
    if (role === "0") {
      navigate("/employer");
    } else navigate("/");
  }

  return (
    <div className="login">
      <p className="banner">Đăng nhập</p>
      <form onSubmit={onSubmit}>
        <div className="inputs">
          <Dropdown
            placeholder="Nhập vai trò"
            options={["Doanh nghiệp", "Sinh viên"]}
            label="Vai trò"
            handleChange={handleRoleChange}
          />
          <InputText
            name="email"
            placeholder="Nhập email"
            label="Email"
            handleChange={handleChange}
          />
          <InputPassword
            name="password"
            placeholder="Nhập mật khẩu"
            label="Mật khẩu"
            handleChange={handleChange}
          />
        </div>
        <Error
          message="Sai tên đăng nhập hoặc mật khẩu"
          show={error ? "show" : "hide"}
        />
        <div className="func">
          <div className="remember-forgot">
            <div className="remember">
              <input type="checkbox" />
              <p>Ghi nhớ mật khẩu</p>
            </div>
            <Link to="forgot-password">Quên mật khẩu?</Link>
          </div>
          <ReCAPTCHA sitekey="6Le4LzcpAAAAAAxhC87D-pYRskV2oo5CJwpZCCjn" />
          <button type="submit">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
