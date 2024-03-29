import { useState } from "react";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

export type PropsType = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Function;
  isModalOpen: boolean;
  setIsModalOpen: Function;
};

export default function AppFunction() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <p style={{ textAlign: "center" }}>function solution</p>
      <Home
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </>
  );
}
