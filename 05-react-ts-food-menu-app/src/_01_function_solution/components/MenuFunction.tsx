import SingleMenu from "./SingleMenuFunction";
import SingleMealType from "../types/SingleMealType";

type MenuPropsType = {
  menuToRender: SingleMealType[];
};

const Menu = (props: MenuPropsType) => {
  return (
    <div className="section-center">
      {props.menuToRender.map((menu) => (
        <SingleMenu key={menu.id} {...menu} />
      ))}
    </div>
  );
};

export default Menu;
