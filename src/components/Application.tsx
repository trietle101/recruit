import ButtonSend from "./ButtonSend";
import Dropdown from "./Dropdown";
import FileUpload from "./FileUpload";
import InputDate from "./InputDate";
import InputText from "./InputText";

function Application() {
  return (
    <div className="application">
      <div className="application-container">
        <FileUpload />
        <div className="input">
          <div className="input-left">
            <InputText placeholder="Nhập họ và tên" label="Họ và tên" />
            <InputDate placeholder="10/10/2021" label="Ngày sinh" />
            <Dropdown placeholder="Option 1" label="Chọn vị trí ứng tuyển" />
            <InputText placeholder="Nhập email" label="Địa chỉ email" />
            <InputText placeholder="Nhập số điện thoại" label="Điện thoại" />
          </div>
          <div className="input-right">
            <InputText
              placeholder="Nhập trường đang học"
              label="Trường đang học"
            />
            <InputText placeholder="Nhập chuyên ngành" label="Chuyên ngành" />
            <Dropdown placeholder="Option 1" label="Hình thức đăng ký" />
            <Dropdown placeholder="Option 1" label="Hình thức thực hiện" />
            <Dropdown
              placeholder="Option 1"
              label="Bạn biết đến Alta Group từ đâu"
            />
          </div>
        </div>
        <p className="notice">là những trường thông tin bắt buộc</p>
        <ButtonSend />
      </div>
    </div>
  );
}

export default Application;
