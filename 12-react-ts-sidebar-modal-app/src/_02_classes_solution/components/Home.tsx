import { Component } from "react";
import { FaBars } from "react-icons/fa";
type HomePropsType = {
  isSideBarOpen: boolean;
  toggleSideBar: Function;
  isModalOpen: boolean;
  toggleModal: Function;
};

export default class Home extends Component<HomePropsType, {}> {
  render() {
    return (
      <main>
        <button
          className="sidebar-toggle"
          onClick={() => this.props.toggleSideBar(!this.props.isSideBarOpen)}
        >
          <FaBars />
        </button>
        <button
          className="btn"
          onClick={() => this.props.toggleModal(!this.props.isModalOpen)}
        >
          show modal
        </button>
      </main>
    );
  }
}
