import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";

const DeleteModal = (props) => {
  if (!props.show) {
    return null;
  }

  const handleConfirmDeletion = () => {
    props.onConfirmDelete(props.id);
  };
  return (
    <div className="modal" onClick={props.onClose}>
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <div>
          <div className="modal__close">
            <img src={closeIcon} alt="close icon" onClick={props.onClose} />
          </div>

          <h1 className="modal__question">
            Delete {props.title}{" "}
            {props.itemType === "warehouse" ? "warehouse" : "inventory item"}?
          </h1>
          <p>
            Please confirm that you'd like to delete {props.title} from{" "}
            {props.itemType === "warehouse"
              ? "the list of warehouses"
              : "the inventory list"}
            . You won't be able to undo this action.
          </p>
        </div>
        <div className="modal__actions">
          <button className="modal__cancel" onClick={props.onClose}>
            Cancel
          </button>
          <button className="modal__confirm" onClick={handleConfirmDeletion}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
