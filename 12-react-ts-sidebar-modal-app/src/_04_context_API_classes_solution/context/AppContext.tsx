import { Component, createContext } from "react";

type AppContextProviderStateType = {
  isSideBarOpen: boolean;
  isModalOpen: boolean;
};

type AppContextProviderMethodsType = {
  toggleModal: Function;
  toggleSideBar: Function;
};

type AppContextType =
  | (AppContextProviderStateType & AppContextProviderMethodsType)
  | undefined;

export const AppContext = createContext<AppContextType>(undefined);

export default class AppContextProvider extends Component<
  {
    children: JSX.Element[];
  },
  AppContextProviderStateType
> {
  state = {
    isSideBarOpen: false,
    isModalOpen: false,
  };

  toggleModal = () =>
    this.setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));

  toggleSideBar = () => {
    this.setState((prevState) => ({
      ...prevState,
      isSideBarOpen: !prevState.isSideBarOpen,
    }));
  };
  render() {
    return (
      <AppContext.Provider
        value={{
          isSideBarOpen: this.state.isSideBarOpen,
          toggleSideBar: this.toggleSideBar,
          isModalOpen: this.state.isModalOpen,
          toggleModal: this.toggleModal,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
