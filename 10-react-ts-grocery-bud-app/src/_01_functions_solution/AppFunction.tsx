import React, { useState, useEffect } from "react";
import List from "./components/List";
import Alert from "./components/Alert";
import ItemType from "./types/ItemType";

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsList-react-ts");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsList-react-ts")!);
  } else {
    return [];
  }
};

export default function AppClass() {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState<ItemType[]>(
    retrieveLocalStorage(),
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  //---------------------------------------
  const handleSubmitItem = (
    event: React.ChangeEvent<HTMLFormElement>,
  ): void => {
    event.preventDefault();
    if (!item) {
      //display alert & do nothing
      return showAlert(true, "danger", "select a valid item name");
    } else if (item && isEditing) {
      // edit item
      setItemsList(() => {
        return itemsList.map((obj: ItemType) => {
          if (obj.id === editID) {
            return { ...obj, title: item };
          }
          return obj;
        });
      });
      setItem("");
      setEditID("");
      setIsEditing(false);
      showAlert(true, "success", "Item successfully edited");
    } else {
      // add new item + show add alert
      setItemsList(() => [
        ...itemsList,
        {
          id: new Date().getTime().toString(),
          title: item,
        },
      ]);
      showAlert(true, "success", "item added successfully");
      setItem("");
    }
  };

  //---------------------------------------
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  //---------------------------------------
  const clearItemsList = () => {
    setItemsList(() => []);
    showAlert(true, "danger", "emptying list");
  };

  //---------------------------------------
  const deleteItem = (id: string) => {
    setItemsList(itemsList.filter((item: ItemType) => item.id !== id));
    showAlert(true, "success", "item successfully removed");
  };

  //---------------------------------------
  const editItem = (id: string) => {
    const editingItem = itemsList.find((item: ItemType) => item.id === id)!;
    setIsEditing(true);
    setEditID(id);
    setItem(editingItem.title);
  };

  //---------------------------------------
  useEffect(() => {
    localStorage.setItem("itemsList-react-ts", JSON.stringify(itemsList));
  }, [itemsList]);

  return (
    <section className="section-center ">
      <p>react + typescript function solution version 1</p>

      <form className="grocery-form" onSubmit={handleSubmitItem}>
        {/* {alert.show && <AlertFunction {...alert} />} */}
        <Alert {...alert} showAlert={showAlert} />
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={item}
            onChange={(event) => setItem(event.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {itemsList.length > 0 && (
        <div className="grocery-container">
          <List
            itemsList={itemsList}
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
