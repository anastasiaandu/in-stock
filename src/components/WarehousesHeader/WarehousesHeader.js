import "./WarehousesHeader.scss";

const WarehousesHeader = () => {
  return (
    <div className="warehouses__header">
        <h1>Warehouses</h1>
        <form className="warehouses__form">
            <input 
                type="text" 
                placeholder="Search..." 
                id="warehouses-search" 
                className="warehouses__search"
                name="warehousesSearch" 
                // className={!onError ? "upload__title" : "upload__title upload__title--error"}
                // value={titleValue}
                // onChange={onChange}
            />
            <button className="warehouses__add-button">+ Add New Warehouse</button>
        </form>
    </div>
  );
};

export default WarehousesHeader;