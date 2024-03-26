function FileUpload() {
  return (
    <div className="file-upload">
      <label className="label">Chọn file</label>
      <div className="file-upload_container">
        <div className="input-file">
          <img src="assets/icons/cloud.png" alt="cloud" />
          <p>Gửi</p>
        </div>
        <img src="assets/icons/plus.png" alt="plus" />
      </div>
    </div>
  );
}

export default FileUpload;
