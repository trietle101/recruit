import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeMain from "./views/employee/EmployeeMain";
import NotFound from "./views/employee/NotFound";
import ApplicationPage from "./views/employee/ApplicationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeMain />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="application" element={<ApplicationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
