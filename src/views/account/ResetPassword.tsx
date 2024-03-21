import InputPassword from "../../components/InputPassword";
import { useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import { auth } from "../../firebase/firebase";
import { confirmPasswordReset } from "firebase/auth";
import { useSearchParams } from "react-router-dom";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStylesModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");

function ResetPassword() {
  const [newPassword, setNewPassword] = useState({ password: "", confirm: "" });
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();
  // const navigate = useNavigate();
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
        openModal();
      } else {
        alert("Something is wrong; try again later!");
        console.log("missing oobCode");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
          <Link to="/account">Quay lại đăng nhập</Link>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStylesModal}
          contentLabel="Example Modal"
        >
          <div className="modal">
            <h2>Tạo mật khẩu thành công</h2>
            <p>
              Đăng nhập ngay để bắt đầu
              <br /> nhận được các cơ hội sự nghiệp lý tưởng
            </p>
            <div className="btn">
              <Link to="/account">Đăng nhập ngay</Link>
            </div>
          </div>
        </Modal>
      </form>
    </div>
  );
}

export default ResetPassword;
