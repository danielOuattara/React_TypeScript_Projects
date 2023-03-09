type MenuCategoriesPropsType = {
  categories: string[];
  setCategory: Function;
};

const MenuCategories = (props: MenuCategoriesPropsType) => {
  return (
    <ul className="btn-container">
      {props.categories.map((category) => {
        return (
          <li key={category}>
            <button
              className="filter-btn"
              onClick={() => props.setCategory(category)}
            >
              {" "}
              {category}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuCategories;
