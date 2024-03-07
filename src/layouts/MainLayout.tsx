import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="application-page">
      <div className="application-page_container">
        <Menu />
        <article>
          <Outlet />
        </article>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
