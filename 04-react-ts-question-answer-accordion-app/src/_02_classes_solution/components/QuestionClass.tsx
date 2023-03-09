/*
 * Difference on how to declare props type
 * ----------------------------------------
 */

//----------------------------------------------------
//

// OK !

import { Component } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import QuestionAnswerType from "../types/QuestionAnswerType";

export default class QuestionClass extends Component<QuestionAnswerType> {
  state = {
    showAnswer: false,
  };

  toggleShowAnswer = () => {
    this.setState(() => !this.state.showAnswer);
  };

  render() {
    return (
      <article className="question">
        <header>
          <h4>{this.props.question}</h4>
          <button className="btn" onClick={this.toggleShowAnswer}>
            {this.state.showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {this.state.showAnswer && <p>{this.props.answer}</p>}
      </article>
    );
  }
}
