import { useState } from "react";
import Menu from "./components/MenuFunction";
import MenuCategories from "./components/MenuCategoriesFunction";
import menuItems from "./data";

function AppFunction() {
  // method 2: Much more easier and straight forward
  const categories: string[] = [
    "all",
    ...new Set(menuItems.map((item) => item.category)),
  ];
  const [category, setCategory] = useState("all");
  const filteredMenu = menuItems.filter((item) => item.category === category);
  const menuToRender = category === "all" ? menuItems : filteredMenu;

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu </h2>
          <div className="underline"></div>
          <h3>( react typescript function solution )</h3>
          <MenuCategories categories={categories} setCategory={setCategory} />
          <Menu menuToRender={menuToRender} />
        </div>
      </section>
    </main>
  );
}

export default AppFunction;
