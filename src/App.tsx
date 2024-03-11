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
import ForgotPassword from "./views/account/ForgotPassword";
import ResetPassword from "./views/account/ResetPassword";
import ExamHome from "./views/exam/ExamHome";
import ExamLayout from "./views/exam/ExamLayout";
import Question from "./views/exam/Question";
import Report from "./views/employee/Report";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<EmployeeMain />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="application" element={<EmployeeApplicationPage />} />
          <Route path="report" element={<Report />} />
        </Route>
        <Route path="/employer" element={<MainLayout />}>
          <Route index element={<EmployerMain />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="application" element={<EmployerApplicationPage />} />
        </Route>
        <Route path="/account" element={<AccountLayout />}>
          <Route index element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="/exam" element={<MainLayout />}>
          <Route index element={<ExamHome />} />
          <Route path="question" element={<ExamLayout />}>
            <Route path=":id" element={<Question />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
