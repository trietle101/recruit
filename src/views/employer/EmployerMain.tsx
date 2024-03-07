import SearchBar from "../../components/SearchBar";
import Jobs from "../../components/Jobs";

function EmployerMain() {
  return (
    <div className="employeemain">
      <div className="employeemain-container">
        <SearchBar />
        <div className="banner">
          <p>
            Tìm <span>công việc mơ ước</span> của bạn
          </p>
          <p> tại ngôi nhà mới</p>
        </div>
        <Jobs itemsPerPage={9} />
      </div>
    </div>
  );
}

export default EmployerMain;
