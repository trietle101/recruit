import InputPassword from "../../components/InputPassword";
import { useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import { auth } from "../../firebase/firebase";
import { confirmPasswordReset } from "firebase/auth";
import { useSearchParams, useNavigate } from "react-router-dom";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState({ password: "", confirm: "" });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const oobCode: string | null = searchParams.get("oobCode");
  function handleChange(e: any) {
    setNewPassword((prevState) => ({
      ...prevState,
      [e.name]: e.value
    }));
  }
  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log(newPassword);
    if (newPassword.password !== newPassword.confirm) {
      alert("Passwords did not match.");
      return;
    }

    try {
      if (oobCode) {
        await confirmPasswordReset(auth, oobCode, newPassword.password);
        navigate("/account");
      } else {
        alert("Something is wrong; try again later!");
        console.log("missing oobCode");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="reset-password">
      <p className="banner">Tạo lại mật khẩu</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <InputPassword
            name="password"
            handleChange={handleChange}
            placeholder="Nhập mật khẩu mới"
            label="Mật khẩu mới"
          />
          <InputPassword
            name="confirm"
            handleChange={handleChange}
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
