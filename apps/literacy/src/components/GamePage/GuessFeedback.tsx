import {BsCheckCircle, BsExclamationCircle} from "react-icons/bs";

interface Props {
  correct: null | boolean;
}

const GuessFeedback = ({correct}: Props) => {
  if (correct === null) return null;

  return (
    <div className="modal modal-open">
      {correct ? (
        <div className="alert alert-success shadow-lg text-3xl justify-center">
          <BsCheckCircle />
          <span>Well done!</span>
        </div>
      ) : (
        <div className="alert alert-error shadow-lg text-3xl justify-center">
          <div>
            <BsExclamationCircle />
            <span>Incorrect! try again</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuessFeedback;
