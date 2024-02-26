import { Component } from "react";

export default class ListFunction extends Component<TypeListPropsClass> {
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
          return (
            <article key={person.id} className="person article_styled">
              <img src={person.image} alt={person.name} />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
                <button
                  onClick={() => this.props.handleRemoveOnePerson(person.id)}
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
