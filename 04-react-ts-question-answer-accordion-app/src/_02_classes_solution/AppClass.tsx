import { Component } from "react";
import QuestionClass from "./components/QuestionClass";
import questions from "./data";

export default class AppClass extends Component {
  render() {
    return (
      <div className="container">
        <h3>
          question and answer about login
          <b>( react typescript class solution)</b>
        </h3>
        <section className="info">
          <ul>
            {questions.map((item) => {
              return (
                <li key={item.id}>
                  <QuestionClass {...item} />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}
