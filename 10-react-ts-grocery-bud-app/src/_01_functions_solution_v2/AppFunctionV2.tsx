import { useState, useEffect } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import ItemType from "./types/ItemType";

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsList-react-ts-function-v2");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsList-react-ts-function-v2")!);
  } else {
    return [];
  }
};

/*
In this solution I build a global state: see below, 
only one useState 

Building this kind of solution helps greatly in class 
component solution approach
*/

export default function AppFunctionV2() {
  const [state, setState] = useState({
    itemName: "",
    itemsList: retrieveLocalStorage(),
    isEditing: false,
    editID: "",
    alert: {
      show: false,
      msg: "",
      type: "",
    },
  });

  //---------------------------------------
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    return setState((prevState) => ({
      ...prevState,
      itemName: event.target.value,
    }));
  };

  //---------------------------------------
  const handleSubmitItem = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!state.itemName) {
      //display alert & do nothing
      return showAlert(true, "danger", "select a valid itemName name");
      //
    } else if (state.itemName && state.isEditing) {
      // edit itemName + show edit alert
      setState((prevState) => ({
        ...prevState,
        itemsList: [
          ...prevState.itemsList.map((item: ItemType) => {
            if (item.id === state.editID) {
              return { ...item, title: state.itemName };
            }
            return item;
          }),
        ],
        itemName: "",
        editID: "",
        isEditing: false,
      }));
      showAlert(true, "success", "Item successfully edited");
      //
    } else {
      // add new itemName + show add alert
      setState((prevState) => ({
        ...prevState,
        itemsList: [
          ...prevState.itemsList,
          {
            id: new Date().getTime().toString(),
            title: state.itemName,
          },
        ],
        itemName: "",
      }));
      showAlert(true, "success", "itemName added successfully");
    }
  };

  //---------------------------------------
  const showAlert = (show = false, type = "", msg = "") =>
    setState((prevState) => ({
      ...prevState,
      alert: {
        show,
        type,
        msg,
      },
    }));

  //---------------------------------------
  const clearItemsList = () => {
    setState((prevState) => ({ ...prevState, itemsList: [] }));
    showAlert(true, "danger", "emptying list");
  };

  //---------------------------------------
  const deleteItem = (id: string) => {
    setState((prevState) => ({
      ...prevState,
      itemsList: [
        ...prevState.itemsList.filter((item: ItemType) => item.id !== id),
      ],
    }));
    showAlert(true, "success", "itemName successfully removed");
  };

  //---------------------------------------
  const editItem = (id: string) => {
    const editingItem = state.itemsList.find(
      (item: ItemType) => item.id === id,
    );
    setState((prevState) => ({
      ...prevState,
      isEditing: true,
      editID: id,
      itemName: editingItem.title,
    }));
  };

  //---------------------------------------
  useEffect(() => {
    localStorage.setItem(
      "itemsList-react-ts-function-v2",
      JSON.stringify(state.itemsList),
    );
  }, [state.itemsList]);

  return (
    <section className="section-center ">
      <p>react + typescript + function solution version 2</p>

      <form className="grocery-form" onSubmit={handleSubmitItem}>
        {/* {alert.show && <AlertFunction {...alert} />} */}
        <Alert {...state.alert} showAlert={showAlert} />
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={state.itemName}
            onChange={handleChange}
          />
          <button type="submit" className="submit-btn">
            {state.isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {state.itemsList.length > 0 && (
        <div className="grocery-container">
          <List
            itemsList={state.itemsList}
            deleteItem={deleteItem}
            editItem={editItem}
          />
          <button className="clear-btn" onClick={clearItemsList}>
            clear all items
          </button>
        </div>
      )}
    </section>
  );
}
