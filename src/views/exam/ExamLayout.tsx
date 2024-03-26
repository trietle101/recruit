import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  startTimer,
  decrementTimer
} from "../../redux/features/timer/timerSlice";
import { RootState } from "../../redux/store";
import Modal from "react-modal";

const customStylesModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
Modal.setAppElement("#root");

function ExamLayout() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { seconds, minutes, isRunning } = useSelector(
    (state: RootState) => state.timer
  );

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    dispatch(startTimer());
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(decrementTimer());
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return (
    <div className="exam-layout">
      <div className="exam-layout__header">
        <div className="exam-layout__header__title">
          <p>Đề thi môn</p>
          <h1>Lập trình Back-end (Ngôn ngữ CSharp .Net, làm API)</h1>
        </div>
        <div className="exam-layout__header__menu">
          <div className="exam-layout__header__menu-container">
            <div className="item">
              <p>Tổng câu hỏi: &nbsp;</p> <span>20</span>
            </div>
            <div className="item">
              <p>Hoàn thành: &nbsp;</p>
              <span>{id}/20</span>
            </div>
            <div className="timer">
              <img src="assets/icons/clock.png" alt="clock" />
              <p>
                00:0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </p>
            </div>
            <div className="exam-btn" onClick={openModal}>
              Nộp bài
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStylesModal}
        contentLabel="Example Modal"
      >
        <div className="modal">
          <h2>Nộp bài thi</h2>
          <p>Bạn có chắc muốn nộp bài thi hay không?</p>
          <div className="btn-exam">
            <button onClick={closeModal}>Đóng</button>
            <button onClick={closeModal}>Xác nhận</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ExamLayout;
