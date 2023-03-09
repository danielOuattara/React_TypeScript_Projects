import { Component } from "react";

type MenuCategoriesPropsType = {
  categories: string[];
  updateCategory: Function;
};

export default class MenuCategoriesClass extends Component<MenuCategoriesPropsType> {
  render() {
    return (
      <ul className="btn-container">
        {this.props.categories.map((category) => {
          return (
            <li key={category}>
              <button
                className="filter-btn"
                onClick={() => this.props.updateCategory(category)}
              >
                {" "}
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
