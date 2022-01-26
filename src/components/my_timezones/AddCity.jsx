import { useState } from "react";
import MyForm from "./Form";

function AddCity(props) {
  let { stateList, setAndSaveItems, } = props;

  return (
    <>
      <MyForm setAndSaveItems={setAndSaveItems} stateList={stateList} ></MyForm>
    </>
  );
}

export default AddCity;
