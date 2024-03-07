import EmployeeApplication from "./EmployeeApplication";

function EmployeeApplicationPage() {
  return (
    <div className="application-page">
      <div className="application-page_container">
        <div className="banner">
          <p>Điền thông tin đăng ký</p>
        </div>
        <EmployeeApplication />
      </div>
    </div>
  );
}

export default EmployeeApplicationPage;
