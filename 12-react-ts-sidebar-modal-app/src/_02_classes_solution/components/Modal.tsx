import { Component } from "react";
import { FaTimes } from "react-icons/fa";

type ModalPropsType = {
  isModalOpen: boolean;
  toggleModal: Function;
};

export default class Modal extends Component<ModalPropsType, {}> {
  render() {
    return (
      <div
        className={
          this.props.isModalOpen ? `modal-overlay show-modal` : `modal-overlay`
        }
      >
        <div className="modal-container">
          <h3>modal content</h3>
          <p>classes solution</p>
          <button
            className="close-modal-btn"
            onClick={() => this.props.toggleModal(!this.props.isModalOpen)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    );
  }
}
