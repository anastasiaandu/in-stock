import './InventoryDetailsPage.scss';
import InventoryDetails from '../../components/InventoryDetails/InventoryDetails';

const InventoryDetailsPage = (props) => {
    return (
        <InventoryDetails inventoryId={props.match.params.id}/>
    );
};

export default InventoryDetailsPage;