import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeMain from "./views/employee/EmployeeMain";
import NotFound from "./views/NotFound";
import EmployeeApplicationPage from "./views/employee/EmployeeApplicationPage";
import MainLayout from "./layouts/MainLayout";
import EmployerApplicationPage from "./views/employer/EmployerApplicationPage";
import EmployerMain from "./views/employer/EmployerMain";
import Login from "./views/account/Login";
import AccountLayout from "./layouts/AccountLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<EmployeeMain />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="application" element={<EmployeeApplicationPage />} />
        </Route>
        <Route path="/employer" element={<MainLayout />}>
          <Route index element={<EmployerMain />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="application" element={<EmployerApplicationPage />} />
        </Route>
        <Route path="/account" element={<AccountLayout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
