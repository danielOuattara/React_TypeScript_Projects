import { connect } from "react-redux";
import List from "./ListFunctionRedux";
import { removeAllFriends, resetAllFriends } from "./actions/friendsActions"; // optional 2
import { Dispatch } from "redux";

type TypeProps = {
  people: TypeFriendsReduxState;
  handleRemoveAllFriends: () => void;
  handleResetAllFriends: () => void;
};

function ContainerFunctionRedux({
  people,
  handleRemoveAllFriends,
  handleResetAllFriends,
}: TypeProps) {
  const quantity = people.length > 1 ? "birthdays" : "birthday";
  return (
    <main>
      <section className="container">
        <span>redux + functions solution </span>
        {people.length >= 0 && (
          <h3>
            {people.length} {quantity} today
          </h3>
        )}
        <List />
        {people.length !== 0 && (
          <button onClick={() => handleRemoveAllFriends()}> Clear all</button>
        )}
        {people.length === 0 && (
          <button onClick={handleResetAllFriends}> Refresh</button>
        )}
      </section>
    </main>
  );
}

const mapStateToProps = (state: TypeFriendsReduxState) => {
  return { people: state };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // option 1
    // handleRemoveAllFriends: () => {
    //   dispatch({ type: "REMOVE_ALL_FRIENDS" });
    // },

    //option 2
    handleRemoveAllFriends: () => {
      dispatch(removeAllFriends());
    },
    handleResetAllFriends: () => {
      dispatch(resetAllFriends());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerFunctionRedux);
