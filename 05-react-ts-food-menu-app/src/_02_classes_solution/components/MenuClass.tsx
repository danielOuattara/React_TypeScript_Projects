import { Component } from "react";
import SingleMenu from "./SingleMenuClass";
import SingleMealType from "../types/SingleMealType";

type MenuPropsType = {
  menuToRender: SingleMealType[];
};

export default class MenuClass extends Component<MenuPropsType> {
  render() {
    return (
      <div className="section-center">
        {this.props.menuToRender.map((menu) => (
          <SingleMenu key={menu.id} {...menu} />
        ))}
      </div>
    );
  }
}
