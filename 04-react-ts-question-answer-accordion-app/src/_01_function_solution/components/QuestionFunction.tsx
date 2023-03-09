/*
 * Difference on how to declare props type
 * ----------------------------------------
 */

//----------------------------------------------------
//

// OK !

// import { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// const Question = ({
//   id,
//   question,
//   answer,
// }: {
//   id: string;
//   question: string;
//   answer: string;
// }) => {
//   const [showAnswer, setShowAnswer] = useState(false);

//   const toggleShowAnswer = () => {
//     setShowAnswer(() => !showAnswer);
//   };

//   return (
//     <article className="question">
//       <header>
//         <h4>{question}</h4>
//         <button className="btn" onClick={toggleShowAnswer}>
//           {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
//         </button>
//       </header>
//       {showAnswer && <p>{answer}</p>}
//     </article>
//   );
// };

// export default Question;

//----------------------------------------------------------------

// OK !
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import QuestionAnswerType from "../types/QuestionAnswerType";

const Question = (props: QuestionAnswerType) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleShowAnswer = () => {
    setShowAnswer(() => !showAnswer);
  };

  return (
    <article className="question">
      <header>
        <h4>{props.question}</h4>
        <button className="btn" onClick={toggleShowAnswer}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p>{props.answer}</p>}
    </article>
  );
};

export default Question;
