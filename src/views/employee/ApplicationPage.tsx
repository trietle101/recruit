import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Application from "../../components/Application";

function ApplicationPage() {
  return (
    <div className="application-page">
      <div className="application-page_container">
        <Menu />
        <article>
          <div className="banner">
            <p>Điền thông tin đăng ký</p>
          </div>
          <Application />
        </article>
        <Footer />
      </div>
    </div>
  );
}

export default ApplicationPage;
