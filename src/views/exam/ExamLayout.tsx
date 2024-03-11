import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, decrementTimer } from "../../features/timer/timerSlice";
import { RootState } from "../../app/store";

function ExamLayout() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { seconds, minutes, isRunning } = useSelector(
    (state: RootState) => state.timer
  );

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
              <img src="src/assets/icons/clock.png" alt="clock" />
              <p>
                00:0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </p>
            </div>
            <div className="exam-btn">Nộp bài</div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default ExamLayout;
