import React from "react";
import FriendsContextProvider from "./contextClass/FriendsContext";
import Container from "./ContainerClass";

function AppContextAPI() {
  return (
    <FriendsContextProvider>
      <Container />
    </FriendsContextProvider>
  );
}

export default AppContextAPI;
