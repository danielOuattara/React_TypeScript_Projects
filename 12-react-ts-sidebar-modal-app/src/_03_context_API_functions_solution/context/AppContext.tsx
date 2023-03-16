import { useState, createContext } from "react";

export type SideBarType = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Function;
};

export type ModalType = {
  isModalOpen: boolean;
  setIsModalOpen: Function;
};

export type AppContextType = (ModalType & SideBarType) | undefined;

export const AppContext = createContext<AppContextType>(undefined);

export default function AppContextProvider(props: { children: JSX.Element[] }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{ isSideBarOpen, setIsSideBarOpen, isModalOpen, setIsModalOpen }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
