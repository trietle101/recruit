import InputRadio from "../../components/InputRadio";
import InputCheckbox from "../../components/InputCheckbox";
import { Link, useParams } from "react-router-dom";

function renderInputs(id) {
  switch (id) {
    case "1":
      return (
        <>
          <InputRadio label="A. Letter." value="a" />
          <InputRadio label="B. Integer." value="b" />
          <InputRadio label="C. Number." value="c" />
          <InputRadio label="D. Character." value="d" />
        </>
      );
    case "2":
      return (
        <>
          <InputCheckbox label="A. Letter." value="a" />
          <InputCheckbox label="B. Integer." value="b" />
          <InputCheckbox label="C. Number." value="c" />
          <InputCheckbox label="D. Character." value="d" />
        </>
      );
    default:
      return (
        <>
          <textarea rows={8} placeholder="Điền câu trả lời"></textarea>
        </>
      );
  }
}
function Question() {
  const { id } = useParams();
  return (
    <div className="question">
      <form action="">
        <div className="question-tittle">
          <p>Câu {id}:</p>
          <p>
            Sum = 24 + 56 + 72 + 82.
            <br />
            Trong trường hợp trên Sum là:
          </p>
        </div>
        {renderInputs(id)}
      </form>
      <div className="question__btn">
        <Link to={`/exam/question/${Number(id) - 1}`}>
          <img src="src/assets/icons/arrow-sm-left.png" alt="arrow-sm-left" />
        </Link>
        <Link to={`/exam/question/${Number(id) + 1}`}>
          <img src="src/assets/icons/arrow-sm-right.png" alt="arrow-sm-right" />
        </Link>
      </div>
    </div>
  );
}

export default Question;
