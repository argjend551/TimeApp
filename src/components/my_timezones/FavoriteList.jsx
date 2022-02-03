import FavoriteItem from "./FavoriteItem";

function FavoriteList(props) {
  let { stateList, setAndSaveItems } = props;

  // PresistantData = FavoriteList 
  // FavoriteList = FavoriteItem.

  if (stateList != []) {

    // populate list from localstorage.
    // Also add relativ index location for delete button.
    const itemRows = [];
    for (let item of stateList) {
      const row = (
        <FavoriteItem key={item.id}{...{ city: item.city, utc: item.timezone, indexId: stateList.indexOf(item) }} setAndSaveItems={setAndSaveItems} stateList={stateList} />
      );
      itemRows.push(row);
    }

    return <>
      {itemRows}
    </>
  }
  else {
    return <>
      <p> Localstorage is empty</p>
    </>
  }
}

export default FavoriteList;
