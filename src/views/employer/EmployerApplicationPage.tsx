import EmployerApplication from "./EmployerApplication";

function EmployerApplicationPage() {
  return (
    <div className="application-page">
      <div className="application-page_container">
        <div className="banner">
          <p>Điền thông tin đăng ký</p>
        </div>
        <EmployerApplication />
      </div>
    </div>
  );
}

export default EmployerApplicationPage;
