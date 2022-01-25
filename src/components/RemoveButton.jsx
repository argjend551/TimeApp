import { useState } from "react";
import MyForm from "./Form";
import store from "../js/localStore";
import PresistantData from "./PresistantData";
import AddCity from "./AddCity";


function RemoveButton(props) {
  const [remove, removeCity] = useState([]);
  let { buttonId } = props;

  return (
    <button
      className="btn btn-danger btn-xs"
      onClick={() => handleDelete(buttonId)}
    >
      Delete {buttonId}
    </button>
  );
}

const handleDelete = (buttonId) => {

  const data = JSON.stringify(store.list);
  var items = JSON.parse(data);

  // dunno why id becomes 79.
  // items.push({ "id": data.length, "city": cityName, "timezone": cityTimezone, "image": "none.", "imageBgr": "None" });
  items.splice(buttonId, 1);

  store.list = items;
  store.save();

  console.log("Button id " + buttonId);
};



export default RemoveButton;