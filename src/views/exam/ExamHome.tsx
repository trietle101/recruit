import Dropdown from "../../components/Dropdown";
import { Link } from "react-router-dom";
function ExamHome() {
  function handleChange() {}
  return (
    <div className="exam-home">
      <p className="banner">
        Xin chào <span className="name">thái trung kiên</span>
      </p>
      <div className="menu-bar">
        <Dropdown
          handleChange={handleChange}
          label=""
          placeholder="Chọn môn thi"
          options={[
            "Lập trình Back-end (Ngôn ngữ CSharp .Net, làm API)",
            "Lập trình Front-end (ReactJS)",
            "Lập trình Fullstack (Ngôn ngữ CSharp .Net, làm API, ReactJS)",
            "Lập trình di động (React Native)"
          ]}
        />
        <Link to="/exam/question/1" className="menu-bar__btn">
          <img src="assets/icons/pluss.png" alt="pluss" />
          <p>Tạo đề thi</p>
        </Link>
      </div>
    </div>
  );
}

export default ExamHome;
