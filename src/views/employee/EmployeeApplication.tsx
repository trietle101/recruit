import ButtonSend from "../../components/ButtonSend";
import Dropdown from "../../components/Dropdown";
import FileUpload from "../../components/FileUpload";
import InputDate from "../../components/InputDate";
import InputText from "../../components/InputText";

function EmployeeApplication() {
  return (
    <div className="application">
      <form className="application-container">
        <FileUpload />
        <div className="input">
          <div className="input-left">
            <InputText placeholder="Nhập họ và tên" label="Họ và tên" />
            <InputDate placeholder="10/10/2021" label="Ngày sinh" />
            <Dropdown
              options={["a", "b", "c"]}
              label="Chọn vị trí ứng tuyển"
              placeholder="Vị trí ứng tuyển"
            />
            <InputText placeholder="Nhập email" label="Địa chỉ email" />
            <InputText placeholder="Nhập số điện thoại" label="Điện thoại" />
          </div>
          <div className="input-right">
            <InputText
              placeholder="Nhập trường đang học"
              label="Trường đang học"
            />
            <InputText placeholder="Nhập chuyên ngành" label="Chuyên ngành" />
            <Dropdown
              options={["a", "b", "c"]}
              label="Hình thức đăng ký"
              placeholder="Hình thức đăng ký"
            />
            <Dropdown
              options={["a", "b", "c"]}
              label="Hình thức thực hiện"
              placeholder="Hình thức thực hiện"
            />
            <Dropdown
              options={["a", "b", "c"]}
              label="Bạn biết đến Alta Group từ đâu"
              placeholder="Bạn biết đến Alta Group từ đâu"
            />
          </div>
        </div>
        <p className="notice">là những trường thông tin bắt buộc</p>
        <ButtonSend />
      </form>
    </div>
  );
}

export default EmployeeApplication;
