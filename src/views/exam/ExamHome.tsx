import Dropdown from "../../components/Dropdown";
function ExamHome() {
  return (
    <div className="exam-home">
      <p className="banner">
        Xin chào <span className="name">thái trung kiên</span>
      </p>
      <div className="menu-bar">
        <Dropdown
          label=""
          placeholder="Chọn môn thi"
          options={[
            "Lập trình Back-end (Ngôn ngữ CSharp .Net, làm API)",
            "Lập trình Front-end (ReactJS)",
            "Lập trình Fullstack (Ngôn ngữ CSharp .Net, làm API, ReactJS)",
            "Lập trình di động (React Native)"
          ]}
        />
        <div className="menu-bar__btn">
          <img src="src/assets/icons/pluss.png" alt="pluss" />
          <p>Tạo đề thi</p>
        </div>
      </div>
    </div>
  );
}

export default ExamHome;
