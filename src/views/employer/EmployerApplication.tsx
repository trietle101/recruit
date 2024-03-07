import ButtonSend from "../../components/ButtonSend";
import FileUpload from "../../components/FileUpload";
import InputDate from "../../components/InputDate";
import InputText from "../../components/InputText";

function EmployerApplication() {
  return (
    <div className="application">
      <form className="application-container">
        <FileUpload />
        <div className="input">
          <div className="input-left">
            <InputText
              placeholder="Nhập tên doanh nghiệp"
              label="Tên doanh nghiệp"
            />
            <InputDate placeholder="Nhập email" label="Email liên hệ" />
            <InputText
              placeholder="Nhập số điện thoại"
              label="Điện thoại công ty"
            />
          </div>
          <div className="input-right">
            <InputText
              placeholder="Nhập địa chỉ công ty"
              label="Địa chỉ công ty"
            />
            <InputDate
              placeholder="Nhập tên người quản lý"
              label="Người quản lý"
            />
            <InputText
              placeholder="Nhập số điện thoại người quản lý"
              label="Điện thoại người quản lý"
            />
          </div>
        </div>
        <p className="notice">là những trường thông tin bắt buộc</p>
        <ButtonSend />
      </form>
    </div>
  );
}

export default EmployerApplication;
