import InputText from "../../components/InputText";
import { useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import { auth } from "../../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";

function ForgotPassword() {
  // const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();
  // const { error } = useSelector((state: RootState) => state.user);
  function handleChange(e: any) {
    setEmail(e.value);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(email);
    try {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Hãy kiểm tra email!");
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error("Error sending email  reset password:", error);
        });
    } catch (error) {
      // console.log(error);
    }
  }

  return (
    <div className="forgot-password">
      <p className="banner">Quên mật khẩu</p>
      <p className="description">
        Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu khôi phục lại mật khẩu
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <InputText
            handleChange={handleChange}
            placeholder="Nhập email của bạn"
            label="Email"
            name="email"
          />
          <button type="submit">Xác nhận</button>
          <Link to="/account">Quay lại đăng nhập</Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
