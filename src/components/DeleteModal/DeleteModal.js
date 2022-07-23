import { Component } from "react";
import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";

class DeleteModal extends Component {

  handleConfirmDeletion = () => {
    this.props.onConfirmDelete(this.props.id);
  };

  componentDidUpdate() {
    if (this.props.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" onClick={this.props.onClose}>
        <div
          className="modal__content"
          onClick={(event) => event.stopPropagation()}
        >
          <div>
            <div className="modal__close">
              <img
                className="modal__close-icon"
                src={closeIcon}
                alt="close icon"
                onClick={this.props.onClose}
              />
            </div>

            <h1 className="modal__question">
              Delete {this.props.title}{" "}
              {this.props.itemType === "warehouse"
                ? "warehouse"
                : "inventory item"}
              ?
            </h1>
            <p className="modal__verify">
              Please confirm that you'd like to delete {this.props.title} from{" "}
              {this.props.itemType === "warehouse"
                ? "the list of warehouses"
                : "the inventory list"}
              . You won't be able to undo this action.
            </p>
          </div>
          <div className="modal__actions">
            <button className="modal__cancel" onClick={this.props.onClose}>
              Cancel
            </button>
            <button
              className="modal__confirm"
              onClick={this.handleConfirmDeletion}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default DeleteModal;
