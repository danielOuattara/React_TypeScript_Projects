import { connect } from "react-redux";
import { removeOneFriend } from "./actions/friendsActions"; // optional 2
import { Dispatch } from "redux";

type TypeProps = {
  people: TypeFriendsReduxState;
  handleRemoveOnePerson: (id: string) => void;
};

function ListFunctionRedux({ people, handleRemoveOnePerson }: TypeProps) {
  return (
    <>
      {people.length > 1 && <h2 className="h2_styled">friends to contact</h2>}
      {people.length === 1 && <h2 className="h2_styled">friend to contact</h2>}
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person article_styled">
            <img src={image} alt={"picture of " + name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button
                className="btn_styled"
                onClick={() => handleRemoveOnePerson(id)}
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

const mapStateToProps = (state: TypeFriendsReduxState) => {
  return { people: state };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // option 1
    // handleRemoveOnePerson: (id: string) => {
    //   dispatch({ type: "REMOVE_FRIEND", payload: id });
    // },

    // option 2
    handleRemoveOnePerson: (id: string) => {
      dispatch(removeOneFriend(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListFunctionRedux);
