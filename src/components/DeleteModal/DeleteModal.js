import './DeleteModal.scss';
import closeIcon from '../../assets/icons/close-24px.svg';

const DeleteModal = ({ title, id, onCancel, onConfirmDelete, isModal }) => {

    const deleteEntry = () => {
        onConfirmDelete(id);
    }

    if (!isModal) {
        return;
    }

    return (
        <div className='delete'>
            <div className='delete__confirmation'>
                <div className='delete__close'>
                    <img src={closeIcon} alt='close icon' onClick={onCancel}/>
                </div>
                <h1 className="delete__title">Delete {title} Warehouse?</h1>
                <p className='delete__question'>
                    Please confirm that you'd like to delete the {title} from the list of warehouses. You won't be able to undo this action.
                </p>
            </div>
            <div className='delete__actions'>
                <button className='delete__cancel' onClick={onCancel}>Cancel</button>
                <button className='delete__confirm' onClick={deleteEntry}>Delete</button>
            </div>
        </div>
    );
};

export default DeleteModal;