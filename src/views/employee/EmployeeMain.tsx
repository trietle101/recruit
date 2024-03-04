import Menu from "../../components/Menu";
import SearchBar from "../../components/SearchBar";
import Jobs from "../../components/Jobs";
import Footer from "../../components/Footer";

function EmployeeMain() {
  return (
    <div className="employeemain">
      <div className="employeemain-container">
        <Menu />
        <article>
          <SearchBar />
          <div className="banner">
            <p>
              Tìm <span>công việc mơ ước</span> của bạn
            </p>
            <p> tại ngôi nhà mới</p>
          </div>
          <Jobs itemsPerPage={9} />
        </article>
        <Footer />
      </div>
    </div>
  );
}

export default EmployeeMain;
