import { FaBars } from "react-icons/fa";

type HomePropsType = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Function;
  isModalOpen: boolean;
  setIsModalOpen: Function;
};

export default function Home(props: HomePropsType) {
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => props.setIsSideBarOpen(!props.isSideBarOpen)}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => props.setIsModalOpen(!props.isModalOpen)}
      >
        show modal NOW
      </button>
    </main>
  );
}
