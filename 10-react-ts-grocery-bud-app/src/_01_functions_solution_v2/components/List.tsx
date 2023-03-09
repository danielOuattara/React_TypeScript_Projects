import { FaEdit, FaTrash } from "react-icons/fa";
import ItemType from "./../types/ItemType";

export default function ListFunction({
  itemsList,
  deleteItem,
  editItem,
}: {
  itemsList: ItemType[];
  deleteItem: Function;
  editItem: Function;
}) {
  return (
    <div className="grocery-list">
      {itemsList.map((item) => {
        return (
          <article key={item.id} className="grocery-item">
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <FaEdit className="edit-btn" onClick={() => editItem(item.id)} />
              <FaTrash
                className="delete-btn"
                onClick={() => deleteItem(item.id)}
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}
