import ButtonSend from "../../components/ButtonSend";
import Dropdown from "../../components/Dropdown";
import InputText from "../../components/InputText";

function Report() {
  return (
    <div className="report">
      <div className="report-banner">
        <span>Xin chào </span>
        <span>thái trung kiên</span>
      </div>
      <form action="">
        <Dropdown
          label="Chọn lớp / Chọn nhóm thực tập"
          placeholder="Chọn lớp"
          options={["Hà Nội", "Hồ Chí Minh", "Đà Nẵng"]}
        />
        <InputText label="Link file" placeholder="Nhập link file" />
        <div className="input-textarea">
          <label htmlFor="checkbox">Nội dung báo cáo</label>
          <textarea rows={6}></textarea>
        </div>
        <ButtonSend />
      </form>
    </div>
  );
}

export default Report;
