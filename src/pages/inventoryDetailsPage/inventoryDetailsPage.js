import './InventoryDetailsPage.scss';
import InventoriesDetails from '../../components/InventoriesDetails/InventoriesDetails';

const InventoryDetailsPage = (props) => {
    return (
        <InventoriesDetails inventoryId={props.match.params.id}/>
    );
};

export default InventoryDetailsPage;