import DetailsListItem from "../DetailsListItem/DetailsListItem";
import InventoryHeader from "../InventoryHeader/InventoryHeader";
import "./InventoryList.scss";

const InventoryList = () => {
  return (
    <section className="inventory">
      <InventoryHeader enableLocation={true} />
      <ul>
        <DetailsListItem
          inventoryItem="Television"
          status="In Stock"
          category="Electronics"
          quantity={500}
          location="Manhattan"
        />
      </ul>
    </section>
  );
};

export default InventoryList;
