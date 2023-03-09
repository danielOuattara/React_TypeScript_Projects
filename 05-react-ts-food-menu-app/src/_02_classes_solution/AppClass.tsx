import Menu from "./components/MenuClass";
import MenuCategories from "./components/MenuCategoriesClass";
import menuItems from "./data";

import React, { Component } from "react";

export default class AppClass extends Component {
  state = {
    category: "all",
  };

  updateCategory = (categoryArg: string) => {
    this.setState({ category: categoryArg });
  };

  render() {
    const categories: string[] = [
      "all",
      ...new Set(menuItems.map((item) => item.category)),
    ];

    const filteredMenu = menuItems.filter(
      (item) => item.category === this.state.category,
    );

    const menuToRender =
      this.state.category === "all" ? menuItems : filteredMenu;

    return (
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu </h2>
            <div className="underline"></div>
            <h3>( react typescript class solution )</h3>
            <MenuCategories
              categories={categories}
              updateCategory={this.updateCategory}
            />
            <Menu menuToRender={menuToRender} />
          </div>
        </section>
      </main>
    );
  }
}
