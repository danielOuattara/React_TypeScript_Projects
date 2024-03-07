import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { friendsActions } from "./store/friends-slice";
import List from "./ListClassReduxToolkit";
import type { AppDispatch, RootState } from "./store";

//--------------------------------------------------------------

const mapStateToProps = (state: RootState) => {
  return { friends: state.friends.friends };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    handleRemoveAllFriends: () => {
      dispatch(friendsActions.removeAllFriends());
    },
    handleResetAllFriends: () => {
      dispatch(friendsActions.resetAllFriends());
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ContainerProps = ConnectedProps<typeof connector>;

class ContainerClassReduxToolkit extends Component<ContainerProps> {
  render() {
    console.log(this.props);
    return (
      <main>
        <section className="container">
          <span>redux toolkit + classes solution </span>
          {this.props.friends.length > 1 && (
            <h3>{this.props.friends.length} birthdays today</h3>
          )}
          {(this.props.friends.length === 1 ||
            this.props.friends.length === 0) && (
            <h3>{this.props.friends.length} birthday today</h3>
          )}
          <List />
          {this.props.friends.length !== 0 && (
            <button onClick={this.props.handleRemoveAllFriends}>
              Clear all
            </button>
          )}
          {this.props.friends.length === 0 && (
            <button onClick={this.props.handleResetAllFriends}>Refresh</button>
          )}
        </section>
      </main>
    );
  }
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ContainerClassReduxToolkit);

export default connector(ContainerClassReduxToolkit);
