import { Component } from "react";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import Home from "./components/Home";

type StateType = {
  isSideBarOpen: boolean;
  isModalOpen: boolean;
};

export default class AppClass extends Component {
  state: StateType = {
    isSideBarOpen: false,
    isModalOpen: false,
  };

  toggleModal = () =>
    this.setState((prevState: StateType) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));

  toggleSideBar = () => {
    this.setState((prevState: StateType) => ({
      ...prevState,
      isSideBarOpen: !prevState.isSideBarOpen,
    }));
  };

  render() {
    return (
      <>
        <p style={{ textAlign: "center" }}>classes solution</p>
        <Home
          isModalOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
          isSideBarOpen={this.state.isSideBarOpen}
          toggleSideBar={this.toggleSideBar}
        />
        <Modal
          isModalOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
        />
        <Sidebar
          isSideBarOpen={this.state.isSideBarOpen}
          toggleSideBar={this.toggleSideBar}
        />
      </>
    );
  }
}
