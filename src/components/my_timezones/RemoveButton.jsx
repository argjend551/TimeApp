import { useState } from "react";

function RemoveButton(props) {
  const [remove, removeCity] = useState([]);
  let { buttonId, setAndSaveItems, stateList } = props;

  const handleDelete = (buttonId) => {

    // Skall vara rätt ? filter((element) => { /* ... */ } )
    // item typ fel ? 

    //let updatedList = stateList.filter((item) => { return item.indexId != buttonId });
    let updatedList = stateList.filter((item) => { return item.indexId != buttonId });

    // vet inte varför det funkar om jag splicar efter ovan.
    updatedList.splice(buttonId, 1);

    setAndSaveItems(updatedList);
  };

  return (
    <button
      className="btn btn-danger btn-xs"
      onClick={() => handleDelete(buttonId)}
    >
      Delete {buttonId}
    </button>
  );
}


export default RemoveButton;