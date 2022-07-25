import './InventoriesDetailsPage.scss';
import InventoriesDetails from '../../components/InventoriesDetails/InventoriesDetails';

const InventoriesDetailsPage = (props) => {
    return (
        <InventoriesDetails inventoryId={props.match.params.id}/>
    );
};

export default InventoriesDetailsPage;