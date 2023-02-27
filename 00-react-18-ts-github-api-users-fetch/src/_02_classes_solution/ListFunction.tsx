import React, { Component } from "react";
import PersonType from "./types/PersonType";

type ListProps = {
  people: PersonType[];
  handleRemoveOnePerson: Function;
};

export default class ListFunction extends Component<ListProps> {
  render() {
    return (
      <>
        {this.props.people.length > 1 && (
          <h2 className="h2_styled">friends to contact</h2>
        )}
        {/*  */}
        {this.props.people.length === 1 && (
          <h2 className="h2_styled">friend to contact</h2>
        )}
        {/*  */}
        {this.props.people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person article_styled">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <button
                  onClick={() => this.props.handleRemoveOnePerson(id)}
                  className="btn_styled"
                >
                  Event Finished
                </button>
              </div>
            </article>
          );
        })}
      </>
    );
  }
}

// function ListFunction({ people, handleRemoveOnePerson }: ListProps) {

// }
