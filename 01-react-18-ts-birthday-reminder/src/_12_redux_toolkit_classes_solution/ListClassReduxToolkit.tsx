import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { friendsActions } from "./store/friends-slice";
import { RootState /* , AppDispatch */ } from "./store";

//----------------------------------------------------------

const mapStateToProps = (state: RootState) => {
  return { friends: state.friends.friends };
};

/* option 1 */
// const mapDispatchToProps = (dispatch: AppDispatch) => {
//   return {
//     handleRemoveOnePerson: (id: string) => {
//       dispatch(friendsActions.removeOneFriend(id));
//     },
//   };
// };

const connector = connect(mapStateToProps /* , mapDispatchToProps */);

type ListProps = ConnectedProps<typeof connector>;

class ListClassReduxToolkit extends Component<ListProps> {
  render() {
    return (
      <>
        {this.props.friends.length > 1 && (
          <h2 className="h2_styled">friends to contact</h2>
        )}
        {this.props.friends.length === 1 && (
          <h2 className="h2_styled">friend to contact</h2>
        )}
        {this.props.friends.map((person) => {
          return (
            <article key={person.id} className="person article_styled">
              <img src={person.image} alt={"picture of " + person.name} />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
                <button
                  className="btn_styled"
                  // option 1
                  // onClick={() => this.props.handleRemoveOnePerson(person.id)}

                  // options 2
                  onClick={() =>
                    this.props.dispatch(
                      friendsActions.removeOneFriend(person.id),
                    )
                  }
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

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps,
// )(ListClassReduxToolkit);

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(ListClassReduxToolkit);
