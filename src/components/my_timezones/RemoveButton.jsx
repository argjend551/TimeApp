import { useState } from "react";
import { FaTimes } from "react-icons/fa";
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
    <FaTimes
      className="deleteBtn"
      onClick={() => handleDelete(buttonId)}
    >
    </FaTimes>
  );
}


export default RemoveButton;