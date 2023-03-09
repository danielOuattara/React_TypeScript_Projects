import QuestionFunction from "./components/QuestionFunction";
import questions from "./data";

function App() {
  return (
    <div className="container">
      <h3>
        question and answer about login
        <b>( react typescript function solution)</b>
      </h3>
      <section className="info">
        <ul>
          {questions.map((item) => {
            return (
              <li key={item.id}>
                <QuestionFunction {...item} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
